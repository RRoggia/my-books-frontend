'use strict';

// Register `myBooksList` component, along with its associated controller and template
angular.
  module('myBooksList').
  component('myBooksList', {
    templateUrl: 'my-books-list/my-books-list.template.html',
    controller: function MyBooksListController($http) {
      var self = this;

      $http.get('http://localhost:3000/myBooks/books').then(function(response) {
        self.myBooks = response.data;
      });
    }
  });
