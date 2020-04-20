const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const IdGenerator = require('./lib/IdGenerator');
const questions = require('./lib/questions');
const inquirer = require('inquirer');
const path = require('path');
const util = require('util');
const fs = require('fs');
const writeFilePromise = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

const idProducer = new IdGenerator();
const employeesInformation = [];
let renderedHtml = '';
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
async function init() {
  showWelcomeMessage();
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
    //make sure that the utput dir exists
    renderedHtml = render(employees);
    fs.mkdir(OUTPUT_DIR, writeHtmlToFile);
  } catch (error) {
    console.log(error);
  }
}

function showWelcomeMessage() {
  console.log('************Welcome to the Team Portal Builder**************');
  console.log(
    'Please note that Employee ID will be generated *AUTOMATICALLY* for every employee you add!'
  );
  console.log('Please answer a few questions to build a portal for your team');
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
  return employeeObj;
}

function addIdToProvidedInfo(employeeObj) {
  employeeObj.id = idProducer.getNextId();
  return employeeObj;
}

/**
 *
 * @param {String} fileName
 * @param {UserResponseObj} data
 */
async function writeHtmlToFile(error) {
  if (error && error.code !== 'EEXIST') {
    console.log(error);
    throw new Error('There was an error in creating the output directory!');
  }
  await writeFilePromise(outputPath, renderedHtml);
  console.log(
    "It's done! Your team portal html is placed in the output folder!"
  );
}

init();
