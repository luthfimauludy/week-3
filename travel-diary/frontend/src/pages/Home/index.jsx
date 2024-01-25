import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { FormattedMessage } from 'react-intl';

import { setRegister } from '@containers/App/actions';

import DataGrid from '@components/DataGrid';

import classes from './style.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegister());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <header className={classes.bgHeader}>
        <div className={classes.textHeader}>
          <h1>The Journey</h1>
          <h1>you ever dreamed of.</h1>
          <p>We made a tool so you can easily keep & share your travel memories. But there is a lot more</p>
        </div>
      </header>
      <section>
        <div className={classes.headText}>
          <h1>Journey</h1>
        </div>
        <div className={classes.boxInput}>
          <input type="text" />
          <button type="button">Search</button>
        </div>
        <div className={classes.gridWrapper}>
          <DataGrid />
        </div>
      </section>
    </div>
  );
};

export default Home;
