(function () {

  function BoxListCtrl(resource) {
    this.inactive_communities = resource;
    console.debug(resource);
  }

  angular.module('k5')
    .controller('BoxListCtrl', BoxListCtrl);
})();
