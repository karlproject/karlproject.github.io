(function () {

  function FeaturesCtrl(resource) {
    this.features = resource.items;
  }

  function CollapseCtrl() {
    this.isCollapsed = true;
  }

  function GridCtrl(Restangular) {
    var _this = this;
    this.myData = [
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Jules", "lastName": "Verne"}
    ];
    this.gridOptions = {
      pagingPageSizes: [25, 50, 75],
      pagingPageSize: 25,
      columnDefs: [
        {name: 'firstName'},
        {name: 'lastName'}
      ]
    };

    Restangular.one('/api/rtypes').getList()
      .then(function (response) {
              console.log(response);
              _this.gridOptions.data = response;
            });
  }

  function FormCtrl($scope) {
    $scope.schema = {
      type: "object",
      properties: {
        name: {
          type: "string",
          minLength: 2,
          title: "Name",
          description: "Name or alias"
        },
        title: {
          type: "string",
          enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
        }
      }
    };

    $scope.form = [
      "*",
      {
        type: "submit",
        title: "Save"
      }
    ];

    $scope.model = {};
  }

  angular.module('k5')
    .controller('FeaturesCtrl', FeaturesCtrl)
    .controller('CollapseCtrl', CollapseCtrl)
    .controller('GridCtrl', GridCtrl)
    .controller('FormCtrl', FormCtrl);

})();
