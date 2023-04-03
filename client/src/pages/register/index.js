import Image from "next/image";
import { useState } from "react";

import images from "../../assets/images";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import CompanyInfo from "./CompanyInfo";
import ContactInfo from "./ContactInfo";
import { companyFiledSchema, contactFiledSchema } from "./validationSchemas";

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

    console.log({ companyFields });
    console.log({ contactFields });

    return (
        <section
            style={{ background: "linear-gradient(180deg, #A7D1DF 0%, #DDF2F9 100%" }}
            className="py-20"
        >
            <div className="display-size grid grid-cols-2">
                <div className="">
                    <Image
                        className="mr-auto block w-[500px] rounded-lg"
                        alt="auth-hero"
                        src={images.authBg1}
                    />
                </div>
                {/* Form */}
                <div className="rounded-lg bg-white p-10 shadow-lg">
                    <h3 className="mb-2 text-center text-2xl font-semibold text-[var(--black)]">
                        Signup & get started!
                    </h3>
                    <p className="mb-4 text-center text-sm text-[var(--gray)]">
                        Start your my Partner journey in just 3 simple steps.
                    </p>

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
                    />

                    <ContactInfo
                        contactEmail={contactEmail}
                        contactPhone={contactPhone}
                        full_name={full_name}
                        contactFiledSchema={contactFiledSchema}
                        handelChange={handelContactFiledChange}
                    />
                </div>
            </div>
        </section>
    );
}

export default Register;
