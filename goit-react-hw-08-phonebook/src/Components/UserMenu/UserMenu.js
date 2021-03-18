import React from 'react';
import styles from './UserMenu.module.css';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
// import defaultAvatar from '../../images/default-avatar.png';

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.MenuContainer}>
    {/* <img src={avatar} alt="" width="32" className="MenuAvatar" /> */}
    <span className={styles.MenuName}>Welcome, {name}</span>
    <button className={styles.MenuButton} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
  // avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
