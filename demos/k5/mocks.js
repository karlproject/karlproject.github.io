(function () {
  function ModuleConfig(moondashMockRestProvider) {

    var communities = [
      {
        id: 1, name: 'Default Community', activityDate: '2010/11/19',
        items: 4723, status: 'none'
      },
      {
        id: 2, name: 'Another Community', activityDate: '2011/1/9',
        items: 23, status: 'none'
      },
      {
        id: 3,
        name: 'Testing 123 With A Long Title That Goes On',
        activityDate: '2010/11/19',
        items: 7,
        status: 'none'
      },
      {
        id: 4, name: 'Africa...it is big', activityDate: '2011/4/16',
        items: 9999, status: 'none'
      },
      {
        id: 5, name: 'Merica', activityDate: '2009/10/07',
        items: 548, status: 'none'
      }
    ];

    moondashMockRestProvider.addMocks(
      'box',
      [
        {
          pattern: /api\/to_archive$/,
          responseData: communities
        }
      ]);

  }

  angular.module('k5')
    .config(ModuleConfig);

})();
