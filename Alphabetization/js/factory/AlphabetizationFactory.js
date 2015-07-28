'use strict';

app.factory('AlphabetizationFactory', function (FURL, $firebaseArray, $http) {

    var ref = new Firebase(FURL);
    var words = $firebaseArray(ref.child('words'));

    var AlphabetizationFactory = {


        // Word List
        wordList: function () {
            return words;
        },

        insertWord: function (word) {
            words.$add(word);
        },

        saveWord: function (word) {
            words.$save(word);
        },

        getWord: function (id) {
            return words.$getRecord(id);
        }

    };

    return AlphabetizationFactory;
});