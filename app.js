const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const IdGenerator = require('./lib/IdGenerator');
const questions = require('./lib/questions');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

const idProducer = new IdGenerator();
const employeesInformation = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function init() {
  console.log('************Welcome to the Team Portal Builder**************');
  console.log('Please answer a few questions to build a portal for your team');
  try {
    const managerInfo = await getManagerInfo();
    employeesInformation.push(managerInfo);
    do {
      const employeeInfo = await gatherEmployeeInfo();
      employeesInformation.push(employeeInfo);
    } while (await doesUserWantToAddMoreEmployees());
    //map the collected information to appropriate employee objects
    const employees = employeesInformation.map((empInfo) => {
      return getEmployeeObject(addIdToProvidedInfo(empInfo));
    });
    console.log(employees);
  } catch (error) {
    console.log(error);
  }
}

async function getManagerInfo() {
  const managerInfo = await inquirer.prompt(questions.getManagerInfo);
  return addEmployeeType(managerInfo, 'Manager');
}

async function gatherEmployeeInfo() {
  const { employeeType } = await inquirer.prompt(questions.getEmployeeType);
  const employeeInfo = await inquirer.prompt(
    getQuestionForEmployeeType(employeeType)
  );
  return addEmployeeType(employeeInfo, employeeType);
}

function addEmployeeType(employeeInfo, employeeType) {
  employeeInfo.employeeType = employeeType;
  return employeeInfo;
}

async function doesUserWantToAddMoreEmployees() {
  const answer = await inquirer.prompt(questions.addMoreEmployeeQues);
  return answer.addMore === 'Yes';
}

function getQuestionForEmployeeType(employeeType) {
  switch (employeeType.toLowerCase()) {
    case 'engineer':
      return questions.getEngineerInfo;
      break;
    case 'intern':
      return questions.getInternInfo;
      break;
    case 'manager':
      return questions.getManagerInfo;
      break;
    default:
      throw new Error('Invalid Employee type!');
  }
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

function getEmployeeObject(employeeInfo) {
  let employeeType = employeeInfo.employeeType;
  let employeeObj = null;
  switch (employeeType.toLowerCase()) {
    case 'manager':
      employeeObj = new Manager(employeeInfo);
      break;

    case 'engineer':
      employeeObj = new Engineer(employeeInfo);
      break;

    case 'intern':
      employeeObj = new Intern(employeeInfo);
      break;

    default:
      break;
  }
  console.log(employeeObj);
  console.log(employeeObj.getRole());
  return employeeObj;
}

function addIdToProvidedInfo(employeeObj) {
  employeeObj.id = idProducer.getNextId();
  return employeeObj;
}

init();
