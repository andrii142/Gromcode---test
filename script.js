"use strict"

// 2)
  let arr = [3,5,8,2,1];
  function getmin(){
    console.log (Math.min(...arr));
  }

  getmin();

// 3)  
let ar = [3,5,8,2,1];
const and = ar.filter(n => {
  if (n % 2 == 0) {
  return true;
}
});
console.log(and);



// 4)
const people = [
    { name: "Jony Walker", birthDate: "1995-12-17"},
    { name: "Andrew", birthDate: "1995-12-17"},
    { name: "Victor", birthDate: "1995-12-17"},
    { name: "Andrew", birthDate: "2001-12-17"}
];
const andrew = people.filter(key => {
  if (key.name === 'Andrew') {
  return true;
}
});
console.log(andrew);
