import React from "react";
import {useDispatch} from "react-redux";
import {Form, Formik} from "formik";
import {FormField} from "../../FormField/FormField";
import {Button} from "@mui/material";
import {updateAccount} from "../../../redux/Login/thunks";
import {AnyAction} from "redux";
import editValidationSchema from "./validator";
import Box from "@mui/material/Box";
import style from './editModal.module.css'
import {updateAccountType} from "../../../redux/CommonDataTypes/types";


type EditModalType = {
    onCloseHandler: () => void
    name: string
    extra_details: string
    skills: string
    profession: string
    details: string
}


export const EditModal: React.FC<EditModalType> = ({
                                                       onCloseHandler, name, extra_details,
                                                       skills, profession, details
                                                   }) => {

    const dispatch = useDispatch()

    const initialValues = {
        name: name, extra_details: extra_details, skills: skills, profession: profession, details: details
    }

    const submitHandler = async (values: updateAccountType, setSubmitting: (status: boolean) => void) => {
        await dispatch(updateAccount(values) as unknown as AnyAction)
        setSubmitting(false)
        onCloseHandler()
    }

    return <Formik
        initialValues={initialValues}
        validationSchema={editValidationSchema}
        onSubmit={(values, {setSubmitting}) => submitHandler(values, setSubmitting)}>
        {
            ({isSubmitting, values, errors, setFieldValue}) => {

                return <Form>
                    <FormField name={'name'} label={'Name'} error={errors.name}
                               value={values.name} setValue={setFieldValue} color={'text'}/>

                    <FormField name={'extra_details'} label={'Extra Details'} error={errors.extra_details}
                               value={values.extra_details} setValue={setFieldValue} color={'text'}/>

                    <FormField name={'skills'} label={'Skills'} error={errors.skills}
                               value={values.skills} setValue={setFieldValue} color={'text'}/>

                    <FormField name={'profession'} label={'Profession'} error={errors.profession}
                               value={values.profession} setValue={setFieldValue} color={'text'}/>

                    <FormField name={'details'} label={'Details'} error={errors.details}
                               value={values.details} setValue={setFieldValue} color={'text'}/>
                    <Box className={style.buttonContainer}>
                        <Button color='secondary'
                                variant="contained"
                                onClick={onCloseHandler}
                                disabled={isSubmitting}>
                            Cancel
                        </Button>
                        <Button type="submit"
                                color='secondary'
                                variant="contained"
                                disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Box>

                </Form>
            }}
    </Formik>

}