'use strict';

var operatingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

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
  totalCookiesSoldDaily: function() { // Calculates number of cookies sold daily
    for (var i = 0; i < this.hourlyCookiesSold.length; i++) {
      this.dailyCookiesSold += this.hourlyCookiesSold[i];
      console.log((this.dailyCookiesSold - this.hourlyCookiesSold[i]) + ' + ' + this.hourlyCookiesSold[i] + ' = ' + this.dailyCookiesSold);
    }
  },
  renderFirstPike: function() { // Writes the number of cookies sold each hour to sales.html as <li> elements
    // Executes both methods to instantiate the keys with data
    this.cookiesSoldHourly();
    this.totalCookiesSoldDaily();

    var ulElement = document.getElementById('first-pike');

    // Writes number of cookies sold each hour
    for (var i = 0; i < operatingHours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = operatingHours[i] + ': ' + this.hourlyCookiesSold[i];
      ulElement.appendChild(liElement);
    }

    // Writes total number of cookies sold that day
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.dailyCookiesSold;
    ulElement.appendChild(liElement);
  }
};

storeFirstPike.renderFirstPike();