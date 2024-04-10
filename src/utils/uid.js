/* eslint-disable no-useless-concat */
const uid = () => {
  return parseInt(
    Date.now() +
      Math.floor(Math.random() * 100) +
      Math.floor(Math.random() * 200) +
      `${Math.floor(Math.random() * 100)}` +
      `${Math.floor(Math.random() * 200)}`
  );
};

export default uid;
