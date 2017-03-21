(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController',
    ['ProjectService', '$state', '$stateParams', '$scope', function(ProjectService, $state, $stateParams, $scope) {
      var vm = this;

      vm.editProject = editProject;

      $scope.$state = $state;

      function editProject() {
        $stateParams;
        let cntrl = $scope.$parent;
        ProjectService
          .update(vm.project.id, vm.project)
          .then(project => {
            cntrl.vm.projects.forEach(
              function (p, index) {
                if (p.id == project.id){
                  cntrl.vm.projects[index] = project
                }
              }
            )
            $state.go('projects')
          })
      }

    }]);
}());
