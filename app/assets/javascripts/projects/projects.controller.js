(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController',
    ['ProjectService', '$stateParams', function(ProjectService, $stateParams) {
      var vm = this;

      ProjectService.all()
        .then(data => vm.projects = data)

      if ($stateParams.projectId) {
        ProjectService
          .getDetail($stateParams.projectId)
          .then(data => vm.project = data);
      }

    }]);
}());
