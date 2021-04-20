import { action, observable, reaction } from 'mobx';

class _CommonStore {
  @observable token: string | null = window.localStorage.getItem('jwt');

  constructor() {
    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      },
    );
  }

  @action setToken(token: string) {
    this.token = token;
  }
}

export const commonStore = new _CommonStore();
