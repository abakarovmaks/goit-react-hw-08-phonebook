import React from 'react';
import { CSSTransition } from 'react-transition-group';

const HomePage = () => {
  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="Title-SlideIn"
        unmountOnExit
      >
        <h1 className="Title">
          Hello
          <span role="img" aria-label="Иконка приветствия">
            👋
          </span>
        </h1>
      </CSSTransition>
      <div className="HPcontainer">
        <h2>Log in, please</h2>
      </div>
    </>
  );
};

export default HomePage;
