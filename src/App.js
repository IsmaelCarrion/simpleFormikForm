import React from 'react';
import './App.css';
import {useFormik} from 'formik';

function App() {

  const formik = useFormik({
    //initialValues is an object that contains the initial values of the form fields
    initialValues: {
      email: '',
      password: ''
    },
    //onSubmit is a function that is called when the form is submitted, is displaying to the console for testing purposes
    onSubmit: values => {
      console.log('Form data: ', values);
      alert('Login Successful');
    },

    validate: values => {
      let errors = {};
      //first we validate the email if: 1. it is empty, 2. it is not in the correct format
      if(!values.email){
        errors.email = 'Field is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Username should be an eamil';
      }

      //then we validate the password if: 1. it is empty
      if(!values.password){
        errors.password = 'Field is required';
      }

      return errors;
    }
  
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id = "emailField" type="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError"style={{color:'red'}}>{formik.errors.email}</div> : null}
        <div>Password</div>
        <input id = "pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        <div></div>
        <button id = "submitBtn"type ="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
