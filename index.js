$('.list').on('click', 'li', function(e) {
  e.preventDefault();

  let size = $(this).attr('value')
  let link = size + '/' + $(this).context.innerText + '/index.html'

  console.log($(this))
  console.log(size)
  $('iframe').attr('src', link)
});

// $('.inspiration').on('click', function(e) {
//   e.preventDefault();
//
//   let inspirationList = $('.inspiration-list')
//   let inspirationHeader = $('.inspiration')
//
//   if( inspirationList.attr('id') === 'hide' ) {
//     inspirationList.attr('id', 'show');
//     inspirationHeader.text('- Inspiration');
//   } else {
//     inspirationList.attr('id', 'hide');
//     inspirationHeader.text('+ Inspiration');
//   }
// });


$('.three-hundred-two-fifty').on('click', function(e) {
  e.preventDefault();

  let conversionList = $('.three-hundred-two-fifty-list')
  let conversionHeader = $('.three-hundred-two-fifty')

  if( conversionList.attr('id') === 'hide' ) {
    conversionList.attr('id', 'show');
    conversionHeader.text('- 300x250');
  } else {
    conversionList.attr('id', 'hide');
    conversionHeader.text('+ 300x250');
  }
});

$('.one-sixty-six-hundred').on('click', function(e) {
  e.preventDefault();

  let conversionList = $('.one-sixty-six-hundred-list')
  let conversionHeader = $('.one-sixty-six-hundred')

  if( conversionList.attr('id') === 'hide' ) {
    conversionList.attr('id', 'show');
    conversionHeader.text('- 160x600');
  } else {
    conversionList.attr('id', 'hide');
    conversionHeader.text('+ 160x600');
  }
});

$('.three-hundred-six-hundred').on('click', function(e) {
  e.preventDefault();

  let conversionList = $('.three-hundred-six-hundred-list')
  let conversionHeader = $('.three-hundred-six-hundred')

  if( conversionList.attr('id') === 'hide' ) {
    conversionList.attr('id', 'show');
    conversionHeader.text('- 300x600');
  } else {
    conversionList.attr('id', 'hide');
    conversionHeader.text('+ 300x600');
  }
});

$('.seven-twenty-eight-ninety').on('click', function(e) {
  e.preventDefault();

  let conversionList = $('.seven-twenty-eight-ninety-list')
  let conversionHeader = $('.seven-twenty-eight-ninety')

  if( conversionList.attr('id') === 'hide' ) {
    conversionList.attr('id', 'show');
    conversionHeader.text('- 728x90');
  } else {
    conversionList.attr('id', 'hide');
    conversionHeader.text('+ 728x90');
  }
});
