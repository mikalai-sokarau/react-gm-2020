const handleError = (e: Error) => {
  // any error handling/logging here
  // eslint-disable-next-line no-console
  console.error(e.message);
  alert(e.message); // killer feature %)
};

export default handleError;
