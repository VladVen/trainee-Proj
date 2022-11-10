import * as Yup from 'yup';

const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Email must be valid'),
  password: Yup.string().min(5, 'Must be longer than 5 characters').max(10, 'Must be less than 10 characters'),
});

export default signInValidationSchema;
