const getIsLoggedIn = state => {
  return state.auth.isLoggedIn;
};
console.log(getIsLoggedIn);
const getUserName = state => state.auth.user.name;
console.log(getUserName);
const authSelectors = {
  getIsLoggedIn,
  getUserName,
};
export default authSelectors;
