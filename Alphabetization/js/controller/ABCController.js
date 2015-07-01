app.controller('ABCController', function ($scope) {
    var leters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var temp = []

    for (i = 0; i < leters.length; i++) {
        temp.push(leters[i]);
    }

    $scope.array = shuffle(temp);
    $scope.selected = [];

    $scope.isMarked = function (index) {

        var val = $scope.array[index];
        var index = $scope.selected.indexOf(val);

        if (index >= 0) {
            return "btn btn-info";
        } else {
            return "btn btn-detault";
        }
    };

    $scope.check = function (index) {

        var val = $scope.array[index];
        $scope.selected.push(val);

        for (i = 0; i < $scope.selected.length; i++) {
            if (leters[i] != $scope.selected[i]) {
                $scope.selected = [];
            }
        }

    };
});