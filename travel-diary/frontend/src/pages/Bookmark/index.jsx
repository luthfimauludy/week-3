/* eslint-disable arrow-body-style */
import DataGrid from '@components/DataGrid';

import classes from './style.module.scss';

const Bookmark = () => {
  return (
    <div className={classes.container}>
      <section>
        <div className={classes.headText}>
          <h1>Bookmark</h1>
        </div>
        <div className={classes.gridWrapper}>
          <DataGrid />
        </div>
      </section>
    </div>
  );
};

export default Bookmark;
