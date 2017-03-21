(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController',
    ['ProjectService', '$state', '$stateParams', '$scope', function(ProjectService, $state, $stateParams, $scope) {
      var vm = this;

      vm.createProject = createProject;

      function createProject() {
        let cntrl = $scope.$parent;
        ProjectService
          .create(vm.project)
          .then(project => {
            cntrl.vm.projects.push(project)
          })
          .then(vm.project = {})
          $state.go('projects')
      }

    }]);
}());
