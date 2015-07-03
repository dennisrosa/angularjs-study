app.controller('QuestionsController', function ($scope, AlphabetizationFactory) {

    $scope.questions = AlphabetizationFactory.questions();
    $scope.question = {};


    $scope.add = function () {
        console.log("add");

    }


    $scope.reset = function () {
        $scope.question = {};
        console.log("reset");
    }

});