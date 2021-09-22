import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | container/admin-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:container/admin-page');
    assert.ok(route);
  });
});
