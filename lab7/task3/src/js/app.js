import listingTemplate from '../handlebars/select.handlebars';

window.onload = function () {
  'use strict';

  let listingElements = {
    items: [
      'apple',
      'orange'
    ]
  };

  let storeElements = {
    items: []
  };

  let storeSelect = document.querySelector('.js-store-select'),
      listingSelect = document.querySelector('.js-listing-select');

  let elementPosition, selectedOption, itemName;

  function addToStoreElements(element) {
    elementPosition = listingElements.items.indexOf(element);
    if (elementPosition > -1) {
      storeElements.items.push(element);
      listingElements.items.splice(elementPosition, 1);
    }
  }

  function deleteListingElement(element) {
    elementPosition = listingElements.items.indexOf(element);
    if (elementPosition > -1) {
      listingElements.items.splice(elementPosition, 1);
    }
  }

  function deleteStoreElement(element) {
    elementPosition = storeElements.items.indexOf(element);
    if (elementPosition > -1) {
      storeElements.items.splice(elementPosition, 1);
    }
  }

  function addListingElement(element) {
    elementPosition = listingElements.items.indexOf(element);
    if (elementPosition > -1) return;
    listingElements.items.push(element);
  }

  function updateUI() {
    storeSelect.innerHTML = listingTemplate(storeElements);
    listingSelect.innerHTML = listingTemplate(listingElements);
  }

  updateUI();

  let addListingItemButton = document.querySelector('.js-add-listing-item');

  addListingItemButton.addEventListener('click', function() {
    itemName = window.prompt('Enter the listing item name', '');
    if(!itemName.length) return;
    addListingElement(itemName);
    updateUI();
  });

  let deleteListingItemButton = document.querySelector('.js-delete-listing-item');

  deleteListingItemButton.addEventListener('click', function() {
    selectedOption = document.querySelector('.js-listing-select option:checked');
    if(selectedOption === null) return;
    deleteListingElement(selectedOption.innerText);
    updateUI();
  });

  let deleteStoreItemButton = document.querySelector('.js-delete-store-item');

  deleteStoreItemButton.addEventListener('click', function() {
    selectedOption = document.querySelector('.js-store-select option:checked');
    if(selectedOption === null) return;
    deleteStoreElement(selectedOption.innerText);
    updateUI();
  });

  let addToStoreButton = document.querySelector('.js-add-to-store');

  addToStoreButton.addEventListener('click', function() {
    selectedOption = document.querySelector('.js-listing-select option:checked');
    if(selectedOption === null) return;
    addToStoreElements(selectedOption.innerText);
    updateUI();
  });

  let clearListsButton = document.querySelector('.js-clear-lists');

  clearListsButton.addEventListener('click', function() {
    listingElements.items.length = 0;
    storeElements.items.length = 0;
    updateUI();
  });

  let sortStoreItemsButton = document.querySelector('.js-sort-store-items');

  sortStoreItemsButton.addEventListener('click', function() {
    storeElements.items.sort();
    updateUI();
  });

};
