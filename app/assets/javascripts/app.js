(function () {
  'use strict';

  angular
    .module('todoApp', ['ui.router', 'templates']);
    .config (["$httpProvider", ($httpProvider) => {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
    }]);
}());
