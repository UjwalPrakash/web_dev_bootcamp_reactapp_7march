<?php

// require("dbcon.php");

class Instructor {
    function get_instructor_info () {
        $info = array(
            "10004",
            "Instructor Name",
            "Designation",
            "education-3.jpg",
            array("facebook_url","insta_url","yt_url","git_url")
        );
        return $info;
    }

    function get_instructor_detail () {
        $detail_info = array(
            $this->get_instructor_info(),
            "About me",
            "210 users enrolled",
            array("2.1","110","25"),
            array("Course Id")
        );
        return $detail_info;
    }
}

?>