(function(window, document, undefined){
  'use strict';

  var $endpointsLists = document.querySelectorAll('ul.endpoints'),
      $apiItemTitles = document.querySelectorAll('.api-item-title'),
      apiItemTitles = [].slice.call($apiItemTitles);

  $endpointsLists.classList.remove('is-visible');

  apiItemTitles.forEach(function($apiItemTitle) {
    $apiItemTitle.addEventListener('click', toggleApiItem);
  });

  var toggleApiItem = function(event) {
    var $apiItem = $(this).parent('.api-item').find('ul.endpoints');
    $endpointsLists.not($apiItem).hide();

    if ($apiItem.is(':visible')) {
      $apiItem.hide();
    } else {
      $apiItem.show();
    }
  };

}(window, document));
