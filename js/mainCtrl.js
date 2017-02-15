angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)

  $scope.getMessages = function(){
    messageService.getMessages().then(function(messages){
      console.log(messages);
      $scope.messages = messages;
    }, function(error){
      console.error(error);
    });
  };


  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.

  $scope.postMessage = function(){
    messageService.postMessage($scope.message).catch(function(error){
      console.log(error);
    });


    // .then(function(){
    //   //$scope.messages.push($scope.message);
    // });
  };

  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
   setInterval(function(){
    $scope.getMessages();

  }, 1500);

});
