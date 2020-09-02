<?php 

$input = $_GET["name"];

function searchName($name) {
    $connection = mysqli_connect("localhost", "root", "", "google_accounts");

    $search = mysqli_query($connection, "SELECT Email FROM google_login WHERE Name = 'name'");

    $data = array();

    while ($row = mysql_fetch_assoc($search)) {
        $data[] = $row;
    }

    return json_encode($data);
}

$emails = searchName(input);
?>