import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .min(3, 'Username must be at least three characters long')
        .required('Username is a required field'),
    email: yup.string()
        .email('Enter valid email address')
        .required('Email is a required field'),
    password: yup.string()
        .min(8, 'Password must be at least eight characters long')
        .required('Password is a required field'),
    tos: yup.boolean()
        .oneOf([true], 'Read and accept terms and conditions')
})

export default formSchema