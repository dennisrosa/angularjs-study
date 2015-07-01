app.controller('TicTacToeController', function ($scope) {


    $scope.reset = function () {
        $scope.index = 0;

        calculateWinningCombos();
        $scope.selected = [];
        var item;
        for (i = 0; i < 9; i++) {
            item = {
                id: i,
                value: 'img/TicTacToeBlank.png',
                disabled: false
            }
            $scope.selected.push(item);
        }

        $scope.winningCombos = calculateWinningCombos();
    }

    $scope.nextMove = function (index) {
        console.log("nextMove:" + index);
        if ($scope.selected[index].disabled) {
            return;
        }

        if ($scope.index % 2 == 0) {
            $scope.selected[index].value = 'img/TicTacToeO.png';
        } else {
            $scope.selected[index].value = 'img/TicTacToeX.png';
        }
        $scope.selected[index].disabled = true;
        $scope.index++;
    }

    $scope.validate = function () {
        console.log($scope.winningCombos);
        var obj;
        for (i = 0; i < $scope.winningCombos.length; i++) {
            obj = $scope.winningCombos[i];

            console.log("0" + $scope.selected[obj[0]].value);
            console.log("1" + $scope.selected[obj[2]].value);
            console.log("2" + $scope.selected[obj[2]].value);
            console.log("bol1:" + $scope.selected[obj[0]].value == $scope.selected[obj[1]].value);
            console.log("bol2:" + $scope.selected[obj[0]].value == $scope.selected[obj[2]].value);
            console.log("bol3:" + obj[0].value != 'img/TicTacToeBlank.png');
            console.log("bol4:" + $scope.selected[obj[0]].value == $scope.selected[obj[1]].value && $scope.selected[obj[0]].value == $scope.selected[obj[2]].value && obj[0].value != 'img/TicTacToeBlank.png');

            if ($scope.selected[obj[0]].value == $scope.selected[obj[1]].value && $scope.selected[obj[0]].value == $scope.selected[obj[2]].value && obj[0].value != 'img/TicTacToeBlank.png') {
                $scope.message = "Alguem ganhou";
                console.log("mensagem ganhou");
            }
        }

    }



});