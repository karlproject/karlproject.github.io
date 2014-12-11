(function () {

  function BoxListCtrl(resource, $http, Restangular) {
    this.inactive_communities = resource;
    var prefix = '/api/to_archive';

    var baseInactives = Restangular.all('to_archive');

    baseInactives.getList()
      .then(function (response) {
                  console.debug('r323', response);
                })

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
