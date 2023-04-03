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
    full_name: Yup.string().required("Please enter a company name"),
    contactEmail: Yup.string().email("Invalid email").required("Email is required"),
    contactPhone: Yup.string().required("Filed is required"),
});
export const LoginFiledSchema = Yup.object({
    username: Yup.string().required("Please enter a company name"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Filed is required"),
    confirmPassword: Yup.string().required("Filed is required"),
});
