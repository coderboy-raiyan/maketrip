import { useState } from "react";
import * as Yup from "yup";

import LoginRegistrationLayout from "@/components/Layouts/LoginRegistrationLayout";
import CompanyInfo from "./CompanyInfo";

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
    const { companyName, email, phone, country, city, zip, address } = companyFields;

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
        <LoginRegistrationLayout>
            {/* Form */}
            <div className="h-full rounded-lg bg-white p-10 shadow-lg">
                <h3 className="mb-2 text-center text-2xl font-semibold text-[var(--black)]">
                    Signup & get started!
                </h3>
                <p className="mb-4 text-center text-sm text-[var(--gray)]">
                    Start your my Partner journey in just 3 simple steps.
                </p>

                <CompanyInfo
                    companyName={companyName}
                    email={email}
                    phone={phone}
                    country={country}
                    city={city}
                    zip={zip}
                    address={address}
                    companyFiledSchema={companyFiledSchema}
                    handelChange={handelChange}
                />
            </div>
        </LoginRegistrationLayout>
    );
}

export default Register;
