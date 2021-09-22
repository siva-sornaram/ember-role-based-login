import Controller from '@ember/controller';
import $ from 'jquery';
import { inject as service } from '@ember/service';
import cookies from 'ember-cli-js-cookie';

export default class LoginController extends Controller {
  @service session;

  @service router;

  errormsg = 'Invalid Username or password';
  err = false;

  validate_user = () => {
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
      console.log('assigning values');
      this.session.setUserName(rsObj.userName);
      this.session.setIsValidated(rsObj.isValidated);
      this.session.setRoleId(rsObj.roleId);
      cookies.set('username', rsObj.userName);
      this.router.transitionTo('container');
    } else {
      this.set('err', true);
    }

    console.log(this.session.getUserName());
    console.log(this.session.getIsValidated());
    console.log(this.session.getRoleId());
  };
}
