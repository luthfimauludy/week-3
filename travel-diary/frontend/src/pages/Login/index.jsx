/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';

import { showPopup } from '@containers/App/actions';
import encryptPayload from '@utils/encryptPayload';
import { setLogin } from './actions';

import classes from './style.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const [data, setData] = useState({ email: '', password: '' });

  const doSubmit = (e) => {
    e.preventDefault();
    if (data.email === '' || data.password === '') {
      dispatch(
        showPopup(
          intl.formatMessage({ id: 'login_validation_title' }),
          intl.formatMessage({ id: 'login_validation_required' })
        )
      );
    }

    const dataUser = {
      email: encryptPayload(data.email),
      password: encryptPayload(data.password),
    };

    dispatch(
      setLogin(
        dataUser,
        () => {
          console.log('Callback success');
        },
        (error) => {
          console.log(error);
        }
      )
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.mainContent}>
        <h1>
          <FormattedMessage id="app_header_login" />
        </h1>
        <form onSubmit={doSubmit}>
          <div className={classes.formInput}>
            <label>Email</label>
            <input type="email" onChange={(e) => setData({ email: e.target.value })} />
          </div>
          <div className={classes.formInput}>
            <label>Password</label>
            <input type="password" onChange={(e) => setData({ password: e.target.value })} />
          </div>
          <button type="submit">
            <FormattedMessage id="app_header_login" />
          </button>
        </form>
        <p>
          <span>
            <FormattedMessage id="app_text_login" />
          </span>{' '}
          <a href="/register">
            <FormattedMessage id="app_text_anchor_login" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
