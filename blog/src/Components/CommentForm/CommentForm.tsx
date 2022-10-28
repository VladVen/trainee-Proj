import {Form, Formik, FormikValues} from "formik";
import {Avatar, Button} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import {FormField} from "../FormField/FormField";
import style from './commentForm.module.css'
import {commonCommentsType} from "../../redux/CommonDataTypes/types";
import ReplyIcon from '@mui/icons-material/Reply';
import {useDispatch} from "react-redux";
import {addNewComment} from "../../redux/Posts/thunks";
import {AnyAction} from "redux";
import addCommentValidationSchema from "./validator";


type setSubmittingType = (status: boolean) => void

type CommentFormType = {
    onCloseHandler: () => void
    reply: commonCommentsType | null
    setReply: (reply: null) => void
    postId: string
}

export const CommentForm: React.FC<CommentFormType> = ({onCloseHandler, reply, setReply, postId}) => {

    const dispatch = useDispatch()

    const onSubmitHandler = async (values: FormikValues, setSubmitting: setSubmittingType,
                                   resetForm: any) => {
        await dispatch(addNewComment(postId, values.comment, reply?._id || null) as unknown as AnyAction)
        setReply(null)
        resetForm()
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{comment: ''}}
            validationSchema={addCommentValidationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => onSubmitHandler(values, setSubmitting, resetForm)}>

            {({isSubmitting, values, errors, setFieldValue}) => (
                <Form>
                    {
                        reply && <Box>
                            <Box className={style.replyContainer}>
                                <Box className={style.reply}>
                                    Reply <ReplyIcon/>
                                </Box>
                                <Button
                                    color={'secondary'}
                                    onClick={() => setReply(null)}>
                                    Cancel
                                </Button>
                            </Box>
                            <Box className={style.comment}>
                                <Avatar/>
                                <div>
                                    {reply.text}
                                </div>

                            </Box>

                        </Box>
                    }
                    <Box>
                        <FormField name={'comment'} label={'Comment'} error={errors.comment}
                                   multiline
                                   color={'text'}
                                   value={values.comment} setValue={setFieldValue}/>

                        <Box className={style.btnContainer}>
                            <Button color={"secondary"}
                                    variant={'contained'}
                                    onClick={onCloseHandler}>
                                Close
                            </Button>

                            <Button type="submit"
                                    color={"secondary"}
                                    variant="contained"
                                    disabled={isSubmitting || !values.comment}>
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
    );
}

