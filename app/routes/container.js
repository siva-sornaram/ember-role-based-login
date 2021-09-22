import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ContainerRoute extends Route {
  @service session;
  isvalidated = this.session.getIsValidated();

  @tracked username = this.session.getUserName();
  @tracked roleId = this.session.getRoleId();

  beforeModel() {
    if (!this.session.getIsValidated() && this.session.getUserName() === '') {
      console.log(this.session.getUserName());
      console.log(this.session.getIsValidated());
      this.transitionTo('login-page');
    }
  }
}
