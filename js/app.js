'use strict';

// Declares global variables
var operatingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var arrCookiesStands = []; // Array to hold each CookieStand object
var arrSalesColumnTotals = []; // Array to hold total of cookies sold per cookie-stand-table columns
var tableCookieStands = document.getElementById('cookie-stand-table');
var totalCookiesSold = 0;

// Declares the CookieStand Constuctor
function CookieStand(standLocation, minCustHourly, maxCustHourly, avgCookiesPerCust) {
  this.standLocation = standLocation;
  this.minCustHourly = minCustHourly;
  this.maxCustHourly = maxCustHourly;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.arrCustomersPerHour = [];
  this.arrHourlyCookieSales = [];
  this.dailyCookiesSold = 0;
  arrCookiesStands.push(this);
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
CookieStand.prototype.renderTableRow = function() {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = this.standLocation;
  trElement.appendChild(tdElement);

  for (var i = 0; i < this.arrHourlyCookieSales.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.arrHourlyCookieSales[i];
    trElement.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyCookiesSold;
  trElement.appendChild(tdElement);

  tableCookieStands.appendChild(trElement);
};

// Executes all object prototype functions for each instance of CookieStand
var populateCookieStands = function() {
  for (var i = 0; i < arrCookiesStands.length; i++) {
    // Logs when function starts for testing purposes
    console.log('Start of populateCookieStands for: ' + arrCookiesStands[i].standLocation);

    arrCookiesStands[i].generateCustomers();
    arrCookiesStands[i].calcCookiesPerHour();
    arrCookiesStands[i].calcCookiesPerDay();
    arrCookiesStands[i].renderTableRow();
  }
};

// Calculates the total cookies sold each hour, as well as the overall daily total
var calcTotalCookiesSold = function() {
  console.log('Start of calcTotalCookiesSold'); // Logs when function starts for testing purposes

  for (var i = 0; i < operatingHours.length; i++) {
    var tempTotalCookies = 0;

    for (var j = 0; j < arrCookiesStands.length; j++) {
      tempTotalCookies += arrCookiesStands[j].arrHourlyCookieSales[i];
    }

    arrSalesColumnTotals[i] = tempTotalCookies;
    totalCookiesSold += tempTotalCookies;

    // console.log test below
    console.log((totalCookiesSold - tempTotalCookies) + ' + ' + tempTotalCookies + ' = ' + totalCookiesSold);
  }
};

// Populates a header row for the cookie-stand-table table in sale.html with cookie stand operating hours
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

  thElement = document.createElement('th');
  thElement.textContent = 'Total';
  headerRow.appendChild(thElement);

  tableCookieStands.appendChild(headerRow);
};

// Populates a footer row for the cookie-stand-table table in sale.html with total hourly and overall cookies sold
var renderTableFooter = function() {
  calcTotalCookiesSold();
  var footerRow = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = 'Total: ';
  footerRow.appendChild(tdElement);

  for (var i = 0; i < operatingHours.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = arrSalesColumnTotals[i];
    footerRow.appendChild(tdElement);
  }

  tdElement = document.createElement('td');
  tdElement.textContent = totalCookiesSold;
  footerRow.appendChild(tdElement);

  tableCookieStands.appendChild(footerRow);
};

// Instantiates CookieStand objects
new CookieStand('1st and Pike', 23, 65, 6.3);
new CookieStand('SeaTac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);

// Executes functions to populate sales.html
renderTableHeader();
populateCookieStands();
renderTableFooter();