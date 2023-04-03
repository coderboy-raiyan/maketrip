import { Form, Formik } from "formik";
import Button from "../../components/Buttons/Button";
import FormInput from "../../components/Inputs/FormInput";

function LoginInfo({ username, email, password, confirmPassword, loginFieldSchema, handelChange }) {
    return (
        <Formik
            initialValues={{
                username,
                email,
                password,
                confirmPassword,
            }}
            validationSchema={loginFieldSchema}
            enableReinitialize
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ errors, touched, values, handleBlur }) => (
                <Form className="grid grid-cols-2 gap-x-4 gap-y-5">
                    <label htmlFor="username" className="relative flex flex-col">
                        <FormInput
                            value={values.username}
                            onBlur={handleBlur}
                            id="username"
                            onChange={handelChange}
                            type="text"
                            placeholder="Username"
                            name="username"
                            styles={
                                errors.username &&
                                touched.username &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.username && touched.username && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.username}
                            </span>
                        )}
                    </label>
                    <label htmlFor="email" className="relative flex flex-col">
                        <FormInput
                            id="email"
                            onBlur={handleBlur}
                            onChange={handelChange}
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            styles={
                                errors.email &&
                                touched.email &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.email && touched.email && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.email}
                            </span>
                        )}
                    </label>
                    <label htmlFor="password" className="relative flex flex-col">
                        <FormInput
                            id="password"
                            onBlur={handleBlur}
                            onChange={handelChange}
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            styles={
                                errors.password &&
                                touched.password &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.password && touched.password && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.password}
                            </span>
                        )}
                    </label>
                    <label htmlFor="confirmPassword" className="relative flex flex-col">
                        <FormInput
                            id="confirmPassword"
                            onBlur={handleBlur}
                            onChange={handelChange}
                            type="password"
                            placeholder="Confirm password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            styles={
                                errors.confirmPassword &&
                                touched.confirmPassword &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.confirmPassword}
                            </span>
                        )}
                    </label>

                    <Button
                        type="submit"
                        className="col-span-2 mt-6 rounded py-3 text-sm uppercase text-white"
                    >
                        Submit Application
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default LoginInfo;
