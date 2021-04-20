import { action, observable } from 'mobx';
import { IUser } from '../interfases/user.interface';
import { UserRepository } from '../repositories/user.repository';

class _UserStore {
  @observable currentUser: IUser | null = null;

  @observable loadingUser = false;

  @observable error: string | null = null;

  @action pullUser(token: string) {
    this.loadingUser = true;
    return UserRepository.current(token)
      .then(action(({ data: user }) => { this.currentUser = user; }))
      .finally(action(() => { this.loadingUser = false; }));
  }

  @action forgetUser() {
    this.currentUser = null;
  }
}

export const userStore = new _UserStore();
