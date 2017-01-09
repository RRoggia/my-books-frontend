'use strict';

// Register `myBooksList` component, along with its associated controller and template
angular.
  module('myBooksList').
  component('myBooksList', {
    templateUrl: 'my-books-list/my-books-list.template.html',
    controller: function MyBooksListController($http) {
      var self = this;

      $http.get('books/myBooks.json').then(function(response) {
        self.myBooks = response.data;
      });
    }
  });
