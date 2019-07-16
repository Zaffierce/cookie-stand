'use strict';

function getRandomCookie(index) {
  var min = index.minCustomer;
  var max = index.maxCustomer;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getCookiesorSomething(index) {
  var totalCookies = []; //Stores the total cookies into an array
  var ulEl = document.getElementById(index.elementID);
  for (var i = 0; i < times.length + 1; i++) {
    var avgCookieMathFloor = Math.floor(Math.round(index.avgCookiesPS));
    var salesAvgHour = getRandomCookie(index);
    var bakeCookies = Math.floor(Math.round(salesAvgHour * avgCookieMathFloor));
    // console.log(`i = ${i} - times.length - ${times.length}-- ${times[i]} avgCookie = ${avgCookieMathFloor} , salesAvgHour = ${salesAvgHour}, cookies baked ${bakeCookies}`);
    totalCookies.push(bakeCookies);
    var liEl = document.createElement('li');
    liEl.textContent = `${times[i]}: ${bakeCookies} cookies`;
    ulEl.appendChild(liEl);
  }
  totalCookies.pop(); //Cheaty process to drop my ghost array.  But it works so, haters gunna hate
  var sumTotCookies = 0;
  for (var j = 0; j < totalCookies.length; j++){ //Loop to add our empty totalCookies array
    sumTotCookies = totalCookies[j] + sumTotCookies;
    console.log(`Sum of totcookies ${sumTotCookies}`);
  }
  liEl.textContent = `Total: ${sumTotCookies} cookies`;
  ulEl.appendChild(liEl);
}

var times = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

var shop1 = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesPS: 6.3,
  elementID: 'shop1',
  render: function() {
    getRandomCookie(this);
    getCookiesorSomething(this);
  }
};


var shop2 = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiesPS: 1.2,
  elementID: 'shop2',
  render: function() {
    getRandomCookie(this);
    getCookiesorSomething(this);
  }
};

var shop3 = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPS: 3.7,
  elementID: 'shop3',
  render: function() {
    getRandomCookie(this);
    getCookiesorSomething(this);
  }
};

var shop4 = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookiesPS: 2.3,
  elementID: 'shop4',
  render: function() {
    getRandomCookie(this);
    getCookiesorSomething(this);
  }
};

var shop5 = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookiesPS: 4.6,
  elementID: 'shop5',
  render: function() {
    getRandomCookie(this);
    getCookiesorSomething(this);
  }
};

var loadShops = [shop1, shop2, shop3, shop4, shop5];
for (var i = 0; i < loadShops.length; i++){
  loadShops[i].render();
}
