(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController',
    ['ProjectService', '$state', '$stateParams', '$scope', function(ProjectService, $state, $stateParams, $scope) {
      var vm = this;

      vm.deleteProject = deleteProject;

      function deleteProject() {
        let cntrl = $scope.$parent;
        ProjectService
          .destroy(vm.project.id)
          .then(() => {
            var currentProjects =
            cntrl.vm.projects.filter(project => project.id
            !== vm.project.id)

            $state.go('projects')
          })
      }

    }]);
}());
