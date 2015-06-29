angular.module('app.services').service('messageService', ['$q', '$http', function ($q, $http) {

    var self = this;
    var lastId = 10; // Simulation LastID FROM API

    self.messages = [];
    self.deleteMessage = deleteMessage;
    self.getMessageById = getTextFromMessageId;
    self.getMessages = getMessages;
    self.updateMessageById = updateMessageById;
    self.postMessage = postMessage;

    function getMessages() {
        return $q(function (resolve, reject) {
            $http.get("messages.json").success(function (messages) {
                self.messages = messages;
                resolve(self.messages);
            }).error(function (error) {
                reject(error);
            });
        });
    }

    function getTextFromMessageId(messageId) {
        var message = _.find(self.messages, {'id': parseInt(messageId)});
        return message.text;
    }

    function updateMessageById(messageId, updatedText) {
        var message = _.find(self.messages, {'id': parseInt(messageId)});
        message.text= updatedText;
        message.edited = true;
    }

    function deleteMessage(messageId) {
        _.remove(self.messages, {'id': parseInt(messageId)});
    }

    function postMessage(text, username) {
        self.messages.push({
            id: lastId,
            user: username,
            text: text,
            date: new Date(),
            edited: false
        });
        lastId += 1;
    }
}]);