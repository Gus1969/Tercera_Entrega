 function Validation(values)  {
    let errors = {};

    if(!values.name.trim()){
        errors.name = "Enter your name please";
    }

    if(!values.last.trim()) {
        errors.last = "Your full name is required";
    }

    if(!values.email) {
        errors.email = "Your email is required";
    } else if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(values.email)) { 
        errors.email = "Invalid email address";
}

 if(!values.password) {
     errors.password = "Enter your password please"
 } else if(values.password.length < 5) {
     errors.password = " Your passport should contain at least 6 characters";
 }

 if(!values.confirm) {
    errors.confirm = "Re enter your password";
} 
else if(values.confirm !== values.password) {
    errors.confirm = "Passwords do not match";
}
return errors;
}
export default Validation;

