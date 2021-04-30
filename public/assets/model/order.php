<?php

require_once("dbcon.php");
require_once("libs/razorpay/Razorpay.php");

use Razorpay\Api\Api;

class Order extends DbConnect {
    function get_receipt_amount ($receipt_id) {
        $query = "SELECT SUM(content_price) as total_amount FROM receipt WHERE id=".$receipt_id;
        return $this -> sql_query($query);
    }

    function generate_order ($is_cart, $content_id) {
        $receipt_info = array();
        $insert_query = "";

        $get_max_receipt = $this->sql_query("SELECT MAX(receipt_id) FROM transaction");
        $new_receipt = $get_max_receipt[0][0]+1;
        array_push($receipt_info, $new_receipt);
        if($is_cart){
            // C A R T  - M A N A G E R
            $selected_product_price = $this -> sql_query('SELECT SUM(price) FROM cart WHERE id='.$content_id)[0][0];
            array_push($receipt_info, $selected_product_price);
            $selected_product_price = $selected_product_price*100;
            $save_receipt = $this -> sql_insert('INSERT INTO receipt VALUE ('.$new_receipt.', "c_'.$content_id.'", '.$selected_product_price.')');
            if($save_receipt){
                $order_id = $this -> get_razorpay_order($new_receipt, $selected_product_price);
                print_r($selected_product_price*100);
                $save_order_query = 'INSERT INTO transaction VALUES (10000008, '.$new_receipt.', "'.$order_id.'", "0x0", 0, CURRENT_TIMESTAMP)';
                if ($this -> sql_insert($save_order_query)){
                    array_push($receipt_info, $order_id);
                }
            }
        }else{
            $selected_product_price = $this -> sql_query('SELECT price FROM courses WHERE id='.$content_id)[0][0];
            array_push($receipt_info, $selected_product_price);
            $selected_product_price = $selected_product_price*100;
            $save_receipt = $this -> sql_insert('INSERT INTO receipt VALUE ('.$new_receipt.', '.$content_id.', '.$selected_product_price.')');
            if($save_receipt){
                $order_id = $this -> get_razorpay_order($new_receipt, $selected_product_price);
                print_r($selected_product_price*100);
                $save_order_query = 'INSERT INTO transaction VALUES (10000008, '.$new_receipt.', "'.$order_id.'", "0x0", 0, CURRENT_TIMESTAMP)';
                if ($this -> sql_insert($save_order_query)){
                    array_push($receipt_info, $order_id);
                }
            }
        }
        return $receipt_info;
    }

    function get_razorpay_order($receipt, $amount) {
        $api_key = "rzp_test_dIIFE2PKi9JHnM";
        $api_secret = "hmDE9s0jmVLo2iGFZHhhpwJK";

        $api = new Api($api_key, $api_secret);

        $order = $api->order->create(array(
            'receipt' => 123,
            'amount' => 100,
            'currency' => 'INR'
        ));
        // print_r($order);
        return $order['id'];
    }
}

?>