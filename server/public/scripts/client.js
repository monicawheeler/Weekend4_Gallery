console.log('client.js sourced');

var app = angular.module('galleryApp', []);

app.controller('GalleryController', ['$http', function($http){
    console.log('GalleryController loaded');
    const self = this;

    self.galleryImages = [
        {
            imagePath: 'images/grandma.jpg',
            description: 'My mom holding her first grandchild'
        },
        {
            imagePath: 'images/grayson.jpg',
            description: 'My son, the funniest, cutest thing'
        },
        {
            imagePath: 'images/grandpa.jpg',
            description: 'My dad holding his first grandchild'
        },
        {
            imagePath: 'images/gwenyth.jpg',
            description: 'My beautiful step-daughter, Gwenyth'
        },
        {
            imagePath: 'images/mylove.jpg',
            description: 'My husband and love of my life'
        },
        {
            imagePath: 'images/prescott.jpg',
            description: 'My inquistive step-son, Prescott'
        }
    ];
}]);