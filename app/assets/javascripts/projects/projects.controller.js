(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController',
    ['ProjectService', '$state', '$stateParams', '$scope', function(ProjectService, $state, $stateParams, $scope) {
      var vm = this;

      vm.createProject = createProject;
      vm.deleteProject = deleteProject;
      vm.editProject = editProject;

      $scope.$state = $state;

      ProjectService.all()
        .then(data => $scope.projects = data)

      if ($stateParams.projectId) {
        ProjectService
          .getDetail($stateParams.projectId)
          .then(data => {
            vm.project = data
            vm.project.date = new Date(data.date)
          });

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

      function editProject() {
        $stateParams;
        ProjectService
          .update(vm.project.id, vm.project)
          .then(project => {
            $scope.$parent.projects.forEach(
              function (p, index) {
                if (p.id == project.id){
                  $scope.$parent.projects[index] = project
                }
              }
            )
            $state.go('projects')
          })
      }

    }]);
}());
