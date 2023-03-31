import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import FormInput from "../../components/Inputs/FormInput";

const companyInputFields = {
    companyName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    zip: "",
    address: "",
};
const contactInputFields = {
    name: "",
    email: "",
    phone: "",
};
const loginInputFields = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const companyFiledSchema = Yup.object({
    companyName: Yup.string().required("Please enter a company name"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Filed is required"),
    country: Yup.string().required("Filed is required"),
    city: Yup.string().required("Filed is required"),
    zip: Yup.string().required("Filed is required"),
    address: Yup.string().required("Filed is required"),
});

function Register() {
    const [companyFields, setCompanyFields] = useState(companyInputFields);
    const [contactFields, setContactFields] = useState(contactInputFields);
    const [loginFields, setLoginFields] = useState(loginInputFields);
    const { companyName, email, phone, country, city, zip, address } = companyInputFields;

    const [page, setPage] = useState(1);
    const formTitles = ["company", "contact", "login"];

    function handelChange(e) {
        const { name, value } = e.target;
        setCompanyFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    console.log(companyFields);

    return (
        <section>
            <div className="flex justify-center">
                <Formik
                    initialValues={{
                        companyName,
                        email,
                        phone,
                        country,
                        city,
                        zip,
                        address,
                    }}
                    validationSchema={companyFiledSchema}
                    enableReinitialize
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {() => (
                        <Form className="grid w-[600px] grid-cols-2">
                            <FormInput
                                onChange={handelChange}
                                type="text"
                                placeholder="company Name"
                                name="companyName"
                            />
                            <FormInput
                                onChange={handelChange}
                                type="text"
                                placeholder="Email"
                                name="email"
                            />
                            <FormInput
                                onChange={handelChange}
                                type="text"
                                placeholder="Phone"
                                name="phone"
                            />
                            <FormInput
                                onChange={handelChange}
                                type="text"
                                placeholder="Country"
                                name="country"
                            />
                            <FormInput
                                onChange={handelChange}
                                type="text"
                                placeholder="City"
                                name="city"
                            />
                            <FormInput
                                onChange={handelChange}
                                type="text"
                                placeholder="Zip/Postal Code"
                                name="zip"
                            />
                            <textarea
                                onChange={handelChange}
                                className="col-span-2"
                                type="text"
                                placeholder="Address"
                                name="address"
                            />
                            <button className="col-span-2" type="submit">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}

export default Register;
