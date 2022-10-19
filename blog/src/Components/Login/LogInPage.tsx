import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {setLogIn} from "../../redux/reducers/loginReducer";
import {AnyAction} from "redux";
import {AppStateType} from "../../redux/store";
import {Button, TextField} from "@mui/material";
import {ChangeEvent} from "react";
import style from "./loginPage.module.css";


export const LogInPage = () => {

    const dispatch = useDispatch()
    const error = useSelector((state: AppStateType) => state.auth.error)

    const signInHandler = () => {
        alert("Sorry registration is not ready yet")
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                Sing In
            </div>
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={async (values, {setSubmitting}) => {
                await dispatch(setLogIn(values.email, values.password) as unknown as AnyAction)
                setSubmitting(false);
            }}>
            {({isSubmitting, values, setFieldValue}) => (
                <Form>
                    <div className={style.form}>
                        <div>
                            <Field name="email" component={TextField}
                                   id="email" label="Email"
                                   required
                                   fullWidth
                                   error={!!error}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                       setFieldValue('email', e.currentTarget.value)
                                   }}
                                   value={values.email}
                                   variant="outlined"/>
                        </div>
                        <div>
                            <Field name="password" component={TextField}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                       setFieldValue('password', e.currentTarget.value)
                                   }}
                                   value={values.password}
                                   id="password"
                                   required
                                   fullWidth
                                   error={!!error}
                                   type="password"
                                   label="Password"
                                   inputProps={{maxLength: 10}}
                                   variant="outlined"/>
                        </div>
                        <div>
                            {
                                error && <div>{error}</div>
                            }
                        </div>

                        <div onClick={signInHandler} style={{cursor: "pointer"}}>
                            Don't have account ? Sign it for free
                        </div>

                        <div>
                            <Button type="submit"
                                    className={style.submit}
                                    variant="contained"
                                    disabled={isSubmitting}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
        </div>
    );
}

