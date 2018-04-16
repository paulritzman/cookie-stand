'use strict';

// mass image change
var imgChinookElement = document.getElementById('img-chinook-salmon');
var imgCutterElement = document.getElementById('img-cutter');
var imgFrostedCookieElement = document.getElementById('img-frosted-cookie');
var imgFishElement = document.getElementById('img-fish');
var imgFamilyElement = document.getElementById('img-family');

var handleImageChange = function(event) {
  event.preventDefault();
  console.log('An image from the nav bar was clicked.');

  var clickedItem = event.target;
  var oldImage = document.getElementById('featured-image');

  if (oldImage.getAttribute('src') !== clickedItem.getAttribute('src')) {
    oldImage.src = clickedItem.src;
    oldImage.alt = clickedItem.alt;
  }
};

imgChinookElement.addEventListener('click', handleImageChange);
imgCutterElement.addEventListener('click', handleImageChange);
imgFrostedCookieElement.addEventListener('click', handleImageChange);
imgFishElement.addEventListener('click', handleImageChange);
imgFamilyElement.addEventListener('click', handleImageChange);