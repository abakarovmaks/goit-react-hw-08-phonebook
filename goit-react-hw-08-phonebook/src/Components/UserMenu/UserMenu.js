import React from 'react';
import styles from './UserMenu.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className="avatar" />
    <span className={styles.name}>Welcome, {name}</span>
    <button className={styles.button} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
