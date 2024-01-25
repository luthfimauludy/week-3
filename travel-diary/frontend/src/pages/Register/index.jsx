/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import encryptPayload from '@utils/encryptPayload';

import { setRegister } from './actions';

import classes from './style.module.scss';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    const dataUser = {
      fullname: encryptPayload(fullName),
      email: encryptPayload(email),
      password: encryptPayload(password),
    };
    dispatch(
      setRegister(
        dataUser,
        () => {
          console.log('Callback success');
        },
        (error) => {
          console.log(error);
        }
      )
    );
    navigate('/login');
  };

  return (
    <div className={classes.container}>
      <div className={classes.mainContent}>
        <h1>
          <FormattedMessage id="app_header_register" />
        </h1>
        <form onSubmit={onSubmit}>
          <div className={classes.formInput}>
            <label>Full Name</label>
            <input type="text" onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className={classes.formInput}>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={classes.formInput}>
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">
            <FormattedMessage id="app_header_register" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
