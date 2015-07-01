app.controller('AntesDepoisController', function ($scope) {

    $scope.numbers = [];
    $scope.values = [];
    $scope.posterior = [];
    $scope.invalids = [];

    var num;
    var x = 0
    while (x < 6) {
        num = generateRandom(30);
        if ($scope.numbers.indexOf(num) == -1) {
            $scope.numbers.push(num);
            x++;
        }
    }
    $scope.validate = function () {

        $scope.invalids = [];

        var index = "field_";
        var atual = 0;
        for (i = 0; i < 6; i++) {
            atual = $scope.numbers[i];
            if (atual - 1 != $scope.values[index + i]) {
                console.log("Numero Anterior invalido bloco " + (i + 1));
                $scope.invalids.push(i);
                return false;
            }
            if (atual + 1 != $scope.posterior[index + i]) {
                console.log("Numero Posterior invalido bloco " + (i + 1));
                $scope.invalids.push(i);
                return false;
            }

        }

    };

    $scope.isValid = function (index) {
        if ($scope.invalids.indexOf(index) >= 0) {
            return "divNumberErro";
        }
    };

});