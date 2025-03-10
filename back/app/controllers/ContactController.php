<?php
namespace Portfolio\Backend\Controllers;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class ContactController {
    private $mailer;

    public function __construct() {
        $this->mailer = new PHPMailer(true);
        
        // Configuration du serveur SMTP
        $this->mailer->isSMTP();
        $this->mailer->Host = 'smtp.gmail.com'; // À modifier selon votre serveur SMTP
        $this->mailer->SMTPAuth = true;
        $this->mailer->Username = 'votre@gmail.com'; // À remplacer par votre email
        $this->mailer->Password = 'votre_mot_de_passe_app'; // À remplacer par votre mot de passe d'application
        $this->mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $this->mailer->Port = 587;
        $this->mailer->CharSet = 'UTF-8';
    }

    public function sendEmail($data) {
        try {
            // Validation des données
            if (empty($data['name']) || empty($data['email']) || empty($data['subject']) || empty($data['message'])) {
                return ['success' => false, 'message' => 'Tous les champs sont requis'];
            }

            if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                return ['success' => false, 'message' => 'Email invalide'];
            }

            // Configuration de l'email
            $this->mailer->setFrom($data['email'], $data['name']);
            $this->mailer->addAddress('votre@gmail.com'); // À remplacer par votre email
            $this->mailer->addReplyTo($data['email'], $data['name']);

            $this->mailer->isHTML(true);
            $this->mailer->Subject = "Contact Portfolio: " . $data['subject'];
            
            // Corps du message en HTML
            $messageBody = "
                <h2>Nouveau message de contact</h2>
                <p><strong>Nom:</strong> {$data['name']}</p>
                <p><strong>Email:</strong> {$data['email']}</p>
                <p><strong>Sujet:</strong> {$data['subject']}</p>
                <p><strong>Message:</strong></p>
                <p>" . nl2br(htmlspecialchars($data['message'])) . "</p>
            ";

            $this->mailer->Body = $messageBody;
            $this->mailer->AltBody = strip_tags(str_replace('<br>', "\n", $messageBody));

            $this->mailer->send();
            return ['success' => true, 'message' => 'Message envoyé avec succès'];

        } catch (Exception $e) {
            return ['success' => false, 'message' => "Le message n'a pas pu être envoyé. Erreur: {$this->mailer->ErrorInfo}"];
        }
    }
}


