import Button from "@/components/Buttons/Button";
import FormInput from "@/components/Inputs/FormInput";
import { Form, Formik } from "formik";

function ContactInfo({
    full_name,
    contactEmail,
    contactPhone,
    contactFiledSchema,
    handelChange,
    steps,
    currentStepIndex,
    back,
    next,
}) {
    return (
        <Formik
            initialValues={{
                full_name,
                contactEmail,
                contactPhone,
            }}
            validationSchema={contactFiledSchema}
            enableReinitialize
            onSubmit={(values) => {
                if (values) {
                    next();
                }
            }}
        >
            {({ errors, touched, values, handleBlur }) => (
                <Form className="flex flex-col space-y-5">
                    <label htmlFor="full_name" className="relative flex flex-col">
                        <FormInput
                            value={values.full_name}
                            onBlur={handleBlur}
                            id="full_name"
                            onChange={handelChange}
                            type="text"
                            placeholder="Authorized person name"
                            name="full_name"
                            styles={
                                errors.full_name &&
                                touched.full_name &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.full_name && touched.full_name && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.full_name}
                            </span>
                        )}
                    </label>
                    <label htmlFor="contactEmail" className="relative flex flex-col">
                        <FormInput
                            id="contactEmail"
                            onBlur={handleBlur}
                            onChange={handelChange}
                            type="email"
                            placeholder="Email"
                            name="contactEmail"
                            value={values.contactEmail}
                            styles={
                                errors.contactEmail &&
                                touched.contactEmail &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.contactEmail && touched.contactEmail && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.contactEmail}
                            </span>
                        )}
                    </label>
                    <label htmlFor="contactPhone" className="relative flex flex-col">
                        <FormInput
                            id="contactPhone"
                            onBlur={handleBlur}
                            onChange={handelChange}
                            type="text"
                            placeholder="Phone"
                            name="contactPhone"
                            value={values.contactPhone}
                            styles={
                                errors.contactPhone &&
                                touched.contactPhone &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.contactPhone && touched.contactPhone && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.contactPhone}
                            </span>
                        )}
                    </label>
                    <div className="col-span-2 flex flex-col space-y-4">
                        <Button
                            type="submit"
                            className="col-span-2 mt-6 rounded py-3 text-sm uppercase text-white"
                        >
                            Continue
                        </Button>
                        {currentStepIndex > 0 && currentStepIndex < steps.length - 1 && (
                            <Button onClick={() => back()} type="button">
                                Previous
                            </Button>
                        )}
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default ContactInfo;
