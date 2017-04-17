// ==UserScript==
// @name         Notification_Alarm
// @version      1.0
// @description  Zeigt eine Browser-Notification wenn eine Chat-Nachricht, einen Status 5, einen neuen Einsatz oder ein allgemeiner Status eingeht.  
// @author       DLRG-Dominik
// @include      *://www.leitstellenspiel.de/
// @exclude      *://www.leitstellenspiel.de/mission*
// @updateURL    https://dl.dropboxusercontent.com/u/49293607/Meine_scripte/Scriptdatenbank/SL/Leitstellenspiel/Chat.user.js
// @grant        none
// ==/UserScript==
function notifyMe(username,message) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification('Leitstellenspiel.de - Chat - Nachricht von '+username, {
                body: message
            });
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}

(function(){
   
    
    var $mainDiv = $('<div id="chatNote" class="panel panel-default"><div class="panel-heading">Chat</div></div>');
    $mainDiv.css({
        'position': 'fixed',
        'width': '250px',
        'z-index': '99999',
        'margin-left': '-255px',
        'top': '20%',
        'left': '100%',
        'display':'none',
        'cursor':'pointer'
    });
    $mainDiv.click(function(){
        $(this).hide('slow');
    });
    var $contentDiv = $('<div class="panel-body" style="background-color: white;"></div>');
    var $ul = $('<ul id="chatNoteUl"></ul>');
    $ul.css({
        'list-style': 'none',
        'margin-left': '0',
        'padding-left':' 20px'
    });
    $ul.appendTo($contentDiv);
    $contentDiv.appendTo($mainDiv);
    $mainDiv.appendTo($('body'));
    var allianceChatNotifcation = true;
    $('<a href="#" class="btn btn-success btn-xs pull-right" title="Chatnotification aus/ein schalten">Chatnotification</a>').appendTo($('#chat_outer .panel-heading'))
            .click(function(e){
                allianceChatNotifcation = !allianceChatNotifcation;
                $(this).hasClass("btn-success") ? $(this).removeClass("btn-success").addClass("btn-danger"): $(this).addClass("btn-success").removeClass("btn-danger");
                return false;
    });
    var allianceChatBuffer = allianceChat;
    var MainDivTimer;
    function hideMainDiv(){
        clearTimeout(MainDivTimer);
        MainDivTimer = setTimeout(function(){
            $mainDiv.hide('slow');
        },6000); 
    }
    allianceChat = function(t){
        allianceChatBuffer(t);
        if(user_id !== t.user_id && allianceChatNotifcation){
            notifyMe(t.username,t.message);
            console.log("Notification-ALARM");
            var e = "<li><span class='mission_chat_message_username'>[" + t.date + "] <a href='/profile/" + t.user_id + "' class='lightbox-open'>" + t.username + ":</a></span>";
            t.mission_id && (e = e + "<a href='/missions/" + t.mission_id + "' class='lightbox-open'><span class='glyphicon glyphicon-bell'></span></a> ");
            e = e + " " + t.message + "</li>";
            
            $(e).appendTo($ul).delay(6000).hide('slow',function(){$(this).remove();});
            $mainDiv.show('slow');
            
            hideMainDiv();
        }
    };
})();
