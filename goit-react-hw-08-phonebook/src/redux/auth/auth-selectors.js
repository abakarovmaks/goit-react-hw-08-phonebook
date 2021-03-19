const getIsAuthenticated = (state) => state.auth.token;

const getUsername = (state) => state.auth.user.name;

const authSelectors = {
  getIsAuthenticated,
  getUsername,
};

export default authSelectors;
