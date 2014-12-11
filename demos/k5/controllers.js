(function () {

  function BoxListCtrl(resource) {
    this.inactive_communities = resource;
  }

  angular.module('k5')
    .controller('BoxListCtrl', BoxListCtrl);
})();
