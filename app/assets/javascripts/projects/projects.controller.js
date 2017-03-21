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
      vm.isDue = isDue;
      vm.projects = [];

      $scope.$state = $state;

      ProjectService.all()
        .then((data) => {
          vm.projects = data;
        //  $scope.completedProjects = [];
          //$scope.incompleteProjects = [];

          //data.forEach((project) => {
            //if(project.completed) {
          //    $scope.completedProjects.push(project);
          //  } else {
          //    $scope.incompleteProjects.push(project)
          //  }
          //})


        })

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
