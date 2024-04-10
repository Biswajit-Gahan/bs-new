const regex = {
  usermobile: /^(?:[6-9])(?:\d{9})$/,
  username: /^(?:[a-zA-Z]{3,})\s(?:[a-zA-Z]{3,})(?:\s[a-zA-Z]{3,})?$/,
  // eslint-disable-next-line no-useless-escape
  company: /^(?:[a-zA-Z\.\ \d]{3,})$/,
  // eslint-disable-next-line no-useless-escape
  useremail:
    // eslint-disable-next-line no-useless-escape
    /^(?:[a-zA-Z]{3,}[a-zA-Z\d\.\_]*)@(?:[a-zA-Z]{5,10})\.(?:[a-zA-Z]{2,5})(?:\.[a-zA-Z]{2,5})?$/,
  thickness: /^((?:0\.[3-9]\d?)|(?:[1-2])(?:\.[0-9]\d?)?|(?:3(\.0)?))$/,
  quantity: /^[1-9][0-9]*(?:\.\d{1,3})?$/,
  exReq: /^.{10,}$/,
};

export default regex;
