angular.module('app.controllers').controller('homeController', [
    'messageService', function (messageService) {

        var self = this;
        initialize();

        function initialize() {
            getMessages();
            self.cancelEditing = cancelEditing;
            self.deleteMessage = deleteMessage;
            self.editMessage = editMessage;
            self.saveEditing = saveEditing;
            self.sendMessage = sendMessage;
        }

        function deleteMessage(index) {
            messageService.deleteMessage(index);
        }

        function editMessage(message) {
            message.isBeingEdited = true;
            message.tempText = message.text;
        }


        function cancelEditing(message) {
            message.isBeingEdited = false;
            message.tempText = "";
        }

        function saveEditing(message) {
            message.isBeingEdited = false;
            messageService.updateMessageById(message.id, message.tempText);
            message.tempText = "";
        }

        function getMessages() {
            messageService.getMessages().then(function (messages) {
                self.messages = messages;
            });
        }
        function sendMessage() {
            if(!self.newMessage || !self.newMessage.text || !self.newMessage.username) {
                alert("Vous devez entrer un nom d'utilisateur et un message.");
            } else {
                messageService.postMessage(self.newMessage.text, self.newMessage.username);
                self.newMessage = {};
            }
        }
    }
]);