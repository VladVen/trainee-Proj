import * as Yup from "yup";

const addCommentValidationSchema = Yup.object().shape({
    comment: Yup.string()
        .min(3, "Must be longer than 3 characters")
        .max(80, "Must be less than 80 characters"),
});

export default addCommentValidationSchema