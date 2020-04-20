const managerQuestions = [
  {
    message: 'Please enter your name',
    name: 'name',
    type: 'input',
    validate: validateRequiredString,
  },
  {
    message: 'Please enter your email-id',
    name: 'email',
    type: 'input',
    validate: validateEmail,
  },
  {
    message: 'Please enter your office number#',
    name: 'officeNumber',
    type: 'input',
    validate: validateNumber,
  },
];

const chooseEmployeeTypeQues = {
  type: 'list',
  name: 'employeeType',
  message: 'Please select employee type to add...',
  choices: ['Engineer', 'Intern'],
};

const addMoreEmployeeQues = {
  type: 'list',
  name: 'addMore',
  message: 'Would you like to add more employees?',
  choices: ['Yes', 'No'],
};

const engineerInfoQues = [
  {
    message: "Please enter Engineer's name",
    name: 'name',
    type: 'input',
    validate: validateRequiredString,
  },
  {
    message: "Please enter Engineer's email-id",
    name: 'email',
    type: 'input',
    validate: validateEmail,
  },
  {
    message: "Please enter your Engineer's github username",
    name: 'github',
    type: 'input',
    validate: validateRequiredString,
  },
];

const internInfoQues = [
  {
    message: "Please enter Inter's name",
    name: 'name',
    type: 'input',
    validate: validateRequiredString,
  },
  {
    message: "Please enter Intern's email-id",
    name: 'email',
    type: 'input',
    validate: validateEmail,
  },
  {
    message: "Please enter the name of your Intern's school",
    name: 'school',
    type: 'input',
    validate: validateRequiredString,
  },
];

const questions = {
  getManagerInfo: managerQuestions,
  getEmployeeType: chooseEmployeeTypeQues,
  addMoreEmployeeQues: addMoreEmployeeQues,
  getEngineerInfo: engineerInfoQues,
  getInternInfo: internInfoQues,
};

function validateRequiredString(input) {
  if (typeof input === 'undefined' || input.trim().length === 0) {
    return 'This is a required field';
  }
  return true;
}

function validateNumber(input) {
  if (typeof input === 'undefined' || isNaN(input) || input <= 0) {
    return 'Please provide a positive number';
  }
  return true;
}

function validateEmail(input) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input) === false) {
    return 'You must enter a valid email address';
  }
  return true;
}

module.exports = questions;
