$(document).ready(function() {
  var mwidth = $('#menu').outerWidth();
  var wlpadding = parseInt($('#wrapper').css('padding-left'));
  $('#menu').css('margin-left', -(mwidth+wlpadding));
  $('code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
