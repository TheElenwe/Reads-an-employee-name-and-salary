let readlineSync = require("readline-sync");
sum=0;
for (employee=0; employee<10; employee++){
    let employee =readlineSync.question("Input employee name: ");
  if(employee==="quit"){
      employee++  
      break;
  }  
   salary = Number(readlineSync.question("Input employee salary: "));
sum+=salary  
  }
console.log(`${employee} employees and the total amount of salaries is ${sum}$`);

