(function () {

  function BoxListCtrl(resource, Restangular) {
    var _this = this;
    this.inactiveCommunities = resource;

    // Handle filters
    this.isInactive = true;
    this.filterText = null;
    this.runFilters = function () {
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


    var baseInactives = Restangular.all('to_archive');


    var prefix = '/api/to_archive';
    this.start = function (targetId) {
      $http.post(prefix + '/start', data)
        .success(function (response) {
                   console.log('good');
                 })
        .error(function (response) {
                 console.log('bad');
               });
    }
  }

  angular.module('k5')
    .controller('BoxListCtrl', BoxListCtrl);
})();
