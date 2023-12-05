const handleError = (e: Error): void => {
  // any error handling/logging here
  // eslint-disable-next-line no-console
  console.error(e.message);
  // eslint-disable-next-line no-alert
  alert(e.message); // killer feature %)
};

export default handleError;
