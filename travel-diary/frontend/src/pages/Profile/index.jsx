/* eslint-disable arrow-body-style */
import DataGrid from '@components/DataGrid';

import imgProfile from '../../static/images/img-profile.jpg';

import classes from './style.module.scss';

const Profile = () => {
  return (
    <div className={classes.container}>
      <section>
        <div className={classes.headText}>
          <h1>Profile</h1>
        </div>
        <div className={classes.boxProfile}>
          <img src={imgProfile} alt="Profile" />
          <div className={classes.textProfile}>
            <h3>Fadhil</h3>
            <p>fadhil@gmail.com</p>
          </div>
          <button type="button">Add New Post</button>
        </div>
        <div className={classes.gridWrapper}>
          <DataGrid />
        </div>
      </section>
    </div>
  );
};

export default Profile;
