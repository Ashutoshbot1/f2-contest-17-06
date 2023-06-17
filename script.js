/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr2=[
  { id: 12, name: "aman", age: "28", profession: "doctor" },
  { id: 22, name: "raj", age: "38", profession: "engineer" },
  { id: 90, name: "ashu", age: "58", profession: "CA" },
]


function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(element=>{
    if(element.profession=="developer"){
      console.log(element);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee=>{
    if(employee.profession=="developer"){
      console.log(employee);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let obj={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((employee=>{
    if(employee.profession=="admin"){
      arr.pop(employee);
    }
  }))

  console.log(arr);

}

function concatenateArray() {
  //Write your code here, just console.log
  
  arr2.forEach(emp=>{
    arr.push(emp);
  })

  console.log(arr);
}
