<?php
	if(isset($_POST['email'])) {
     
		// CHANGE THE TWO LINES BELOW
		
		$email_to ="subham.b.chatterjee@gmail.com";
		$email_subject = "Website Query";//$_POST['subject'];
		$email_from = $_POST['email'];

		//error code

		function died($error) {
			echo "I am sorry, but there seems to be error(s) found within the form you submitted. <br/>";
			echo "The error(s) will appear below: <br/> <br/>";
			echo $error. "<br/><br/>";
			echo "Please go back and fix these error(s). <br/>";
			die();
		}

		//validation

		if(!isset($_POST['name']) ||
		!isset($_POST['email']) ||
		//!isset($_POST['subject']) || 
		!isset($_POST['message'])) {
			died('I am sorry, but there appears to be a problem with the form you submitted.');
        }

		$name = $_POST['name'];
		$email = $_POST['email'];
		//$subject = $_POST['subject'];
		$message = $_POST['message'];

		//expected strings

		$error_message = "";
		
		$string_exp = "/^[A-Za-z.'-]+$/";   
		if (!preg_match($string_exp, $name)) {
			$error_message .= '<b> The Name you entered does not appear to be valid. </b> <br/>';
		}
		
		$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
		if (!preg_match($email_exp, $email)) {
			$error_message .= '<b> The Email Address you entered does not appear to be valid. </b> <br/>';
		}

		/*if(strlen($subject) < 3){
			$error_message .= '<b> The Subject you entered does not appear to be valid. </b> <br/>';    
		}*/

		if(strlen($message) < 2){
			$error_message .= '<b> The Message you entered does not appear to be valid. </b> <br/>';    
		}

		if(strlen($error_message) > 0 ){
			died($error_message);
		}
		$email_message = "Form Details below.\n\n";

		//sanitization
		function clean_string($string){ 
			$bad = array("content-type", "bcc:", "to:", "cc:", "href");
			return str_replace($bad, "", $string);
		}

		$email_message .= "Name:" . clean_string($name) . "\n";
		$email_message .= "E-Mail:" . clean_string($email) . "\n";
		//$email_message .= "Subject:" . clean_string($subject) . "\n";
		$email_message .= "Message:" . clean_string($message) . "\n";

		//email headers
		$headers = 'From: ' .$email_From . '\r\n'. 'Reply-To' .
		$email. "\r\n" .
		'X-Mailer: PHP/' . phpversion();
		mail($email_to, $email_subject, $email_message, $headers); 
	}
?>
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
die();
?>
