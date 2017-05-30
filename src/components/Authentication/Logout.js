export const Logout = () => {
  localStorage.removeItem('jwtToken');
  window.location.reload();
};

// export default { Logout };
