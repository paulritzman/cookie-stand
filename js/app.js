'use strict';

var storeFirstPike = {
  branch: '1st and Pike',
  minCustHourly: 23,
  maxCustHourly: 65,
  avgCookiesPerCust: 6.3,
  operatingHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyCookiesSold: [],
  dailyCookiesSold: 0,
  generateCustomers: function() {
    return Math.random() * (this.maxCustHourly - this.minCustHourly) + this.minCustHourly;
  },
  cookiesSoldHourly: function() {
    for (var i = 0; i < this.operatingHours.length; i++) {
      this.hourlyCookiesSold.push(Math.round(this.generateCustomers() * this.avgCookiesPerCust));
      console.log(this.operatingHours[i] + ': ' + this.hourlyCookiesSold[i]);
    }
  },
  totalCookiesSoldDaily: function() {
    for (var i = 0; i < this.hourlyCookiesSold.length; i++) {
      this.dailyCookiesSold += this.hourlyCookiesSold[i];
      console.log((this.dailyCookiesSold - this.hourlyCookiesSold[i]) + ' + ' + this.hourlyCookiesSold[i] + ' = ' + this.dailyCookiesSold);
    }
    return this.dailyCookiesSold;
  }
};

storeFirstPike.cookiesSoldHourly();
storeFirstPike.totalCookiesSoldDaily();