$('.list').on('click', 'li', function(e) {
  e.preventDefault();

  let link = $(this).context.innerText.replace(/\(.*?\)/, "") + '/index.html'

  $('iframe').attr('src', link)
});

$('.inspiration').on('click', function(e) {
  e.preventDefault();

  let inspirationList = $('.inspiration-list')
  let inspirationHeader = $('.inspiration')

  if( inspirationList.attr('id') === 'hide' ) {
    inspirationList.attr('id', 'show');
    inspirationHeader.text('- Inspiration');
  } else {
    inspirationList.attr('id', 'hide');
    inspirationHeader.text('+ Inspiration');
  }
});


$('.conversion').on('click', function(e) {
  e.preventDefault();

  let conversionList = $('.conversion-list')
  let conversionHeader = $('.conversion')

  if( conversionList.attr('id') === 'hide' ) {
    conversionList.attr('id', 'show');
    conversionHeader.text('- Conversion');
  } else {
    conversionList.attr('id', 'hide');
    conversionHeader.text('+ Conversion');
  }
});
