import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
export class Login extends React.Component<any, any> {
  handleSubmitForm = (e: any) => {
    e.preventDefault();
    this.props.authStore.login().then(() => this.props.history.replace('/'));
  };

  render() {
    return undefined;
  }
}
