'use strict';

app.controller('QuestionsController', function ($scope, AlphabetizationFactory) {

    $scope.questions = {}
    $scope.question = {};

    $scope.load = function () {
        $scope.questions = AlphabetizationFactory.questions();
        $scope.question = {};
    }

    $scope.add = function () {

        if ($scope.insert) {
            AlphabetizationFactory.insertQuestion($scope.question);

        } else {
            AlphabetizationFactory.saveQuestion($scope.question);
        }

        $scope.reset();
        $scope.load();
    }

    $scope.new = function () {
        console.log("new");
        $scope.insert = true;
    }

    $scope.reset = function () {
        $scope.question = {};
        console.log("reset");
    }

    $scope.edit = function (id) {
        console.log("edit");
        var question = AlphabetizationFactory.getQuestion(id);
        console.log("retorno:" + question);
        $scope.insert = false;
        $scope.question = question;

    }

    $scope.suffle = function () {
        $scope.questions = shuffle($scope.questions);
    }
});