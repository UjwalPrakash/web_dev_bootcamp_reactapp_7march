<?php

include("dbcon.php");

class course extends DbConnect {

    function get_all_course () {
        return $this -> sql_query ("SELECT * FROM courses");
    }

    function get_course_info () {
        $course_info = array(
            "123456",
            "Course Name",
            "Course Brief intro , You will understand industry graded ML/AI",
            "thumbnail.png",
            "18 lectures",
            "8 hours",
            array("Instrcutor Id", "Instructor 2"),
            array("23175", array(4.5,1200), 251)
        );
        return $course_info;
    }

    function get_course_overview () {
        return '<h4>25 That Prevent Job Seekers From Overcoming Failure</h4>
                <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.</p>
                <h3>What you’ll learn?</h3>
                <ul class="review-list">
                    <li>Phasellus enim magna, varius et commodo ut.</li>
                    <li>Sed consequat justo non mauris pretium at tempor justo.</li>
                    <li>Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                    <li>Phasellus enim magna, varius et commodo ut.</li>
                    <li>Phasellus enim magna, varius et commodo ut.</li>
                    <li>Sed consequat justo non mauris pretium at tempor justo.</li>
                    <li>Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                    <li>Phasellus enim magna, varius et commodo ut.</li>
                </ul>
                <h3>Requirements</h3>
                <ul class="requirement-list">
                    <li>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo</li>
                    <li>Ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel.</li>
                    <li>Phasellus enim magna, varius et commodo ut.</li>
                    <li>Varius et commodo ut, ultricies vitae velit. Ut nulla tellus.</li>
                    <li>Phasellus enim magna, varius et commodo ut.</li>
                </ul>';
    }

    function get_course_curriculum () {
        return "1,2,3,4";
    }

    function get_course_announcement () {
        return "New announccement";
    }

    function get_course_faqs () {
        return "FAQs";
    }

    function get_course_reviews () {
        return "reviews";
    }
}

?>