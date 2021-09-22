import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | container/home-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:container/home-page');
    assert.ok(route);
  });
});
