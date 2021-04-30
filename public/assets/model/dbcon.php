<?php

class DbConnect {
    private $server_name = "localhost";
    private $user_name = "root";
    private $password = "";
    private $db_name = "bootcamp";

    public $connect;

    function db_connect (){
        $this -> connect = mysqli_connect($this->server_name, $this->user_name, $this->password, $this->db_name);
        if($this -> connect -> connect_error){
            die("Connection failed: " . $conn->connect_error);
        }
        // print_r($this->connect);
    }

    public function sql_query ($query) {
        $this -> db_connect();
        $result = $this -> connect -> query($query);
        $this -> db_close();
        // print_r($result);
        return $result -> fetch_all();
    }

    public function sql_insert ($query) {
        $this -> db_connect();
        $result = $this -> connect -> query($query);
        $this -> db_close();
        return $result;
    }

    function db_close () {
        $this -> connect -> close();
    }

}

?>