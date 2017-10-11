angular.module('book-store')

// .controller ('listsCtrl', ($scope, $http) => {
//   // holds all lists user has
//
// })
.component('lists',{
  controller: function($scope, $http) {
    this.lists = [{
      name: 'Favorite Books',
      list: [{
        title: "حوجن",
        image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
        genre: "Romantic"
      },
      {
        title: "حوجن",
        image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
        genre: "Romantic"
      },
      {
        title: "حوجن",
        image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
        genre: "Romantic"
      },
      {
        title: "حوجن",
        image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
        genre: "Romantic"
      },
      {
        title: "حوجن",
        image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
        genre: "Romantic"
      },
      {
        title: "حوجن",
        image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
        genre: "Romantic"
      }]
  },
  {
    name: 'Favorite Books',
    list: [{
      title: "حوجن",
      image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
      genre: "Romantic"
    },
    {
      title: "حوجن",
      image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
      genre: "Romantic"
    },
    {
      title: "حوجن",
      image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
      genre: "Romantic"
    },
    {
      title: "حوجن",
      image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
      genre: "Romantic"
    },
    {
      title: "حوجن",
      image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
      genre: "Romantic"
    },
    {
      title: "حوجن",
      image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
      genre: "Romantic"
    }]
  },
  {
    name: 'Favorite Books',
    list: [{
      title: "حوجن",
      image: "https://images.gr-assets.com/books/1367615432l/17880881.jpg",
      genre: "Romantic"
    }]
  }];
  console.log(this.lists, '-------------');
    // get all user's lists
    this.getLists = () => {
      console.log('lists ------------');
      $http({
        method: 'GET',
        url: '/getLists'
       }).then(function successCallback(response) {
          // $scope.lists = response;
         }, function errorCallback(response) {
           console.log(response);
         });
    }
  },
  templateUrl: `../templates/lists.html`
})
