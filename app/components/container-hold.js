import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import cookies from 'ember-cli-js-cookie';

export default class ContainerHoldComponent extends Component {
  @service session;

  @service router;

  username = this.session.getUserName();
  roleId = this.session.getRoleId();

  invalidate = () => {
    console.log(cookies.get('username'));
    cookies.remove('username');
    console.log(cookies.get('username'));
    console.log(this.username);
    this.session.setIsValidated(false);
    this.session.setUserName('');
    this.session.setRoleId(1);

    // this.set('roleId', 1);
    console.log(this.session.getIsValidated());
    console.log(this.session.getUserName());
    this.router.transitionTo('login-page');
  };
}
