# LSSNotifity-Alarm
Dieses Userscript, ist für das Leitstellenspiel.de entwickelt. 

Es zeigt die Chatnachrichten, die Status und Einsätze als Notification im Browser an.

Somit ist ein mitlesen auch ohne aktiven Tab im LSS möglich.


Dieses Script, darf nicht auf anderen Seiten neu hochgeladen werden - Es darf jediglich verlinkt werden, zu diesem Link.


V1.0:
Chat-Nachrichten, Status 5 Nachrichten sowie alle anderen Status-Nachrichten werden per Desktop-Benachrichtigung angezeigt.
So ist ein mitlesen des Chats sowie des Funkverkehrs ohne aktivem Tab möglich.
Alle Funktionen sind über Buttons über dem Chat abschaltbar.

V1.1:
Beim Klick auf die Statusnachrichten wird der Tab vom Leitstellenspiel aktiviert und das Fahrzeug mit der Statusänderung geöffnet.
Beim Klick auf die Chatnachrichten wird der Tab vom Leitstellenspiel aktiviert.

V1.2: 
Einstellungen sind nach oben gewandert. Jetzt kann man auch die Timeout zeit einstellen.

// ======= EINSTELLUNGEN ======= //
var allianceChatNotifcation = true; // true = Chat-Notification sind standardmäßig aktiviert (Standard: true).
var allianceS5Notifcation = true; // true = Status 5-Notification sind standardmäßig aktiviert (Standard: true).
var allianceStatusNotifcation = false; // true = Alle anderen Status-Notification sind standardmäßig aktiviert (Standard: false).
var timeout_Chat = 3; //Zeit in Sekunden wie lange Chat-Notifications angezeigt werden sollen (Standard: 3).
var timeout_Status = 3; //Zeit in Sekunden wie lange Status-Notifications angezeigt werden sollen (Standard: 3).
