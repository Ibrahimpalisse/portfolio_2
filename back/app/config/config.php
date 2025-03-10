<?php
/**
 * Configuration générale du site
 */

// Mode de développement (true) ou production (false)
define('DEV_MODE', true);

// Configuration de la base de données
define('DB_HOST', 'localhost');
define('DB_USER', 'root');     // À modifier pour la production
define('DB_PASS', '');         // À modifier pour la production
define('DB_NAME', 'portfolio_db');
define('DB_CHARSET', 'utf8mb4');

// Configuration des chemins
define('ROOT_PATH', dirname(dirname(dirname(__FILE__))));
define('APP_PATH', ROOT_PATH . '/app');
define('CONTROLLERS_PATH', APP_PATH . '/controllers');
define('MODELS_PATH', APP_PATH . '/models');
define('VIEWS_PATH', APP_PATH . '/views');
define('UTILS_PATH', APP_PATH . '/utils');
define('PUBLIC_PATH', ROOT_PATH . '/public');
define('UPLOADS_PATH', PUBLIC_PATH . '/uploads');

// URL de base pour l'application
$base_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'];
$base_url .= str_replace(basename($_SERVER['SCRIPT_NAME']), "", $_SERVER['SCRIPT_NAME']);
define('BASE_URL', $base_url);

// Configuration PHPMailer
define('MAIL_HOST', 'smtp.gmail.com');  // Serveur SMTP
define('MAIL_PORT', 587);               // Port SMTP
define('MAIL_USERNAME', 'votre@email.com');  // Votre email SMTP
define('MAIL_PASSWORD', 'votre_mot_de_passe'); // Votre mot de passe SMTP
define('MAIL_FROM', 'contact@vignesibrahim.com');  // Email expéditeur
define('MAIL_FROM_NAME', 'Vignes Ibrahim');        // Nom expéditeur
define('MAIL_REPLY_TO', 'contact@vignesibrahim.com'); // Reply to email

// Configuration admin
define('ADMIN_USERNAME', 'admin'); // À changer pour la production
define('ADMIN_PASSWORD_HASH', password_hash('admin123', PASSWORD_DEFAULT)); // À changer pour la production

// Configuration des erreurs
if (DEV_MODE) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

// Fuseau horaire
date_default_timezone_set('Europe/Paris');

// Configuration des sessions
ini_set('session.cookie_httponly', 1);
session_start(); 