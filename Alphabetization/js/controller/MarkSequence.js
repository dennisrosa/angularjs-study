app.controller('MarkSequence', function ($scope) {
    $scope.x = 3;
    $scope.y = 3;
    $scope.selected = [];

    $scope.check = function (x, y) {
        var obj = x + "-" + y;
        if (obj === "7-7") {
            $scope.selected = [];
        }
        var index = $scope.selected.indexOf(obj);
        if (index == -1) {
            $scope.selected.push(obj);
        } else {
            $scope.selected.splice(index, 1);
        }

    };


    $scope.isMarked = function (x, y) {

        var obj = x + "-" + y;
        var index = $scope.selected.indexOf(obj);
        if (index >= 0) {
            return "btn btn-info";
        } else {
            return "btn btn-detault";
        }
    };

});