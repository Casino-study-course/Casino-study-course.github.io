<?php
define('DOCUMENT_ROOT', substr(__FILE__, 0, -10));
define('MSSE_INC_DIR', DOCUMENT_ROOT.'/system/include');
define('MSSE_LIB_DIR', MSSE_INC_DIR.'/lib');
require_once(MSSE_INC_DIR.'/sys_config.php');
MSConfig::RequireFile('traits', 'datacontainer', 'filesystemstorage', 'l10n');
require_once(DOCUMENT_ROOT.'/lib/Settings.php');
new L10N(Settings::staticGet('language') ?: 'ru', 'ru', ['root' => DOCUMENT_ROOT, 'dir' => '/languages']);
@set_time_limit(180);
@session_start();
if(!empty($_GET['__dolly_action'])) require_once(MSSE_INC_DIR.'/actions.php');
?>