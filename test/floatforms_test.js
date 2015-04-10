(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#floatforms', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
      this.form1 = $('#form1');
      this.floatbox = $('#floatbox');
    }
  });

  test('returns object (is chainable)', function() {
    expect(1);
    strictEqual(typeof(this.form1.floatforms()), 'object', 'return object (should be chainable)');
  });

  test('moves input to floatbox', function() {
    expect(4);
    this.form1.floatforms();
    this.form1.find('input').val('test');
    this.form1.find('input').trigger('blur');
    strictEqual(this.form1.find('input').val(), 'test', 'val is set');
    strictEqual(this.form1.find('input').length, 1, 'input is still in the form');
    strictEqual(this.floatbox.find('.floatforms-moved').length, 1, 'input is in floatbox');
    strictEqual(this.floatbox.find('input').is(':hidden'), true, 'input is hidden in floatbox');
  });

  test('clicking value changes text to input', function() {
    expect(2);
    this.form1.floatforms();
    this.form1.find('input').val('test');
    this.form1.find('input').trigger('blur');
    this.floatbox.find('#input-name').trigger('click');
    strictEqual(this.floatbox.find('#input-name').is(':hidden'), false, 'input is visible in floatbox');
    this.floatbox.find('#name-copy').val('new');
    this.floatbox.find('#name-copy').trigger('blur');
    strictEqual(this.form1.find('input').val(), 'new', 'original form received new value after editing in floatbox');
  });
}(jQuery));
