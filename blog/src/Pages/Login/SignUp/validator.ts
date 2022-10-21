import * as Yup from "yup";

const signUpValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .matches(/^[A-Za-z]+$/ , 'Only English is valid'),
    email: Yup.string()
        .email('Email must be valid'),
    password: Yup.string()
        .min(5, "Must be longer than 5 characters")
        .max(10, "Must be less than 10 characters"),
});

export default signUpValidationSchema