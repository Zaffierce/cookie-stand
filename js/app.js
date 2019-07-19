'use strict';

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

var tablebody = document.getElementById('table');
var allShops = [];

function Shops(shopName, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer) {
  this.shopName = shopName;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPerDay = 0;
  this.projectedCustomersPerHour = [];
  this.projectedCookiesPerHour = [];
  this.cookiesPerHourTotal = 0;

  allShops.push(this);
}


Shops.prototype.projectedCustomers = function() {
  for (var i = 0; i < hours.length; i++) {
    var projectedCustomers = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
    this.projectedCustomersPerHour.push(projectedCustomers);
  }
};

Shops.prototype.projectedCookies = function() {
  for (var i = 0; i < hours.length; i++) {
    var projectedCookies = generateCookiesPerHour(this.averageCookiesPerCustomer, this.projectedCustomersPerHour[i]);
    this.projectedCookiesPerHour.push(projectedCookies);

    this.totalCookiesPerDay += projectedCookies;
  }
};

Shops.prototype.render = function() {
  this.projectedCustomers();
  this.projectedCookies();
  // this.sumProjectedCookies();

  var thEl = document.createElement('th');
  var trEl = document.createElement('tr');
  thEl.textContent = this.shopName;
  tablebody.appendChild(trEl);
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.projectedCookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdEl);
};

// Shops.prototype.sumProjectedCookies = function() {
//   for (var i = 0; i < hours.length; i++) {
//     var sumCookies = sum(this.projectedCookiesPerHour);
//     this.totalCookiesPerDay = sumCookies;
//   }
//   // this.projectedCookiesPerHour.push(this.sumCookies);
//   this.projectedCookiesPerHour.push(sumCookies);
// };


function generateCookiesPerHour(customersPerHour, randomNumber) {
  return Math.ceil(customersPerHour * randomNumber);
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//James neat code to add elements!
// function addElement(childElType, childContent, parentElement) {
//   var childElement = document.createElement(childElType);
//   childElement.textContent = childContent;
//   parentElement.appendChild(childElement);
// }

// function sum(arr) {
//   var total = 0;
//   for (var i = 0; i < arr.length; i++) {
//     total = arr[i] + total;
//   }
//   return total;
// }

new Shops('First & Pike', 23, 65, 6.3);
new Shops('SeaTac', 3, 24, 1.2);
new Shops('Seattle Center', 11, 38, 3.7);
new Shops('Cap Hill', 20, 38, 2.3);
new Shops('Alki', 2, 16, 4.6);


//Creates the header
function renderShopHeader() {
  var trEl = document.createElement('tr');
  tablebody.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations'; //Places blank space
  trEl.appendChild(thEl); //before calling hours

  for (var i = 0; i < hours.length + 1; i++) { //Adds +1 to account for blank space
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl.textContent = 'Totals'; //Places 'Totals' after
  trEl.appendChild(thEl); //after calling hours
}

//Renders the meat & potatoes of the content


function renderShopFooter() {
  var trEl = document.createElement('tr');
  trEl.textContent = 'Footer';
  tablebody.appendChild(trEl);
  var totalOfTotals = 0;
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHourTotal = 0;
    for (var j = 0; j < allShops.length; j++) { //Loops our cookies per hour
      cookiesPerHourTotal += allShops[j].projectedCookiesPerHour[i];
      totalOfTotals += allShops[j].projectedCookiesPerHour[i];
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = cookiesPerHourTotal;
    trEl.appendChild(tdEl);
  }
  // var sumTotalCookiesPerHour = 0;
  // for (i = 0; i < allShops.length; i++) {
  //   sumTotalCookiesPerHour += allShops[i].totalCookiesPerDay;
  // }
  tdEl = document.createElement('td');
  // tdEl.textContent = sumTotalCookiesPerHour;
  tdEl.textContent = totalOfTotals;
  trEl.appendChild(tdEl);
}


var formEl = document.getElementById('myForm');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  var shopName = event.target.shopName.value;
  var minCustomersEachHour = parseInt(event.target.minCustomersEachHour.value);
  var maxCustomersEachHour = parseInt(event.target.maxCustomersEachHour.value);
  var averageCookiesPerCustomer = parseInt(event.target.averageCookiesPerCustomer.value);

  new Shops(shopName, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer);

  tablebody.innerHTML = '';

  renderShopHeader();
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }

  renderShopFooter();

});

renderShopHeader();
for (var i = 0; i < allShops.length; i++) {
  allShops[i].render();
}
renderShopFooter();
