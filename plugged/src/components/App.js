import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import PluggedForm from './PluggedForm';
import formSchema from '../validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

function App() {

  ////////////////////////
  //// INITIAL STATES ////
  ////////////////////////
  const initialFormValues = {
    name: '',
    email: '',
    password: '',
    tos: 'Read our terms and conditions',
  }

  const initialFormErrors = {
    name: '',
    email: '',
    password: '',
  }

  const initialUsers = []
  const initialDisabled = true

  ///////////////////////////
  //// SETTING UP STATES ////
  ///////////////////////////
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  /////////////////
  //// HELPERS ////
  /////////////////
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        // console.log(res.data.data)
        const userData = res.data.data
        setUsers(userData)
      })
      .catch(err => {
        debugger
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  ////////////////////////
  //// EVENT HANDLERS ////
  ////////////////////////
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
    setFormValues({ ...formValues, [name]: value })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target
    setFormValues({ ...formValues, [name]: checked })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      tos: formValues.tos,
    }

    postNewUser(newUser)
  }

  //////////////////////
  //// SIDE EFFECTS ////
  //////////////////////
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-title'>
          <h2>Plugged 🔌</h2>
        </div>
      </header>

      <PluggedForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
        onCheckboxChange={onCheckboxChange}
      />

      {/* {
        users.map(user => {
          return user
        })
      } */}

    </div>
  );
}

export default App;
