const inquirer = require('inquirer');
const questions = require('./questions');

let init = async function () {
  console.log(questions.chooseEmployeeTypeQues);
  let ques = {
    type: 'list',
    name: 'employeeType',
    message: 'Please select employee type to add...',
    choices: ['Engineer', 'Intern'],
  };
  console.log(ques);
  const etype = await inquirer.prompt(ques);
  console.log(etype);
};

let init2 = async function () {
  try {
    let ques = {
      type: 'list',
      name: 'employeeType',
      message: 'Please select employee type to add...',
      choices: ['Engineer', 'Intern'],
    };
    const etype = await inquirer.prompt(ques);
    console.log(etype);
    const employeeType = await inquirer.prompt(
      questions['chooseEmployeeTypeQues']
    );
    console.log(employeeType);
  } catch (error) {
    console.error(error);
  }
};

function doesUserWantsToAddMoreEmployees() {
  let addMore = 'dnjd';
  inquirer.prompt(questions.addMoreEmployeeQues).then((answer) => {
    console.log(answer);
  });
  //   console.log('I am done ');
}

// init();
// init2();
doesUserWantsToAddMoreEmployees();

// {
//     type: 'list',
//     name: 'employeeType',
//     message: 'Please select employee type to add...',
//     choices: ['Engineer', 'Intern'],
//   }
