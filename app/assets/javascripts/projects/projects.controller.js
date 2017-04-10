(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController',
    ['ProjectService', '$state', '$rootScope', '$stateParams', '$scope', function(ProjectService, $state, $rootScope, $stateParams, $scope) {
      var vm = this;

      vm.createProject = createProject;
      vm.deleteProject = deleteProject;
      vm.editProject = editProject;
      vm.isDue = isDue;
      vm.projects = [];

      $scope.$state = $state;

      // $scope.counter = 0;

      function getAllProjects () {
        ProjectService.all()
          .then((data) => {
            vm.projects = data;
            for (let i = 0, l = vm.projects.length; i < l; i++) {
              vm.projects[i].counter = 0
            }
          });
      }

      getAllProjects();

      if ($stateParams.projectId) {
        ProjectService
          .getDetail($stateParams.projectId)
          .then(data => {
            vm.project = data
            vm.project.date = new Date(data.date)
          });

      }

      function isDue(itemDateString) {
        var now = new Date();
        var itemDate = new Date(itemDateString);
        if(now > itemDate) {
          return 'past due';
        }
      }

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

      function deleteProject(id) {
        let cntrl = $scope.$parent;
        ProjectService
          .destroy(vm.project.id)
          .then((res) => {
            for(let i = 0; i < cntrl.vm.projects.length; i++) {
              const project = cntrl.vm.projects[i];
              if(project.id === id) {
                cntrl.vm.projects.splice(i, 1);
              }
            }
            $state.go('projects')

          })
      }

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
