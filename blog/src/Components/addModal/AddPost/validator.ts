import * as Yup from "yup";

const addPostValidationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Required')
        .min(5, "Must be longer than 5 characters")
        .max(50, "Must be less than 50 characters"),
    description: Yup.string()
        .required('Required')
        .min(2, "Must be longer than 2 characters")
        .max(80, "Must be less than 80 characters"),
    fullText: Yup.string()
        .required('Required')
        .min(20, "Must be longer than 20 characters")
        .max(400, "Must be less than 400 characters")
});

export default addPostValidationSchema