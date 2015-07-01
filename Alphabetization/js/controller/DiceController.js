app.controller('DiceController', function ($scope) {

    var diceArray = ['img/200px-Dice-1.svg.png',
                        'img/200px-Dice-2.svg.png',
                        'img/200px-Dice-3.svg.png',
                        'img/200px-Dice-4.svg.png',
                        'img/200px-Dice-5.svg.png',
                        'img/200px-Dice-6.svg.png'
                       ];
    var num = generateRandom(6);
    $scope.dice1 = {
        numero: num,
        image: diceArray[num - 1]
    };

    num = generateRandom(6);
    $scope.dice2 = {
        numero: num,
        image: diceArray[num - 1]
    };

});