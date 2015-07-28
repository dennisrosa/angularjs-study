app.controller('ConfigController', function ($scope, $location, AlphabetizationFactory) {

    //$scope.config = AlphabetizationFactory.config();
    $scope.browse = true;
    $scope.selectedConfig = {};

    $scope.tipos = [{
        id: 0,
        tipo: 'Não se aplica'
    }, {
        id: 1,
        tipo: 'Lista'
    }, {
        id: 2,
        tipo: 'Json'
    }];


    $scope.configList = [
        {
            "name": "ABC",
            "description": "Ordene corretamente as letras do Alfabeto",
            "path": "/abc",
            "type": 0
    },
        {
            "name": "AnteriorPosterior",
            "description": "Indique o numero que vem antes e o numero que vem depois",
            "path": "/antesdepois",
            "type": 0
    }
];

    $scope.add = function () {
        $scope.selectedConfig = {};
        console.log("add");
        $scope.browse = false;

    }
    $scope.save = function () {
        alert($scope.selectedConfig);
        $scope.browse = true;
    }


});