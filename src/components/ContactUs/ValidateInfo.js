export default function validateInfo(values) {
    let errors = {};
  
    if (!values.fullname) {
      errors.fullname = 'FullName required';
    }  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.contactnumber) {
      errors.contactnumber = 'Contact Number is required';
    } else if (values.contactnumber.length < 10) {
      errors.contactnumber = 'Nontact Number needs to be 10 digit or more';
    }
  
    // if (!values.password2) {
    //   errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //   errors.password2 = 'Passwords do not match';
    // }
    return errors;
  }