'use strict';

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
// var cookiesPerHour = [];

var tablebody = document.getElementById('table');
var allShops = [];

function Shops(shopName, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer) {
  var projectedCustomersPerHour = [];
  var projectedCookiesPerHour = [];
  var totalCookiesPerDay = 0;
  this.shopName = shopName;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.projectedCustomersPerHour = projectedCustomersPerHour;
  this.projectedCookiesPerHour = projectedCookiesPerHour;
  this.totalCookiesPerDay = totalCookiesPerDay;

  for (var i = 0; i < hours.length; i++) { //Generates projected customers per hour
    var projectedCustomers = randomNumber(minCustomersEachHour, maxCustomersEachHour);
    projectedCustomersPerHour.push(projectedCustomers);
  }

  for (var i = 0; i < hours.length; i++) { //Generates projected cookies per hour based off of customers per hour
    var projectedCookies = generateCookiesPerHour(averageCookiesPerCustomer, projectedCustomersPerHour[i]);
    projectedCookiesPerHour.push(projectedCookies);
  }

  for (var i = 0; i < hours.length; i++) { //Sums the cookies per hour into a total for the day
    var sumProjectedCookies = sum(projectedCookiesPerHour);
    this.totalCookiesPerDay = sumProjectedCookies;
  }
  projectedCookiesPerHour.push(sumProjectedCookies);

  allShops.push(this);
}


function generateCookiesPerHour(customersPerHour, randomNumber) {
  return Math.ceil(customersPerHour * randomNumber);
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function sum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total = arr[i] + total;
  }
  return total;
}


function renderShopName() {
  var trEl = document.createElement('tr');
  tablebody.appendChild(trEl);
  var thEl = document.createElement('th');

  hours.unshift(''); //Puts a blank space at the beginning of my hours
  hours.push('Total'); //Adds Total at the end of my hours

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

}


function renderShopBody() {
  var trEl = document.createElement('tr'); //sends new tr
  var tdEl = document.createElement('td');
  tablebody.appendChild(trEl);

  for (var i = 0; i < allShops.length; i++) {
    trEl = document.createElement('tr');
    trEl.textContent = allShops[i].shopName;
    tablebody.appendChild(trEl);

    for (var j = 0; j < allShops[i].projectedCookiesPerHour.length; j++) {
      tdEl = document.createElement('td');
      tdEl.textContent = allShops[i].projectedCookiesPerHour[j];
      trEl.appendChild(tdEl);
    }
  }
}

function renderFooter() {
  
}


new Shops('First & Pike', 23, 65, 6.3);
new Shops('SeaTac', 3, 24, 1.2);
new Shops('Seattle Center', 11, 38, 3.7);
new Shops('Cap Hill', 20, 38, 2.3);
new Shops('Alki', 2, 16, 4.6);

renderShopName();
renderShopBody();
