import React from 'react';
import { Formik} from 'formik';

import * as Yup from 'yup';

export const Myprofile = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),

    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    
  })
  
        initialValue = {
            firstname: '',
            lastname: '',
            gender: 'none',
            preferableJournals: 'none',
            Country: '',
            State: '',
            City: '',
            Email: '',
            Phone: '',
            Description: '',
          }      
          validate = (value) => {
            var errors = {};
            if (value.firstname === '') errors.firstname = 'Required';
            if (value.lastname === '') errors.lastname = 'Required';
            if (value.gender === 'none') errors.gender = 'Required';
            if (value.preferableJournals === 'none')
              errors.preferableJournals = 'AtleastOne Required';
            if (value.Country === '') errors.Country = 'Required';
            if (value.State === '') errors.State = 'Required';
            if (value.City === '') errors.City = 'Required';
            if (value.Email === '') errors.Email = 'Required';
            if (value.Phone === '') errors.Phone = 'Required';
            return errors;
          };
          handleSubmit = (values) => {
            values.preventDefault();
            console.log(values);
          };
          return(
            <>
            <h3>Formik Component</h3>
            <Formik
              initialValues={this.initialValue}
              //validate={this.validate}
              onSubmit={this.handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={this.handleSubmit}>
                  <div className="maindiv">
                    <div className="subdiv">
                      <div>
                        <label>First Name</label>
                        <br />
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          value={values.firstname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <br />
                        <span style={{ color: 'red' }}>
                          {touched.firstname && errors.firstname}
                        </span>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <label>Last Name</label>
                        <br />
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          value={values.lastname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <br />
                        <span style={{ color: 'red' }}>
                          {touched.lastname && errors.firstname}
                        </span>
                      </div>
                    </div>
                    <br />
                    <div className="subdiv">
                      <div>
                        <label>Gender</label>
                        <br />
                        <select
                          name="Gender"
                          id="Gender"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="none">none</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <br />
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <label>Preferable Journals</label>
                        <br />
                        <select
                          name="PreferableJournals"
                          id="PreferableJournals"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value="Male"
                        >
                          <option value="none">none</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <br />
                        <span style={{ color: 'red' }}>
                          {touched.preferableJournals && errors.preferableJournals}
                        </span>
                      </div>
                    </div>
                    <br />
                    <div className="subdiv">
                      <div>
                        <label>Country</label>
                        <br />
                        <input
                          type="text"
                          name="Country"
                          id="Country"
                          value={values.Country}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <br />
                        <span style={{ color: 'red' }}>
                          {touched.Country && errors.Country}
                        </span>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <label>State</label>
                        <br />
                        <input
                          type="text"
                          name="State"
                          id="State"
                          value={values.State}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <br />
                        <span style={{ color: 'red' }}>
                          {touched.State && errors.State}
                        </span>
                      </div>
                    </div>
                    <br />
                    <div className="subdiv">
                      <div>
                        <label>City</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>Hide</label>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name="City"
                          id="City"
                          value={values.City}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <br />
                        <span style={{ color: 'red' }}>
                          {touched.City && errors.City}
                        </span>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <label>Email</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>Hide</label>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                        <br />
                        <input
                          type="email"
                          name="Email"
                          id="Email"
                          value={values.Email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <br />
                        <span style={{ color: 'red' }}>
                          {touched.Email && errors.Email}
                        </span>
                      </div>
                    </div>
                    <br />
                    <div className="subdiv">
                      <div>
                        <label>Phone</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>Hide</label>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name="Phone"
                          id="Phone"
                          value={values.Phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <br />
                        <span style={{ color: 'red' }}>
                          {touched.Phone && errors.Phone}
                        </span>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <label>Description</label>
                        <br />
                        <input
                          type="text"
                          name="Description"
                          id="Description"
                          value={values.Description}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <br />
                    <div>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                      &nbsp;
                      <label>Disable Email Notification </label>
                      <br />
                      <button type="onSubmit" className="btn">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </>
        );
      }
    
    export default Myprofile;
    
        