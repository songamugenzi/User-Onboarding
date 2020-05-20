import React from 'react'

export default function PluggedForm(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
    } = props

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add new user</h2>
                <button disabled={disabled}>submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>User information</h4>

                <label>Name&nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        placeholder='Enter your name'
                        name='name'
                        type='text'
                    />
                </label>

                <label>Email
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        placeholder='Enter your email'
                        name='email'
                        type='email'
                    />
                </label>

                <label>Password
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        placeholder='Enter your password'
                        name='password'
                        type='text'
                    />
                </label>
            </div>

            <div className='tos checkbox'>
                <label>Read our terms and conditions
                    <input
                        type='checkbox'
                        name='Terms and conditions'
                        checked={values.tos}
                        onChange={onCheckboxChange}
                    />
                </label>
            </div>
        </form>
    )
}