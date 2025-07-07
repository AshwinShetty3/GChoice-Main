var options = {
  valueNames: [ 'name']
};

var productList = new List('product-list', options);


$('.search').on('keyup', function(event) {
  if($('.list').children().length === 0) {
    $('#not-found').css('display', 'block');
  }
  else {
    $('#not-found').css('display', 'none');
  }
});