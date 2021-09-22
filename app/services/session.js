import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends Service {
  @tracked user = {
    userId: 0,
    userName: '',
    isValidated: false,
    roleId: 1,
  };

  getUserName() {
    return this.user.userName;
  }
  setUserName(newName) {
    this.user.userName = newName;
  }

  getIsValidated() {
    return this.user.isValidated;
  }
  setIsValidated(newValidate) {
    this.user.isValidated = newValidate;
  }

  getRoleId() {
    return this.user.roleId;
  }
  setRoleId(newRoleId) {
    this.user.roleId = newRoleId;
  }
}
