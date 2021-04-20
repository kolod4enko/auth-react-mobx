import { action, observable } from 'mobx';
import { AuthRepository } from '../repositories/auth.repository';
import { ILogin } from '../interfases/auth.interface';
import { userStore } from './user.store';
import { commonStore } from './common.store';
import { errorStore } from './error.store';

class _AuthStore {
  @observable inProgress = false;

  @action async login(payload: ILogin) {
    this.inProgress = true;

    return AuthRepository.login(payload)
      .then(({ data }) => {
        commonStore.setToken(data.token);
        userStore.pullUser(data.token);
      })
      .catch(action((err) => errorStore.setError(err)))
      .finally(action(() => { this.inProgress = false; }));
  }
}

export const authStore = new _AuthStore();
