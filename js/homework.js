/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/
function toCelcius(n){
    let celcius = (n-32)*5/9;
    console.log(celcius)
};

toCelcius(212)

/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User{
    constructor(username, password){
        this.name = username;
        this.pass = password;
    }

    passwordCheck(password){
        if (this.pass === password){
            return `Welcome back ${this.name}`;
        }
        else{
            prompt(`The password did not match would you like to create a new one?`)
            if (prompt === 'yes'){
                newPass = prompt('What would you like your password to be?')
                this.pass = newPass;
            }
        }
    }
};

let user1 = new User('Apocalipsis', 'abc123');
console.log(user1);
user1.passwordCheck('125');
console.log(user1);





/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

function squareNegatives(array1){
    const lst = array1.map((num)=>{
        if (num<0){
            return num**2}
            else{
                return null
            };
    });
    filteredList = lst.filter(n => n != null)
    console.log(filteredList)
};

// let num = (-3)**2;
// console.log(num)

squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])


