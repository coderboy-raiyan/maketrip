import Button from "@/components/Buttons/Button";
import FormInput from "@/components/Inputs/FormInput";
import { Form, Formik } from "formik";

function CompanyInfo({
    companyName,
    companyEmail,
    phone,
    country,
    city,
    zip,
    address,
    companyFiledSchema,
    handelChange,
    next,
    steps,
    currentStepIndex,
    back,
}) {
    return (
        <Formik
            initialValues={{
                companyName,
                companyEmail,
                phone,
                country,
                city,
                zip,
                address,
            }}
            validationSchema={companyFiledSchema}
            enableReinitialize
            onSubmit={(values) => {
                if (values) {
                    next();
                }
            }}
        >
            {({ errors, touched, values, handleBlur }) => (
                <Form className="grid grid-cols-2 gap-x-4 gap-y-5">
                    <label htmlFor="companyName" className="relative flex flex-col">
                        <FormInput
                            value={values.companyName}
                            onBlur={handleBlur}
                            id="companyName"
                            onChange={handelChange}
                            type="text"
                            placeholder="Company Name"
                            name="companyName"
                            styles={
                                errors.companyName &&
                                touched.companyName &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.companyName && touched.companyName && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.companyName}
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
                            name="companyEmail"
                            value={values.companyEmail}
                            styles={
                                errors.companyEmail &&
                                touched.companyEmail &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.companyEmail && touched.companyEmail && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.companyEmail}
                            </span>
                        )}
                    </label>
                    <label htmlFor="phone" className="relative flex flex-col">
                        <FormInput
                            id="phone"
                            onBlur={handleBlur}
                            onChange={handelChange}
                            type="text"
                            placeholder="Phone"
                            name="phone"
                            value={values.phone}
                            styles={
                                errors.phone &&
                                touched.phone &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.phone && touched.phone && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.phone}
                            </span>
                        )}
                    </label>
                    <label htmlFor="country" className="relative flex flex-col">
                        <FormInput
                            onBlur={handleBlur}
                            id="country"
                            onChange={handelChange}
                            type="text"
                            placeholder="Country"
                            name="country"
                            value={values.country}
                            styles={
                                errors.country &&
                                touched.country &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.country && touched.country && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.country}
                            </span>
                        )}
                    </label>
                    <label htmlFor="city" className="relative flex flex-col">
                        <FormInput
                            onBlur={handleBlur}
                            id="city"
                            onChange={handelChange}
                            type="text"
                            placeholder="City"
                            name="city"
                            value={values.city}
                            styles={
                                errors.city &&
                                touched.city &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.city && touched.city && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.city}
                            </span>
                        )}
                    </label>
                    <label htmlFor="zip" className="relative flex flex-col">
                        <FormInput
                            id="zip"
                            onBlur={handleBlur}
                            onChange={handelChange}
                            type="text"
                            placeholder="Zip/Postal Code"
                            name="zip"
                            value={values.zip}
                            styles={
                                errors.zip &&
                                touched.zip &&
                                "border-red-500 focus:border-red-500 border-2"
                            }
                        />
                        {errors.zip && touched.zip && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.zip}
                            </span>
                        )}
                    </label>
                    <label htmlFor="address" className="relative col-span-2 flex flex-col">
                        <textarea
                            id="address"
                            onBlur={handleBlur}
                            onChange={handelChange}
                            className={` w-full rounded-lg border-[#EAEAEA] py-3 text-[15px] placeholder:text-[15px] placeholder:text-[#B8B9BF] ${
                                errors.address &&
                                touched.address &&
                                "border-2 border-red-500 focus:border-red-500"
                            }`}
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={values.address}
                        />
                        {errors.address && touched.address && (
                            <span className="absolute -bottom-4 text-xs text-red-500">
                                {errors.address}
                            </span>
                        )}
                    </label>
                    {currentStepIndex > 0 && currentStepIndex < steps.length - 1 && (
                        <Button onClick={() => back()} type="button">
                            Previous
                        </Button>
                    )}
                    <Button
                        type="submit"
                        className="col-span-2 mt-6 rounded py-3 text-sm uppercase text-white"
                    >
                        Continue
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default CompanyInfo;
