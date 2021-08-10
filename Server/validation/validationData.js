const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateData(student) {
    let errors = {};

    student.firstName = isEmpty(student.firstName)? "": student.firstName;
    student.lastName = isEmpty(student.lastName)? "": student.lastName;
    student.email = isEmpty(student.email)? "": student.email;
    student.date = isEmpty(student.date)? "": student.date;
    student.age = isEmpty(student.age)? 0: student.age;

    if(Validator.isEmpty(student.firstName)) {
        errors.firstName = "first name can't be empty"; 
    }

    if(Validator.isEmpty(student.lastName)) {
        errors.firstName = "last name can't be empty"; 
    }

    if(Validator.isEmail(student.email)) {
        errors.firstName = "Email is not in the correct format"; 
    }

    if(Validator.isDate(student.date)) {
        errors.firstName = "Email is not in the correct format"; 
    }

    if(Validator.isEmpty(student.age)) {
        errors.firstName = "age cant be empty or 0"; 
    }

    return {
        errors,
        isValid:isEmpty(errors)
    };
}