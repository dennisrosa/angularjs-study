app.controller('NumberSequence', function ($scope) {
    $scope.x = 5;
    $scope.y = 10;
    $scope.selected = [];

    $scope.list = [];
    for (i = 1; i <= 50; i++) {
        $scope.list[i - 1] = i;
    }

    $scope.list = shuffle($scope.list);

    $scope.getItem = function (index) {
        var obj = $scope.list[(index - 1)];
        //console.log('get item ' + index + ' val:' + obj);
        if (obj < 10) {
            return ' ' + obj;
        } else {
            return obj;
        }

    };

    $scope.isMarked = function (x, y) {
        var obj = ((x - 1) * 10) + y;
        var val = $scope.list[obj - 1];
        var index = $scope.selected.indexOf(val);

        if (index >= 0) {
            return "btn btn-info";
        } else {
            return "btn btn-detault";
        }
    };

    $scope.check = function (x, y) {
        var obj = ((x - 1) * 10) + y;
        var val = $scope.list[obj - 1];

        if (val == 1 + $scope.selected.length) {
            $scope.selected.push(val);
        } else {
            $scope.selected = [];
        }

    };
});
