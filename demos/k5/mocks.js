(function () {
  function ModuleConfig(moondashMockRestProvider) {

    // TODO move this around later
    var features = {
      resource: {
        id: 99, title: 'Features'
      },
      items: [
        'Split into better file structure (module.js, states.js, etc.)',
        'This feature list is done with a mock API calls'
      ]
    };

    moondashMockRestProvider.addMocks(
      'features',
      [
        {
          pattern: /api\/features$/,
          responseData: features
        },
        {
          pattern: /api\/security\/backend/,
          authenticate: true,
          responseData: []
        }
      ]);

    var resourceTypes = [
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Bob", "lastName": "Barker"},
      {"firstName": "Cox", "lastName": "Carney"},
      {"firstName": "Derek", "lastName": "Dominoes"},
      {"firstName": "Gil", "lastName": "Gerard"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Harry", "lastName": "Carrey"},
      {"firstName": "Jules", "lastName": "Verne"}

    ];

    moondashMockRestProvider.addMocks(
      'grid',
      [
        {
          pattern: /api\/rtypes$/,
          responseData: resourceTypes
        }
      ]);


  }

  angular.module('k5')
    .config(ModuleConfig);

})();
