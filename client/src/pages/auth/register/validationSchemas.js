import * as Yup from "yup";

export const companyFiledSchema = Yup.object({
    companyName: Yup.string().required("Please enter a company name"),
    companyEmail: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Filed is required"),
    country: Yup.string().required("Filed is required"),
    city: Yup.string().required("Filed is required"),
    zip: Yup.string().required("Filed is required"),
    address: Yup.string().required("Filed is required"),
});
export const contactFiledSchema = Yup.object({
    full_name: Yup.string().required("Please enter a full name"),
    contactEmail: Yup.string().email("Invalid email").required("Email is required"),
    contactPhone: Yup.string().required("Enter your phone number"),
});
export const LoginFieldSchema = Yup.object({
    username: Yup.string().required("Please enter a username"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Enter a unique password"),
    confirmPassword: Yup.string().required("Enter confirm password"),
});
