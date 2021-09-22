import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | container/admin-page/edituser', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:container/admin-page/edituser');
    assert.ok(route);
  });
});
