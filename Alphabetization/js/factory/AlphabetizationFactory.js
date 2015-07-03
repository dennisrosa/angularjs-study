'use strict';

app.factory('AlphabetizationFactory', function (FURL, $firebaseArray, $http) {

    var ref = new Firebase(FURL);

    var AlphabetizationFactory = {


        questions: function () {
            var quest = $firebaseArray(ref.child('questions'));
            console.log(quest);
            return quest;
        },

        details: function (question) {
            var details = $firebaseArray(ref.child('questions').child(question));
            console.log(details);
            return details;
        },

        pictures: function (question) {
            var pics = $firebaseArray(ref.child('pictures').child(question));
            console.log(pics);
            return pics;
        },

        picture: function (question, picture) {
            var pic = $firebaseArray(ref.child('pictures').child(question).child(picture));
            console.log(pic);
            return pic;
        }

    };

    return AlphabetizationFactory;
});