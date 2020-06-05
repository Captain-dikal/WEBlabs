window.onload = function () {
  'use strict';
  let listingElements = ['apple', 'orange'],
      storeElements = [],
      storeSelect = document.querySelector('.js-store-select'),
      listingSelect = document.querySelector('.js-listing-select');

  let elementPosition, newOption, selectedOption, itemName;

  function addToStoreElements(element) {
    elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function deleteListingElement(element) {
    elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.splice(elementPosition, 1);
    }
  }

  function deleteStoreElement(element) {
    elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.splice(elementPosition, 1);
    }
  }

  function addListingElement(element) {
    elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) return;
    listingElements.push(element);
  }

  function updateUI() {
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    for (let i = 0; i < listingElements.length; i++) {
      newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (let i = 0; i < storeElements.length; i++) {
      newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

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
    listingElements.length = 0;
    storeElements.length = 0;
    updateUI();
  });

  let sortStoreItemsButton = document.querySelector('.js-sort-store-items');

  sortStoreItemsButton.addEventListener('click', function() {
    storeElements.sort();
    updateUI();
  });

};
