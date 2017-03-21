(function () {
  'use strict';

  angular
    .module('todoApp')
    .controller('ProjectsController',
    ['ProjectService', '$state', '$stateParams', '$scope', function(ProjectService, $state, $stateParams, $scope) {
      var vm = this;

      vm.isDue = isDue;

      function isDue(itemDateString) {
        var now = new Date();
        var itemDate = new Date(itemDateString);
        if(now > itemDate) {
          return 'past due';
        }
      }

    }]);
}());
