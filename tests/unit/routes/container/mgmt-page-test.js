import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | container/mgmt-page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:container/mgmt-page');
    assert.ok(route);
  });
});
