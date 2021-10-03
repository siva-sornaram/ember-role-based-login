import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import cookies from 'ember-cli-js-cookie';

export default class ContainerRoute extends Route {
  isvalidated = cookies.get('isvalidated');

  @tracked username = cookies.get('username');
  @tracked roleId = cookies.get('roleid');

  beforeModel() {
    // if (!this.session.getIsValidated() && this.session.getUserName() === '') {
    //   console.log(this.session.getUserName());
    //   console.log(this.session.getIsValidated());
    //   this.transitionTo('login-page');
    // }

    console.log('cookies : ', cookies.get('username'));
    console.log('cookies : ', cookies.get('isvalidated'));

    if (!cookies.get('isvalidated')) {
      this.transitionTo('login-page');
    }
  }
}
