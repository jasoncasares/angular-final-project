(function () {
  'use strict';

  angular
    .module('todoApp')
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

      $urlRouterProvider.otherwise("/");

      $stateProvider
       .state('projects', {
         url: "/",
         templateUrl: 'projects/projects.list.html',
         controller: 'ProjectsController as vm'
       })
       .state('projects.new', {
         url: 'projects/new',
         templateUrl: 'projects/projects.new.html',
         controller: 'ProjectsController as vm'
       })
       .state('projects.edit', {
         url: 'projects/:projectId/edit',
         templateUrl: 'projects/projects.edit.html',
         controller: 'ProjectsController as vm'
       })
        .state('projects.detail', {
          url: 'projects/:projectId',
          templateUrl: 'projects/projects.detail.html',
          controller: 'ProjectsController as vm'
       })
       .state('projects.search', {
         url: 'projects/search',
         templateUrl: 'projects/projects.search.html',
         controller: 'ProjectsController as vm'
      })

    }]);
}());
