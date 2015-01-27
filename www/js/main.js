$(function() {
  sh_highlightDocument('js/lang/', '.js');

  $('img[data-src]').each(function() {
    $(this).attr("src", $(this).attr("data-src"));
  });

  $('#presentation').jmpress({});

  // random logo effect
  var $bg = $('body > div.bg'),
      mindelay = 1000,
      maxdelay = 8000,
      delay = maxdelay;
  function animate() {
    $bg.toggleClass('blur');
    setTimeout(animate, delay * Math.random());
    if(Math.random() < .2)
      delay = delay === maxdelay ? mindelay : maxdelay;
  }

  $('.step.active').each(enter);

  animate();
});