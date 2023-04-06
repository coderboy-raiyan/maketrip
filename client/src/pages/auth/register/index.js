import { useState } from "react";

import LoginRegistrationLayout from "@/components/Layouts/LoginRegistrationLayout";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import CompanyInfo from "./CompanyInfo";
import ContactInfo from "./ContactInfo";
import LoginInfo from "./LoginInfo";
import { LoginFieldSchema, companyFiledSchema, contactFiledSchema } from "./validationSchemas";

const initialCompanyInputFields = {
    companyName: "",
    companyEmail: "",
    phone: "",
    country: "",
    city: "",
    zip: "",
    address: "",
};
const initialContactInputFields = {
    full_name: "",
    contactEmail: "",
    contactPhone: "",
};
const initialLoginInputFields = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
};

function Register() {
    const [companyFields, setCompanyFields] = useState(initialCompanyInputFields);
    const [contactFields, setContactFields] = useState(initialContactInputFields);
    const [loginFields, setLoginFields] = useState(initialLoginInputFields);
    const { companyName, companyEmail, phone, country, city, zip, address } = companyFields;
    const { contactEmail, contactPhone, full_name } = contactFields;
    const { username, email, password, confirmPassword } = loginFields;

    const { steps, next, back, currentStepIndex } = useMultiStepForm([
        "company",
        "contact",
        "login",
    ]);

    function handelCompanyFiledChange(e) {
        const { name, value } = e.target;
        setCompanyFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    function handelContactFiledChange(e) {
        const { name, value } = e.target;
        setContactFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    function handelLoginFiledChange(e) {
        const { name, value } = e.target;
        setLoginFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    // Submit form
    async function handleRegisterForm() {
        try {
            console.log(companyFields);
            console.log(contactFields);
            console.log(loginFields);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <LoginRegistrationLayout>
            {/* Form */}
            <div className="rounded-lg bg-white p-10 shadow-lg">
                <h3 className="mb-2 text-center text-2xl font-semibold text-[var(--black)]">
                    Signup & get started!
                </h3>
                <p className="mb-4 text-center text-sm text-[var(--gray)]">
                    Start your my Partner journey in just 3 simple steps.
                </p>

                {steps[currentStepIndex] === "company" && (
                    <CompanyInfo
                        companyName={companyName}
                        companyEmail={companyEmail}
                        phone={phone}
                        country={country}
                        city={city}
                        zip={zip}
                        address={address}
                        companyFiledSchema={companyFiledSchema}
                        handelChange={handelCompanyFiledChange}
                        next={next}
                        back={back}
                        steps={steps}
                        currentStepIndex={currentStepIndex}
                    />
                )}

                {steps[currentStepIndex] === "contact" && (
                    <ContactInfo
                        contactEmail={contactEmail}
                        contactPhone={contactPhone}
                        full_name={full_name}
                        contactFiledSchema={contactFiledSchema}
                        handelChange={handelContactFiledChange}
                        next={next}
                        back={back}
                        steps={steps}
                        currentStepIndex={currentStepIndex}
                    />
                )}

                {steps[currentStepIndex] === "login" && (
                    <LoginInfo
                        email={email}
                        username={username}
                        password={password}
                        confirmPassword={confirmPassword}
                        loginFieldSchema={LoginFieldSchema}
                        handelChange={handelLoginFiledChange}
                        back={back}
                        steps={steps}
                        currentStepIndex={currentStepIndex}
                        handleRegisterForm={handleRegisterForm}
                    />
                )}
            </div>
        </LoginRegistrationLayout>
    );
}

export default Register;
