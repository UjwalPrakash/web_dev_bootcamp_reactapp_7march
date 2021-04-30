<?php

require("../libs/razorpay/Razorpay.php");
require_once("dbcon.php");
require_once("../config.php");

use Razorpay\Api\Api;

$razorpay_payment_id = $_POST["razorpay_payment_id"];
$razorpay_order_id = $_POST['razorpay_order_id'];
$razorpay_signature = $_POST['razorpay_signature'];

$api_key = "rzp_test_dIIFE2PKi9JHnM";
$api_secret = "hmDE9s0jmVLo2iGFZHhhpwJK";

$api = new Api($api_key, $api_secret);

$attributes = array(
    'razorpay_signature' => $razorpay_signature,
    'razorpay_payment_id' => $razorpay_payment_id,
    'razorpay_order_id' => $razorpay_order_id
);

$redirect_page = '<html><head><meta http-equiv="refresh" content="5;url='.$site_url.'"></head></html>';


try{
    $order = $api -> utility -> verifypaymentSignature($attributes);
    $confirm_payment_query = 'UPDATE transaction SET payment_id="'.$razorpay_payment_id.'",is_success=1 WHERE order_id="'.$razorpay_order_id.'"';

    $db = new DbConnect();
    
    if($db -> sql_insert($confirm_payment_query)) {
        echo $redirect_page;
        echo "Payment completed, redirecting in a moment";
    }else{
        echo $confirm_payment_query;
    }
    print_r($order);
    // echo '<script>alert("redirecting")</script>';
}
catch(Exception $e){
    echo $e->getMessage();
}

?>