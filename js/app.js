'use strict';

var operatingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// Creates object to represent the 1st and Pike cookie stand
var storeFirstPike = {
  minCustHourly: 23,
  maxCustHourly: 65,
  avgCookiesPerCust: 6.3,
  hourlyCookiesSold: [],
  dailyCookiesSold: 0,
  generateCustomers: function() { // Generates a random number of customers
    return Math.random() * (this.maxCustHourly - this.minCustHourly) + this.minCustHourly;
  },
  cookiesSoldHourly: function() { // Calculates number of cookies sold each hour - rounded to whole number
    for (var i = 0; i < operatingHours.length; i++) {
      this.hourlyCookiesSold.push(Math.round(this.generateCustomers() * this.avgCookiesPerCust));
      console.log(operatingHours[i] + ': ' + this.hourlyCookiesSold[i]);
    }
  },
  totalCookiesSoldDaily: function() { // Calculates total number of cookies sold that day
    for (var i = 0; i < this.hourlyCookiesSold.length; i++) {
      this.dailyCookiesSold += this.hourlyCookiesSold[i];
      console.log((this.dailyCookiesSold - this.hourlyCookiesSold[i]) + ' + ' + this.hourlyCookiesSold[i] + ' = ' + this.dailyCookiesSold);
    }
  },
  renderFirstPike: function() { // Writes the number of cookies sold each hour to sales.html as <li> elements
    // Executes both methods to instantiate each property
    this.cookiesSoldHourly();
    this.totalCookiesSoldDaily();

    var ulElement = document.getElementById('first-pike');

    // Writes number of cookies sold each hour
    for (var i = 0; i < operatingHours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = operatingHours[i] + ': ' + this.hourlyCookiesSold[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    // Writes total number of cookies sold that day
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.dailyCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  }
};

// Creates object to represent the SeaTac Airport cookie stand
var storeSeaTacAirport = {
  minCustHourly: 3,
  maxCustHourly: 24,
  avgCookiesPerCust: 1.2,
  hourlyCookiesSold: [],
  dailyCookiesSold: 0,
  generateCustomers: function() { // Generates a random number of customers
    return Math.random() * (this.maxCustHourly - this.minCustHourly) + this.minCustHourly;
  },
  cookiesSoldHourly: function() { // Calculates number of cookies sold each hour - rounded to whole number
    for (var i = 0; i < operatingHours.length; i++) {
      this.hourlyCookiesSold.push(Math.round(this.generateCustomers() * this.avgCookiesPerCust));
      console.log(operatingHours[i] + ': ' + this.hourlyCookiesSold[i]);
    }
  },
  totalCookiesSoldDaily: function() { // Calculates total number of cookies sold that day
    for (var i = 0; i < this.hourlyCookiesSold.length; i++) {
      this.dailyCookiesSold += this.hourlyCookiesSold[i];
      console.log((this.dailyCookiesSold - this.hourlyCookiesSold[i]) + ' + ' + this.hourlyCookiesSold[i] + ' = ' + this.dailyCookiesSold);
    }
  },
  renderSeaTacAirport: function() { // Writes the number of cookies sold each hour to sales.html as <li> elements
    // Executes both methods to instantiate each property
    this.cookiesSoldHourly();
    this.totalCookiesSoldDaily();

    var ulElement = document.getElementById('seatac-airport');

    // Writes number of cookies sold each hour
    for (var i = 0; i < operatingHours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = operatingHours[i] + ': ' + this.hourlyCookiesSold[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    // Writes total number of cookies sold that day
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.dailyCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  }
};

storeFirstPike.renderFirstPike();
console.log('------------------- NEXT STORE -------------------');
storeSeaTacAirport.renderSeaTacAirport();