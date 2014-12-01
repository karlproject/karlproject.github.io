angular.module('hello', ['moondash'])
  .controller(
  'HelloCtrl',
  function () {
    this.title = 'Hello Dashboard';
  });