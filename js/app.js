'use strict';

var operatingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// Creates object to represent the 1st and Pike cookie stand
var storeFirstPike = {
  minCustHourly: 23,
  maxCustHourly: 65,
  avgCookiesPerCust: 6.3,
  arrHourlyCookieSales: [],
  dailyCookiesSold: 0,
  generateCustomers: function() { // Generates a random number of customers
    return Math.random() * (this.maxCustHourly - this.minCustHourly) + this.minCustHourly;
  },
  calcCookiesPerHour: function() { // Calculates number of cookies sold each hour - rounded to whole number
    for (var i = 0; i < operatingHours.length; i++) {
      this.arrHourlyCookieSales.push(Math.round(this.generateCustomers() * this.avgCookiesPerCust));
      console.log('FirstPike - ' + operatingHours[i] + ': ' + this.arrHourlyCookieSales[i]);
    }
  },
  calcCookiesPerDay: function() { // Calculates total number of cookies sold that day
    for (var i = 0; i < this.arrHourlyCookieSales.length; i++) {
      this.dailyCookiesSold += this.arrHourlyCookieSales[i];
      console.log('FirstPike - ' + (this.dailyCookiesSold - this.arrHourlyCookieSales[i]) + ' + ' + this.arrHourlyCookieSales[i] + ' = ' + this.dailyCookiesSold);
    }
  },
  renderFirstPike: function() { // Writes the number of cookies sold each hour to sales.html as <li> elements
    // Executes both methods to instantiate each property
    this.calcCookiesPerHour();
    this.calcCookiesPerDay();

    var ulElement = document.getElementById('first-pike');

    // Writes number of cookies sold each hour
    for (var i = 0; i < operatingHours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = operatingHours[i] + ': ' + this.arrHourlyCookieSales[i] + ' cookies';
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
  arrHourlyCookieSales: [],
  dailyCookiesSold: 0,
  generateCustomers: function() { // Generates a random number of customers
    return Math.random() * (this.maxCustHourly - this.minCustHourly) + this.minCustHourly;
  },
  calcCookiesPerHour: function() { // Calculates number of cookies sold each hour - rounded to whole number
    for (var i = 0; i < operatingHours.length; i++) {
      this.arrHourlyCookieSales.push(Math.round(this.generateCustomers() * this.avgCookiesPerCust));
      console.log('SeaTac - ' + operatingHours[i] + ': ' + this.arrHourlyCookieSales[i]);
    }
  },
  calcCookiesPerDay: function() { // Calculates total number of cookies sold that day
    for (var i = 0; i < this.arrHourlyCookieSales.length; i++) {
      this.dailyCookiesSold += this.arrHourlyCookieSales[i];
      console.log('SeaTac - ' + (this.dailyCookiesSold - this.arrHourlyCookieSales[i]) + ' + ' + this.arrHourlyCookieSales[i] + ' = ' + this.dailyCookiesSold);
    }
  },
  renderSeaTacAirport: function() { // Writes the number of cookies sold each hour to sales.html as <li> elements
    // Executes both methods to instantiate each property
    this.calcCookiesPerHour();
    this.calcCookiesPerDay();

    var ulElement = document.getElementById('seatac-airport');

    // Writes number of cookies sold each hour
    for (var i = 0; i < operatingHours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = operatingHours[i] + ': ' + this.arrHourlyCookieSales[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    // Writes total number of cookies sold that day
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.dailyCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  }
};

// Creates object to represent the Seattle Center cookie stand
var storeSeattleCenter = {
  minCustHourly: 11,
  maxCustHourly: 38,
  avgCookiesPerCust: 3.7,
  arrHourlyCookieSales: [],
  dailyCookiesSold: 0,
  generateCustomers: function() { // Generates a random number of customers
    return Math.random() * (this.maxCustHourly - this.minCustHourly) + this.minCustHourly;
  },
  calcCookiesPerHour: function() { // Calculates number of cookies sold each hour - rounded to whole number
    for (var i = 0; i < operatingHours.length; i++) {
      this.arrHourlyCookieSales.push(Math.round(this.generateCustomers() * this.avgCookiesPerCust));
      console.log('SeattleCenter - ' + operatingHours[i] + ': ' + this.arrHourlyCookieSales[i]);
    }
  },
  calcCookiesPerDay: function() { // Calculates total number of cookies sold that day
    for (var i = 0; i < this.arrHourlyCookieSales.length; i++) {
      this.dailyCookiesSold += this.arrHourlyCookieSales[i];
      console.log('SeattleCenter - ' + (this.dailyCookiesSold - this.arrHourlyCookieSales[i]) + ' + ' + this.arrHourlyCookieSales[i] + ' = ' + this.dailyCookiesSold);
    }
  },
  renderSeattleCenter: function() { // Writes the number of cookies sold each hour to sales.html as <li> elements
    // Executes both methods to instantiate each property
    this.calcCookiesPerHour();
    this.calcCookiesPerDay();

    var ulElement = document.getElementById('seattle-center');

    // Writes number of cookies sold each hour
    for (var i = 0; i < operatingHours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = operatingHours[i] + ': ' + this.arrHourlyCookieSales[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    // Writes total number of cookies sold that day
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.dailyCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  }
};

// Creates object to represent the Capitol Hill cookie stand
var storeCapitolHill = {
  minCustHourly: 20,
  maxCustHourly: 38,
  avgCookiesPerCust: 2.3,
  arrHourlyCookieSales: [],
  dailyCookiesSold: 0,
  generateCustomers: function() { // Generates a random number of customers
    return Math.random() * (this.maxCustHourly - this.minCustHourly) + this.minCustHourly;
  },
  calcCookiesPerHour: function() { // Calculates number of cookies sold each hour - rounded to whole number
    for (var i = 0; i < operatingHours.length; i++) {
      this.arrHourlyCookieSales.push(Math.round(this.generateCustomers() * this.avgCookiesPerCust));
      console.log('CapitolHill - ' + operatingHours[i] + ': ' + this.arrHourlyCookieSales[i]);
    }
  },
  calcCookiesPerDay: function() { // Calculates total number of cookies sold that day
    for (var i = 0; i < this.arrHourlyCookieSales.length; i++) {
      this.dailyCookiesSold += this.arrHourlyCookieSales[i];
      console.log('CapitolHill - ' + (this.dailyCookiesSold - this.arrHourlyCookieSales[i]) + ' + ' + this.arrHourlyCookieSales[i] + ' = ' + this.dailyCookiesSold);
    }
  },
  renderCapitolHill: function() { // Writes the number of cookies sold each hour to sales.html as <li> elements
    // Executes both methods to instantiate each property
    storeCapitolHill.calcCookiesPerHour();
    storeCapitolHill.calcCookiesPerDay();

    var ulElement = document.getElementById('capitol-hill');

    // Writes number of cookies sold each hour
    for (var i = 0; i < operatingHours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = operatingHours[i] + ': ' + this.arrHourlyCookieSales[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    // Writes total number of cookies sold that day
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.dailyCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  }
};

// Creates object to represent the Alki cookie stand
var storeAlki = {
  minCustHourly: 2,
  maxCustHourly: 16,
  avgCookiesPerCust: 4.6,
  arrHourlyCookieSales: [],
  dailyCookiesSold: 0,
  generateCustomers: function() { // Generates a random number of customers
    return Math.random() * (this.maxCustHourly - this.minCustHourly) + this.minCustHourly;
  },
  calcCookiesPerHour: function() { // Calculates number of cookies sold each hour - rounded to whole number
    for (var i = 0; i < operatingHours.length; i++) {
      this.arrHourlyCookieSales.push(Math.round(this.generateCustomers() * this.avgCookiesPerCust));
      console.log('Alki - ' + operatingHours[i] + ': ' + this.arrHourlyCookieSales[i]);
    }
  },
  calcCookiesPerDay: function() { // Calculates total number of cookies sold that day
    for (var i = 0; i < this.arrHourlyCookieSales.length; i++) {
      this.dailyCookiesSold += this.arrHourlyCookieSales[i];
      console.log('Alki - ' + (this.dailyCookiesSold - this.arrHourlyCookieSales[i]) + ' + ' + this.arrHourlyCookieSales[i] + ' = ' + this.dailyCookiesSold);
    }
  },
  renderAlki: function() { // Writes the number of cookies sold each hour to sales.html as <li> elements
    // Executes both methods to instantiate each property
    this.calcCookiesPerHour();
    this.calcCookiesPerDay();

    var ulElement = document.getElementById('alki');

    // Writes number of cookies sold each hour
    for (var i = 0; i < operatingHours.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = operatingHours[i] + ': ' + this.arrHourlyCookieSales[i] + ' cookies';
      ulElement.appendChild(liElement);
    }

    // Writes total number of cookies sold that day
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.dailyCookiesSold + ' cookies';
    ulElement.appendChild(liElement);
  }
};

// Calls each objects render method to write the data to the document
storeFirstPike.renderFirstPike();
storeSeaTacAirport.renderSeaTacAirport();
storeSeattleCenter.renderSeattleCenter();
storeCapitolHill.renderCapitolHill();
storeAlki.renderAlki();