import { test } from 'qunit';
import moduleForAcceptance from 'environweb/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | properties/index');

test('visiting /properties', function(assert) {
  visit('/properties');

  andThen(function() {
    assert.equal(currentURL(), '/properties');
  });
});
