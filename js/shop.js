'use strict';

var formEl = document.getElementById('sales');
var formProduct = document.querySelector('.product');

formProduct.addEventListener('change', function(event) {
  event.preventDefault();
  // console.log(`${event.target.value}`);
  //cookieCutter, salmonCookies, painting, shirt
  if (event.target.value === 'cookieCutter') {
    console.log('Cookie Cutter');
  }
  if (event.target.value === 'salmonCookies') {
    console.log('Salmon Cookies');
  }
  if (event.target.value === 'painting') {
    console.log('Painting');
  }
  if (event.target.value === 'shirt') {
    console.log('Shirt');
  }
});

formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  var clientsName = event.target.clientsName.value;
  var clientsAddress = event.target.clientsAddress.value;
  var clientsPhoneNumber = event.target.clientsPhoneNumber.value;
  var shipping = document.forms[0];
  var shippingOption = '';
  console.log(shipping.length);
  var shippingCount = 0;
  for (var i = 0; i < shipping.length; i++) {
    if (shipping[i].checked) {
      shippingCount++;
      shippingOption = shippingOption + shipping[i].value;
      console.log(`Checked value is ${shippingOption}`);
    }
    console.log(`The shipping count is ${shippingCount}`);
  }
  if (shippingCount > 1) {
    alert('Error:  You have two or more options checked for shipping.  Please only choose one.');
    return;
  }
  var productValue = event.target.product.value;
  console.log(`Name is ${clientsName}, address is ${clientsAddress}, phone# is ${clientsPhoneNumber}, shipping option is ${shippingOption}, product value is ${productValue}`);
});
