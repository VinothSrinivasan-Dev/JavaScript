
 
  function Employee(id,name,department,salary){
    this.name=name;
    this.id=id;
    this.department=department;
    this.salary=salary;
  }

  //Create a simple Employee Database Object

  const employeeDbB ={};

  function addEmployee(id,name,department,salary){
    const employee= new Employee(id,name,department,salary);
    employeeDbB[id] = employee;
    console.log("Employee with id "+id+" added");

  }

  //Function to get all Employees( Objects.Values)
  function getAllEmployees(){
        const employess=Object.values(employeeDbB);
        console.log("List of Employees");
        employess.forEach(employee => {
            console.log(`${employee.name},Department:${employee.department},Salary:${employee.salary}`);
        });      
  }

  //Function to view Particular Employee Details (Object.entries)
  function getEmployeeById(id){
    if(employeeDbB[id]){
        return Object.entries(employeeDbB[id])
    }
    return `Employee with ID ${id} is not found`;
  }

  //Function to update Employee details
  function updateEmployee(id,updateDetails){
    if(employeeDbB[id]){
        Object.assign(employeeDbB[id],updateDetails);
    }else{
      console.log(`Employee with ID ${id} is not found`)
    }
  }

//Function to freeze employee data 
function freezeEmployee(id){
    if(employeeDbB[id]){
        Object.freeze(employeeDbB[id]);
        console.log("Employee Data Freezed")
    }else{
      console.log(`Employee with ID ${id} is not found`)
    }
}

//Function to seal Employee Data
function sealEmployee(id){
    if(employeeDbB[id]){
        Object.seal(employeeDbB[id]);
        console.log("Employee Data Sealed");   
    }else{
      console.log(`Employee with ID ${id} is not found`)
    }
}


//Usage
addEmployee(1,"Alice","Engineering",230000);
addEmployee(2,"Nicky","Sports",450000);
addEmployee(3,"Perumal","Electricity",34000);

//View Employees
getAllEmployees();

//get Employee Details By Id 
console.log("Employee Details for below Id ");
console.log(getEmployeeById(2));

//Update Employee 
console.log("Updated Employee Details")
updateEmployee(2,{salary:80000});
console.log('After Update')
getAllEmployees();

//freeze
freezeEmployee(2);
employeeDbB[2].name="Jockey";
console.log("After Freeze we can't modify anything ")
getAllEmployees()

//seal 
sealEmployee(2);
employeeDbB[2].salary =90000
console.log("Afer seal we can modify anything ")
getAllEmployees();
