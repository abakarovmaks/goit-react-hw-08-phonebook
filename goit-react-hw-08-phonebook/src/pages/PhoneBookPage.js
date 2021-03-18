import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from '../Components/Container/Container';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';
import { CSSTransition } from 'react-transition-group';
import Title from '../Components/Title/Title';
import operations from '../redux/phoneBook/phoneBook-operations';
// import Spinner from '../components/Spinner/Spinner';
import Notification from '../Components/Notification/Notification';
import selectors from '../redux/phoneBook/phoneBook-selectors';

class PhoneBookPage extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    fetchContacts: PropTypes.func,
    isLoadingContacts: PropTypes.bool,
    error: PropTypes.object,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <Title />

        {this.props.error && (
          <Notification message={`ERROR: ${this.props.error.message}.`} />
        )}

        <ContactForm />

        <Filter />

        {/* {this.props.isLoadingContacts && <Spinner />} */}

        <CSSTransition
          in={this.props.contacts.length > 0}
          timeout={0}
          ommountOnExit
        >
          <ContactList />
        </CSSTransition>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: selectors.getAllContacts(state),
  isLoadingContacts: selectors.getLoading(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookPage);
