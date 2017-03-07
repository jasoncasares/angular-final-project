(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController',
    ['ProjectService', '$stateParams', '$scope', function(ProjectService, $stateParams, $scope) {
      var vm = this;

      vm.createProject = createProject;

      ProjectService.all()
        .then(data => $scope.projects = data)

      if ($stateParams.projectId) {
        ProjectService
          .getDetail($stateParams.projectId)
          .then(data => vm.project = data);
      }

      function createProject() {
        ProjectService
          .create(vm.project)
          .then(project => $scope.$parent.projects.push(project))
          .then(vm.project = {})
      }

    }]);
}());
