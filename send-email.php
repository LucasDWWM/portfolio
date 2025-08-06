<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Méthode non autorisée']);
    exit;
}

$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Validation de l'email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Email invalide']);
    exit;
}

// Protection basique XSS
$email = htmlentities($email, ENT_QUOTES, 'UTF-8');
$message = htmlentities($message, ENT_QUOTES, 'UTF-8');

$to = 'lucaslipari06@gmail.com';
$subject = 'Nouveau message depuis le portfolio';

$fullMessage = "Message :\n" . $message . "\n\nDe : $email";
$headers = "From: $email\r\n" .
           "Reply-To: $email\r\n" .
           "Content-Type: text/plain; charset=UTF-8";

if (mail($to, $subject, $fullMessage, $headers)) {
    echo json_encode(['message' => 'Message envoyé avec succès']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Erreur lors de l’envoi du message']);
}
?>
