'use strict';

var operatingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var arrCookiesStands = [];

var tableCookieStands = document.getElementById('cookie-stand-table');

function CookieStand(standLocation, minCustHourly, maxCustHourly, avgCookiesPerCust) {
  this.standLocation = standLocation;
  this.minCustHourly = minCustHourly;
  this.maxCustHourly = maxCustHourly;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.arrCustomersPerHour = [];
  this.arrHourlyCookieSales = [];
  this.dailyCookiesSold = 0;
  arrCookiesStands.push(this.standLocation);
}

// Generates a random number of customers - fills arrCustomersPerHour array
CookieStand.prototype.generateCustomers = function() {
  for (var i = 0; i < operatingHours.length; i++) {
    this.arrCustomersPerHour.push(Math.round(Math.random() * (this.maxCustHourly - this.minCustHourly) + this.minCustHourly));
  }
};

// Calculates number of cookies sold each hour - fills arrHourlyCookiesSold array
CookieStand.prototype.calcCookiesPerHour = function() {
  for (var i = 0; i < this.arrCustomersPerHour.length; i++) {
    this.arrHourlyCookieSales.push(Math.round(this.arrCustomersPerHour[i] * this.avgCookiesPerCust));
    // console.log test below
    console.log(this.arrCustomersPerHour[i] + ' customers bought ' + this.arrHourlyCookieSales[i] + ' cookies this hour');
  }
};

// Calculates total number of cookies sold per day
CookieStand.prototype.calcCookiesPerDay = function() {
  for (var i = 0; i < this.arrCustomersPerHour.length; i++) {
    this.dailyCookiesSold += this.arrHourlyCookieSales[i];
    // console.log test below
    console.log((this.dailyCookiesSold - this.arrHourlyCookieSales[i]) + ' + ' + this.arrHourlyCookieSales[i] + ' = ' + this.dailyCookiesSold);
  }
};

// Populates a row for the cookie-stand-table table in sales.html with the stand location and hourly sales figures
CookieStand.prototype.renderHourlySales = function() {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = this.standLocation;

  trElement.appendChild(tdElement);

  for (var i = 0; i < this.arrHourlyCookieSales.length; i++) {
    tdElement = document.createElement('td');

    tdElement.textContent = this.arrHourlyCookieSales[i];

    trElement.appendChild(tdElement);
  }

  tableCookieStands.appendChild(trElement);
};

// Populates a header row for the cookie-stand-table table in sale.html with cookie stand the operating hours
var renderTableHeader = function() {
  var headerRow = document.createElement('tr');
  var thElement = document.createElement('th');

  thElement.textContent = '';

  headerRow.appendChild(thElement);

  for (var i = 0; i < operatingHours.length; i++) {
    thElement = document.createElement('th');

    thElement.textContent = operatingHours[i];

    headerRow.appendChild(thElement);
  }

  tableCookieStands.appendChild(headerRow);
};

renderTableHeader();
var testStand = new CookieStand('First & Pike', 10, 20, 10);
testStand.generateCustomers();
testStand.calcCookiesPerHour();
testStand.calcCookiesPerDay();
testStand.renderHourlySales();