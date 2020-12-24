// Finding a specific object in an array of objects

let customers = [
    { id: 0, name: 'paul' },
    { id: 1, name: 'jeff' },
    { id: 2, name: 'mary' }
  ];

  let customer = customers.find((cus) =>  cus.name === "mary" );

//   console.log(customer);


// Looping over Object keys and values 

Object.keys(customers[1]).forEach((key, value) => {
    console.log(key, value);
});


// Destructing variable assignment
function destruct(){
    let profile = ['bob', 34, 'carpenter'];
    let [name, age, job] = profile;
    return name;
}
console.log("name",destruct());
