<?php
use EasyDonate\Sdk;
require_once '../vendor/autoload.php';


$sdk = new EasyDonate\Sdk('58ff6941d21bd48535deaa837ef83ec5');
$payment = $sdk->payment()
               ->setCustomer('DontFollow')
               ->setServerId(1435)
               ->setProducts([14256 => 1])
               ->create(true);
