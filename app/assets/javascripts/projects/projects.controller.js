(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController', ['ProjectService', function(ProjectService) {
      var vm = this;

      ProjectService.all()
        .then(data => vm.projects = data)
        
    }]);
}());
