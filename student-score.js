const students =[];


function addStudent(name, score){
    score = Number(score);
    score = score ?? 0;
    name = name.trim().toUpperCase();
    students.push({name, score});
}

// Getv Grades
function getGrades(){
  return  students.map((student)=>{
        let grade = "F";
        if(student.score >=90){
            grade= "A"
        }else if(student.score >=75){
            grade= "B"
        }else if(student.score >=50){
            grade= "C"
        }else if(student.score >=35){
            grade= "D"
        }
        return{...student,grade}
    });
}

//Top Scores 
function getTopScores(){
    return students.filter((student) =>{
        return student.score >= 75;
    })
}

//find Student By Name
function findStudent(name){
    name = name.trim().toUpperCase();
    return students.find((student) => {
        return student.name === name;
    });
}

// Check  failures
function hasFailures(){
    return students.some((student) => {
        return student.score < 35;
    });
}
    
//Display Data
function displayStudents(){
    const graded = getGrades();
    console.log("Students Data")
    console.log("---------------------");
    console.log("All Students with Grades");
    console.log("Name | Score | Grade");
    console.log("---------------------");
    graded.forEach((student) => {
        console.log(`${student.name} | ${student.score} | ${student.grade}`);
    }
    );
}


//adding Students
addStudent("Alice", 85);
addStudent("Bob", 67);
addStudent("Charlie", 45);
addStudent("David", 30);
addStudent("Eve", 95);

// Display Students
displayStudents();

console.log("\n Top Scorers (Score >=75)");

console.log(getTopScores())

// Find Student
const studentName = "Charlie";
const student = findStudent(studentName);
console.log("\n Searching for Charlie...");
console.log(student)
if(student){
    console.log(`Found Student - Name: ${student.name}, Score: ${student.score}`);
}else{
    console.log(`Student with name ${studentName} not found.`);
}


// Check for Failures
if(hasFailures()){
    console.log("There are students who have failed.");
}else{
    console.log("All students have passed.");
}

