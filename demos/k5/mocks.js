(function () {
  function ModuleConfig(moondashMockRestProvider) {

    function getParams(url) {
      // This will be replaced with url.js later
      var params = {};
      var queryString = url.split("?")[1];
      if (queryString) {
        var parts = queryString.split('&');
        if (!parts) {
          // Only one argument
          parts = [queryString];
        }
        parts.forEach(function (part) {
          var p = part.split('=');
          params[p[0]] = p[1];
        });
      }
      return params;
    }

    var communities = [
      {
        id: 1, name: 'Default Community', activityDate: '2010/11/19',
        items: 4723, status: 'none'
      },
      {
        id: 2, name: 'Another Community', activityDate: '2011/01/09',
        items: 23, status: 'none'
      },
      {
        id: 3,
        name: 'Testing 123 With A Long Title That Goes On',
        activityDate: '2010/03/04',
        items: 7,
        status: 'none'
      },
      {
        id: 4, name: 'Africa...it is big', activityDate: '2014/04/16',
        items: 9999, status: 'none'
      },
      {
        id: 5, name: 'Merica', activityDate: '2014/10/07',
        items: 548, status: 'none'
      }
    ];

    moondashMockRestProvider.addMocks(
      'box',
      [
        {
          method: 'GET',
          pattern: /api\/to_archive.*$/,
          responder: function (method, url, data, headers) {
            var params = getParams(url);
            if (params.inactive == 'true') {
              var filtered = _(communities).filter(
                function (item) {
                  return !item.activityDate.startsWith('2014');
                }
              ).value();
              return [200, filtered];
            }
            ;

            return [200, communities];
          }
        }
      ]);

  }

  angular.module('k5')
    .config(ModuleConfig);

})();
