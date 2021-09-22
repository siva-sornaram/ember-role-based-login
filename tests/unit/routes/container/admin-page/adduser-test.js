import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | container/admin-page/adduser', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:container/admin-page/adduser');
    assert.ok(route);
  });
});
