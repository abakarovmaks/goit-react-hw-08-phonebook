import { createSelector } from '@reduxjs/toolkit';

const getLoading = (state) => state.phoneBook.loading;

const getFilter = (state) => state.phoneBook.filter;

const getAllContacts = (state) => state.phoneBook.contacts;

const getError = (state) => state.phoneBook.error;

const getFilteredContactsList = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
const selectors = {
  getFilter,
  getAllContacts,
  getLoading,
  getError,
  getFilteredContactsList,
};

export default selectors;
