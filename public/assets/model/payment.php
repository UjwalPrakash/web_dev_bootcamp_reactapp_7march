<?php

require_once("libs/razorpay/Razorpay.php");
require("config.php");

use Razorpay\Api\Api;

$api_key = $razorpay_api_key;
$api_secret = $razorpay_api_secret;

$api = new Api($api_key, $api_secret);

function create_order($receipt, $amount) {
    $order = $api->order->create(array(
        'receipt' => 123,
        'amount' => 100,
        'currency' => 'INR'
    ));
    print_r($order);
    return $order;
}

?>