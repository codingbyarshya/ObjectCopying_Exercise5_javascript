const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  const person2 = person1;
  person2.firstName = "Simon";
  
  console.log(person1.firstName); 
  console.log(person2.firstName); 
  
  /* In this exercise i created "firstperson object" then i assigned person1 to person2
    and the important note is that both refrence the same object in memory
    so for showing "simon" i modified firstName property of person2 to "Simon". 
  */
  