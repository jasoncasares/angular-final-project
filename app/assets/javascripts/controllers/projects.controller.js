(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController',
    ['ProjectService', '$state', '$stateParams', '$scope', function(ProjectService, $state, $stateParams, $scope) {
      var vm = this;

      vm.projects = [];

      $scope.$state = $state;

      ProjectService.all()
        .then((data) => {
          vm.projects = data;
        })

      if ($stateParams.projectId) {
        ProjectService
          .getDetail($stateParams.projectId)
          .then(data => {
            vm.project = data
            vm.project.date = new Date(data.date)
          });

      }

    }]);
}());
