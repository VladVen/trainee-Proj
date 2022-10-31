import * as Yup from "yup";

const editValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .matches(/^[A-Za-z]+$/ , 'Only English is valid'),
});

export default editValidationSchema