import Component from '@glimmer/component';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default class EdituserHold1cComponent extends Component {

    @service session;

    @service router;
  
    update_user = () => {
      var uname = this.username;
      var userId = this.userid;
      var mgmt = document.querySelector('#mgmt').checked;
      var admin = document.querySelector('#admin').checked;
      var roleid = 1;
  
      console.log(uname, mgmt, admin);
  
      if (admin) {
        roleid = 3;
      } else if (mgmt && !admin) {
        roleid = 2;
      } else {
        roleid = 1;
      }
  
      var userdata = {
        userId: userId,
        userName: uname,
        roleId: roleid,
      };
  
      console.log(roleid);
  
      var result = $.ajax({
        type: 'PUT',
        url: '/role-based-login-backend1/webapi/users/updateuser',
        contentType: 'application/json',
        data: JSON.stringify(userdata),
        global: false,
        async: false,
        success: function (dat) {
          return dat;
        },
        error: function (err) {
            $("#message").text("There is an Error ...").css("color", "red");
          console.log(err);
        },
      }).responseText;
  
      console.log(typeof result, result);
  
      if (result) {
        $("#message").text("Updated User Successfully").css("color", "green");
      } else {
        $("#message").text("The User is not updated ... ").css("color", "red");
      }
    };
}
