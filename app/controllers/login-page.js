import Controller from '@ember/controller';
import $ from 'jquery';
import cookies from 'ember-cli-js-cookie';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {

  @service router;

  errormsg = 'Invalid Username or password';
  err = false;

  @action
  validate_user() {
    var uname = this.username;
    var pass = this.password;

    // console.log(uname, password);

    var result = $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/role-based-login-backend1/login',
      data: {
        uname: uname,
        pass: pass,
      },
      global: false,
      async: false,
      success: function (dat) {
        return dat;
      },
      error: function (err) {
        console.log(err);
      },
    }).responseText;

    const rsObj = JSON.parse(result);

    console.log(typeof rsObj, rsObj);

    if (rsObj.isValidated) {
      // console.log('assigning values');
      cookies.set('username', rsObj.userName);
      cookies.set('isvalidated', rsObj.isValidated);
      cookies.set('roleid', rsObj.roleId);
      this.set('err', false);
      this.router.transitionTo('container');
    } else {
      this.set('err', true);
    }
  }
}
