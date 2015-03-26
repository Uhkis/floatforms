(function ( $ ) {
$.fn.floatforms = function() {
  $(this).find('input').on('blur focusout', function() {
    if ($(this).attr('type') == 'submit') return;
    if ($(this).val() == '') return;

    id = $(this).attr('id');
    $elements = $(this).add('label[for=' + id + ']');
    $container = $('<div>').attr('id', 'input-' + id).addClass('moved');

    $(this).hide();
    $(this).off('blur focusout');
    var label = $('<span>').addClass('input-label');
    label.text($('label[for=' + id + ']').text() + ': ');
    var value = $('<span>').addClass('input-value');
    value.text($(this).val());

    $container.append(label, value);
    $(this).prev('label').remove();
    $container.append($(this));
    $container.show();
    $('#floatbox').append($container);
  });
  $('#floatbox').on('click', '.moved', function() {
    var input = $(this).find('input');
    var text = $(this).find('.input-value');
    input.show();
    input.focus();
    text.hide();
    $(this).one('blur focusout', function() {
      text.text(input.val());
      input.hide();
      text.show();
    });
  });
}
}(jQuery));
