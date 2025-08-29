'use strict';

const form = document.querySelector('form');

const INPUTS_REG_EXP_VALID = {
  'first-name': /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
  'last-name': /^[A-Z][a-z]{2,19}(-[A-Z][a-z]{2,19})?$/,
  email: /^.*@.+$/,
  'phone-code': /\+[1-9]\d{0,3}/,
  'phone-number': /\d{2,4}/,
  'phone-end': /\d{4,7}/,
  'message-subject': /^.+$/,
  message: /^.{10,500}$/,
};

const inputs = document.querySelectorAll('input, select, textarea');

inputs.forEach((i) => i.addEventListener('input', inputHandler));

function inputHandler(e) {
  const fieldName = e.target.name;
  const fieldValue = e.target.value;
  if (INPUTS_REG_EXP_VALID[fieldName]) {
    if (INPUTS_REG_EXP_VALID[fieldName].test(fieldValue)) {
      e.target.classList.add('valid');
      e.target.classList.remove('invalid');
    } else {
      e.target.classList.remove('valid');
      e.target.classList.add('invalid');
    }
  }
}
