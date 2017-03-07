(function () {
  'use strict';

  angular
    .module('todoApp')
    .factory('ProjectService', ['$http', function($http) {

      return {
        all,
        getDetail,
        create,
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

      function create(projectInfo) {
        const req = {
          method: "POST",
          url: '/projects',
          headers : {
            'Content-Type': 'application/json'
          },
          data: { project: projectinfo }
        }
        return $http(req)
          .then(response => response.data)
          .catch(err => console.log(err));
      }
    }]);
}());
