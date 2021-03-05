import { useState, useEffect } from 'react';
// import emailjs from 'emailjs-com'


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    conatctumber: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    // emailjs.sendForm('service_p5nkb96', 'template_xjq25zd', e.target, 'user_Lc8gB60AoGlq0FPocvEMl')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;