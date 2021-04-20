import { action, observable } from 'mobx';

class _ErrorStore {
  @observable error: string | null = null;

  @action setError(error: string) {
    this.error = error;
  }
}

export const errorStore = new _ErrorStore();
