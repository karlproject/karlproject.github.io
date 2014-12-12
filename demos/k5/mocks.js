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
        id: '1', name: 'Default Community', activityDate: '2010/11/19',
        items: 4723, status: 'none'
      },
      {
        id: '2', name: 'Another Community', activityDate: '2011/01/09',
        items: 23, status: 'none'
      },
      {
        id: '3',
        name: 'Testing 123 With A Long Title That Goes On',
        activityDate: '2010/03/04',
        items: 7,
        status: 'none'
      },
      {
        id: '4', name: 'Africa...it is big', activityDate: '2014/04/16',
        items: 9999, status: 'none'
      },
      {
        id: '5', name: 'Merica', activityDate: '2014/10/07',
        items: 548, status: 'none'
      }
    ];

    moondashMockRestProvider.addMocks(
      'box',
      [
        {
          method: 'POST',
          pattern: /api\/to_archive\/(\d+)\/setStatus/,
          responder: function (method, url, data) {
            // Given /api/to_archive/someDocId/setStatus
            // - Grab that community
            // - Change its status to the passed in 'status' value
            // - return ok
            var id = url.split("/")[3],
              target = _(communities).first({id: id}),
              newStatus = 'stopped';
            data = angular.fromJson(data);
            if (data.status == 'start') {
              newStatus = 'started';
            }
            target.status = newStatus;
            return [200, {status: newStatus}];
          }
        },
        {
          method: 'GET',
          pattern: /api\/to_archive\/(\d+)\/logEntries/,
          responder: function () {
            console.debug('respond')
            var response = [
              {timestamp: '2014/12/01 09:30:01', msg: 'Some message'},
              {timestamp: '2014/12/01 09:30:01', msg: '2Some message'},
              {timestamp: '2014/12/01 09:30:01', msg: '3Some message'},
              {timestamp: '2014/12/01 09:30:01', msg: '4Some message'}
            ];
            return [200, response];
          }
        },
        {
          method: 'GET',
          pattern: /api\/to_archive.*$/,
          responder: function (method, url) {
            /*
             Process two filters:
             - inactive == 'true' or otherwise
             - filterText, lowercase comparison
             */
            var params = getParams(url);
            var filtered = _(communities).clone();

            if (params.inactive == 'true') {
              filtered = _(communities).filter(
                function (item) {
                  return !item.activityDate.startsWith('2014');
                }
              ).value();
            }

            if (params.filterText) {
              var ft = params.filterText.toLowerCase();
              filtered = _(filtered).filter(
                function (item) {
                  var orig = item.name.toLowerCase();
                  return orig.indexOf(ft) > -1;
                }
              ).value();
            }

            return [200, filtered];
          }
        }
      ]);

  }

  angular.module('k5')
    .config(ModuleConfig);

})();
