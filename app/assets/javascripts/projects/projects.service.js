(function () {
  'use strict';

  angular
    .module('todoApp')
    .factory('ProjectService', ['$http', function($http) {

      return {
        all,
        getDetail,
        create,
        destroy,
        update,
      }

      function all() {
        return $http.get('/projects')
          .then(response => response.data)
          .catch(err => console.log(err));
      }

      function getDetail(projectId) {
        return $http.get(`/projects/${projectId}`)
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
          data: { project: projectInfo }
        }
        return $http(req)
          .then(response => response.data)
          .catch(err => console.log(err));
      }

      function destroy(projectId) {
        const req = {
          method: "DELETE",
          url: `/projects/${projectId}`,
        }
        return $http(req)
          .then(response => console.log(response.data.message))
          .catch(err => console.log(err));
      }

      function update(projectId,projectDataNew) {
        const req = {
          method: "PATCH",
          url: `/projects/${projectId}`,
          data: { project: projectDataNew }
        }
        return $http(req)
          .then(response => {
            console.log(response.data);
            return response.data;
          })
          .catch(err => console.log(err));
      }

    }]);
}());
