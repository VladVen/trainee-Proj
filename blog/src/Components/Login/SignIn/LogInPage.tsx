import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {setLogIn} from "../../../redux/reducers/authReducer";
import {AnyAction} from "redux";
import {AppStateType} from "../../../redux/store";
import {Button, TextField} from "@mui/material";
import {ChangeEvent} from "react";
import style from "./loginPage.module.css";
import {Navigate, NavLink} from "react-router-dom";


export const LogInPage = () => {

    const dispatch = useDispatch()
    const error = useSelector((state: AppStateType) => state.auth.error)
    const authData = useSelector((state: AppStateType) => state.auth.authData)

    if (authData) {
        return <Navigate to={'/blog'}/>
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

                            <div>
                                {
                                    error && <div>{error}</div>
                                }
                            </div>

                            <div>
                                <NavLink to={'/register'} className={style.link}>Don't have account ? Sign it for
                                    free</NavLink>
                            </div>

                            <div>
                                <Button type="submit"
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

