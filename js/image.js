'use strict';

var imgChinookElement = document.getElementById('img-chinook-salmon');

var onChinookClick = function(event) {
  event.preventDefault();
  console.log('Chinook image clicked.');

  var oldImage = document.getElementById('featured-image');

  if (oldImage.getAttribute('src') !== 'img/chinook.jpg') {
    oldImage.src = 'img/chinook.jpg';
  }

};

imgChinookElement.addEventListener('click', onChinookClick);

var imgChinookElement = document.getElementById('img-chinook-salmon');

var onChinookClick = function(event) {
  event.preventDefault();
  console.log('Chinook image clicked.');

  var oldImage = document.getElementById('featured-image');

  if (oldImage.getAttribute('src') !== 'img/chinook.jpg') {
    oldImage.src = 'img/chinook.jpg';
  }

};

imgChinookElement.addEventListener('click', onChinookClick);