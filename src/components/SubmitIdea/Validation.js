export default function validateInfo(values) {
    let errors = {};
  
    if (!values.fullname) {
      errors.fullname = 'FullName required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
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
  
    if (!values.state) {
        errors.state = 'State required';
      }

      if (!values.title) {
        errors.title = 'Title required';
      }

      if (!values.abstract) {
        errors.abstract = 'Abstract required';
      }

      if (!values.filetoupload) {
        errors.filetoupload = 'Attachment required';
      }

      if (!values.idea  ) {
        errors.idea  = 'Text required';
      }

      if (!values.date) {
        errors.date = 'Attachment required';
      }

      if (!values.signature) {
        errors.signature = 'Signature required';
      }
    // if (!values.password2) {
    //   errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //   errors.password2 = 'Passwords do not match';
    // }
    return errors;
  }