
const add = (x) => {
  var y = Math.random();
  var r = Math.random();

  var a = x + y;
  var b = x + r;

  if (a > b) {
    console.log('a > b')
    return a
  } else {
    console.log('b > a')
    return b
  }
}

console.log(add(1))

function firstClass() {
  console.log('changeClass function...');
  $('div').removeClass('firstclass');
  $('div').addClass('secondclass');
}

function secondClass() {
  console.log('changeClass function...');
  $('div').removeClass('secondclass');
  $('div').addClass('firstclass');
}

function addBorders(event) {
  console.log('addBorders function...');
  var ids = this.id;
  $('div').removeClass('firstclass');
  $('div:even').addClass('addBorders');
  $('div:last').addClass('secondClass');
  $('h3:gt(1)').addClass('addBorders');
  $('h3:last').append('<h4 class="firstClass">h3 appended with h4 in addBorders function</h4>');
  console.log(typeof addBorders);
}

function addNewElements() {
  $('div').each(function() {
    var ids = this.id;
    $(this).append('<h6>' + ids + '</h6>');
  });
}
