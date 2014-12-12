(function () {

  function BoxListCtrl(resource, Restangular, $modal, $scope) {
    var _this = this;
    this.inactiveCommunities = resource;
    var baseInactives = Restangular.all('to_archive');

    // Handle filters
    this.isInactive = true;
    this.filterText = null;
    this.reload = function () {
      // User clicked the "Over 18 months" checkbox or the search box
      baseInactives.getList(
        {
          inactive: this.isInactive,
          filterText: this.filterText
        }
      )
        .then(function (response) {
                _this.inactiveCommunities = response;
              });
    };

    this.setStatus = function (target, status) {
      target.customPOST({status: status}, 'setStatus')
        .then(
        function (success) {
          // Update with the returned status
          target.status = success.status;
        },
        function (failure) {
          console.debug('failed');
        }
      )
    };


    $scope.items = ['item1', 'item2', 'item3'];
    this.showLog = function (target) {
      // Provide a modal

      console.debug('starting');

      var modalInstance = $modal.open(
        {
          templateUrl: 'myModalContent.html',
          controller: 'ModalCtrl',
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });
    }

  }

  function ModalCtrl($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }

  angular.module('k5')
    .controller('ModalCtrl', ModalCtrl)
    .controller('BoxListCtrl', BoxListCtrl);
})();
