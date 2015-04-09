(function ( $ ) {
$.fn.floatforms = function( options ) {
  var settings = $.extend({
    floatbox: '#floatbox',
    boxClass: 'floatbox',
    animate: false,
  }, options);
  $(settings.floatbox).addClass(settings.boxClass);
  $form = $(this);
  $(this).find('input').on('blur focusout', function() {
    if ($(this).attr('type') == 'submit') return;
    if ($(this).val() == '') return;

    id = $(this).attr('id');
    $container = $('<div>').attr('id', 'input-' + id).addClass('floatforms-moved');

    $(this).hide();
    $(this).off('blur focusout');
    var label = $('<span>').addClass('input-label');
    label.text($('label[for=' + id + ']').text() + ': ');
    var value = $('<span>').addClass('input-value');
    value.text($(this).val());

    $container.append(label, value);
    $(this).prev('label').remove();
    $container.append($(this).clone().attr('id', id+'-copy'));
    $container.show();
    $(settings.floatbox).append($container);
  });
  $(settings.floatbox).on('click', '.floatforms-moved', function() {
    var input = $(this).find('input');
    var text = $(this).find('.input-value');
    input.show();
    input.focus();
    text.hide();
    $(this).one('blur focusout', function() {
      text.text(input.val());
      input.hide();
      $form.find('input[name=' + input.attr("name") + ']').val(input.val());
      text.show();
    });
  });
}
}(jQuery));
