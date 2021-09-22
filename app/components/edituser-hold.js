import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class EdituserHoldComponent extends Component {
  @tracked users;

  constructor() {
    super(...arguments);

    var result = $.ajax({
      type: 'GET',
      url: '/role-based-login-backend1/webapi/users',
      contentType: 'application/json',
      global: false,
      async: false,
      success: function (dat) {
        return dat;
      },
      error: function (err) {
        console.log(err);
      },
    }).responseText;

    this.users = JSON.parse(result);
    console.log(result);
    console.log(this.users);
  }
}
