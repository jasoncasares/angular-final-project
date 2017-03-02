(function () {
  'use strict';

  angular
    .module('todoApp')
    .factory('ProjectService', ['$http', function($http) {

      return {
        all,
        getDetail,
      }

      function all() {
        return $http.get('/projects')
          .then(response => response.data)
          .catch(err => console.log(err));
      }

      function getDetail(projectId) {
        return $http.get('/projects/${projectId}')
          .then(response => response.data)
          .catch(err => console.log(err));
      }
    }]);
}());
