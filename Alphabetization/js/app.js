var app = angular.module('Allphabetization', ['ngRoute', 'firebase', 'ui.grid']);

app.constant('FURL', 'https://alphabetization.firebaseio.com');

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/abc', {
            templateUrl: 'parts/abc.html',
            controller: 'ABCController'
        }).
        when('/antesdepois', {
            templateUrl: 'parts/antesdepois.html',
            controller: 'AntesDepoisController'
        }).
        when('/sequence', {
            templateUrl: 'parts/sequence.html',
            controller: 'MarkSequence'
        }).
        when('/number', {
            templateUrl: 'parts/number.html',
            controller: 'NumberSequence'
        }).
        when('/dice', {
            templateUrl: 'parts/dice.html',
            controller: 'DiceController'
        }).
        when('/word', {
            templateUrl: 'parts/word.html',
            controller: 'WordController'
        }).
        when('/velha', {
            templateUrl: 'parts/velha.html',
            controller: 'TicTacToeController'
        }).
        when('/questions', {
            templateUrl: 'parts/questions.html',
            controller: 'QuestionsController'
        }).
        when('/config', {
            templateUrl: 'parts/config.html',
            controller: 'ConfigController'
        }).
        

        otherwise({
            redirectTo: '/abc'
        });
  }]);

function shuffle(array) {
    var temp = [];
    var len = array.length;
    while (len) {
        temp.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
        len--;
    }
    return temp;
}

function generateRandom(max) {
    return Math.trunc(Math.random() * max) + 1;
}


function calculateWinningCombos() {
    var grid = grid || 3;
    console.log(grid);

    this.grid = grid;
    var combos = [];
    for (var i = 0, c = [], d = []; i < this.grid; i++) {
        for (var j = 0, a = [], b = []; j < this.grid; j++) {
            a.push(i * this.grid + j);
            b.push(j * this.grid + i);
        }
        combos.push(a, b);
        c.push(i * this.grid + i);
        d.push((this.grid - i - 1) * this.grid + i);
    }
    combos.push(c, d);
    console.log(combos);
    return combos;
}