import { test } from 'qunit';
import moduleForAcceptance from 'environweb/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | properties/index');

test('visiting /properties', function(assert) {
  const properties = server.createList('property', 3);

  visit('/properties');

  andThen(function() {
    assert.equal(currentURL(), '/properties');
    assert.equal(find('li').length, 3);
    assert.equal(find('li:first').text(), properties[0].name);
  });
});
