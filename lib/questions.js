const managerQuestions = [
  { message: 'Please enter your name', name: 'name', type: 'input' },
  {
    message: 'Please enter your email-id',
    name: 'email',
    type: 'input',
  },
  {
    message: 'Please enter your office number#',
    name: 'officeNumber',
    type: 'input',
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
  },
  {
    message: "Please enter Engineer's email-id",
    name: 'email',
    type: 'input',
  },
  {
    message: "Please enter your Engineer's github username",
    name: 'github',
    type: 'input',
  },
];

const internInfoQues = [
  {
    message: "Please enter Inter's name",
    name: 'name',
    type: 'input',
  },
  {
    message: "Please enter Intern's email-id",
    name: 'email',
    type: 'input',
  },
  {
    message: "Please enter the name of your Intern's school",
    name: 'school',
    type: 'input',
  },
];

const questions = {
  getManagerInfo: managerQuestions,
  getEmployeeType: chooseEmployeeTypeQues,
  addMoreEmployeeQues: addMoreEmployeeQues,
  getEngineerInfo: engineerInfoQues,
  getInternInfo: internInfoQues,
};

module.exports = questions;
