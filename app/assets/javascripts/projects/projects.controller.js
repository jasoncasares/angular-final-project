(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController',
    ['ProjectService', '$stateParams', '$scope', function(ProjectService, $stateParams, $scope) {
      var vm = this;

      vm.createProject = createProject;
      vm.deleteProject = deleteProject;

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

      function deleteProject() {
        ProjectService
          .destroy(vm.project.id)
          .then(() => {
            var currentProjects =
            $scope.$parent.projects.filter(project => project.id
            !== vm.project.id)
            $scope.$parent.projects = currentProjects
            $state.go('projects')
          })
      }

    }]);
}());
