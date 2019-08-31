/*const name = "Peter Heronimous Lind";

const firstName = name.split(" ");
console.log(`First Name: ${firstName[0]}`);

const middleName = name.split(" ");
console.log(`Middle Name: ${middleName[1]}`);

const lastName = name.split(" ");
console.log(`Last Name: ${lastName[2]}`);
*/
fullname = "Peter Heronimous Lind";

firstSpace = fullname.indexOf(" ");
firstName = fullname.substring(0, firstSpace);
console.log("First name:" + firstName);

secondSpace = fullname.indexOf(" ", firstSpace + 1);
secondName = fullname.substring(firstSpace + 1, secondSpace);
console.log("Second name:" + secondName);

lastName = fullname.slice(secondSpace + 1);
console.log("Last name:" + lastName);
