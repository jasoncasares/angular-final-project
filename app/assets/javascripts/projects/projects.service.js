(function () {
  'use strict';

  angular
    .module('todoApp')
    .factory('ProjectService', ['$http', function($http) {

      return {
        all
      }

      function all() {
        return $http.get('/projects')
          .then(response => response.data)
          .catch(err => console.log(err))
      }
    }]);
}());
