<?php

require_once 'vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// create a log channel
$log = new Logger('love');
$log->pushHandler(new StreamHandler('var/logs/love.log', Logger::INFO));

// add records to the log
$log->addInfo('It BEGINS.');
$log->addNotice('What is love?');
$log->addWarning('Baby don\'t hurt me, don\'t hurt me, no more');
$log->addEmergency('NO! Song is WAY OVER USED!');


echo 'There, are ya happy now?!';