'use strict';

var storeFirstPike = {
  branch: '1st and Pike',
  minCustHourly: 23,
  maxCustHourly: 65,
  avgCookiesPerCust: 6.3,
  operatingHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  numCookiesSold: [],
  generateCustomers: function() {
    return Math.random() * (this.maxCustHourly - this.minCustHourly) + this.minCustHourly;
  },
  cookiesSoldHourly: function() {
    for (var i = 0; i < this.operatingHours.length; i++) {
      this.numCookiesSold.push(Math.round(this.generateCustomers() * this.avgCookiesPerCust));
      console.log(this.numCookiesSold[i]);
    }
  }
};

storeFirstPike.cookiesSoldHourly();