<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
 
require '/usr/local/lib/php/phpmailer/src/Exception.php';
require '/usr/local/lib/php/phpmailer/src/PHPMailer.php';
require '/usr/local/lib/php/phpmailer/src/SMTP.php';
 
$mail = new PHPMailer(true);

    #if(isset($_POST['submit'])){
      $email=$_POST['email'];

		
	    $message="Email: $email<br>".;
      $subject="Solutions by Dussr - News Letter - Visitors";
      
 

    try {
    #$mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host = "smtp.office365.com";
    $mail->Port       = 587;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->SMTPAuth   = true;
    $mail->Username = "ticket.dusser@gmail.com";   
    $mail->Password = "Aa@1234567";
	
	$mail->SetFrom('ticket.dusser@gmail.com', 'FromEmail');
	$mail->addAddress('ticket.dusser@gmail.com', 'ToEmail');

    #$mail->SetFrom('meganb@#####.onmicrosoft.com', 'Megan Bowen');
    #$mail->addAddress('tawajad@dussrsolutions.com', 'Enquiries');
    $mail->IsHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $message;
    $mail->Send();
 
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
   # }