<?php
$to = 'nobody@example.com';

//Request a 1 Day Free Trial
if(isset($_POST['tm_form'])&&($_POST['tm_form']==1)){
    $subject = "Request a 1 Day Free Trial";
    
    $message = "Name: ".$_POST['aics_name']."\r\n".
               "Email: ".$_POST['aics_email']."\r\n".
               "Phone: ".$_POST['aics_phone']."\r\n".
               "Data: ".$_POST['aics_datatime'];
}

//Contact us!
if(isset($_POST['tm_form'])&&($_POST['tm_form']==2)){
    $subject = "Contact us!";
    
    $message = "Name: ".$_POST['aics_name_ph']."\r\n".
               "Email: ".$_POST['aics_email_ph']."\r\n".
               "Phone: ".$_POST['aics_message']."\r\n";
}

if(mail($to, $subject, $message)){
    echo "Your message sent successfully.";
}else{
    echo "Error while sending email. Try again.";
}