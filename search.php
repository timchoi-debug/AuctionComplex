<?php 

$input = $_GET["email"];

function searchName($email) {
    $connection = mysqli_connect("localhost", "root", "", "google_accounts");

    $search = mysqli_query($connection, "SELECT Name FROM google_login WHERE Email = 'email'");

    $data = array();

    while ($row = mysql_fetch_assoc($search)) {
        $data[] = $row;
    }

    return json_encode($data);
}

$emails = searchName(input);
?>