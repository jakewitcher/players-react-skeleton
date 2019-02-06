import validator from 'validator';

function formatEmail(email) {
  return email.trim().toLowerCase();
}

export function validateEmail(email) {
  return validator.isEmail(formatEmail(email));
}

export function formatName(name) {
  const head = name.trim().slice(0, 1).toUpperCase();
  const tail = name.trim().slice(1).toLowerCase();
  return head.concat(tail);
}

const strongPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'); // eslint-disable-line

export function checkPasswordStrength(password) {
  return strongPassword.test(password);
}
