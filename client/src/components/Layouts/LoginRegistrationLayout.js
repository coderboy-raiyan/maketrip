import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import images from "../../assets/images";
import Slider from "../../pages/auth/Slider";
import styles from "../../styles/LoginRegistraion.module.css";
import Button from "../Buttons/Button";

export default function LoginRegistrationLayout({ children }) {
    const [btnInUse, setBtnInUse] = useState("Login");
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === "/auth/login") {
            setBtnInUse("Register");
        } else if (router.pathname === "/auth/register") {
            setBtnInUse("Login");
        }
    });

    function handleRountClick() {
        if (btnInUse === "Login") {
            router.push("/auth/login");
        } else if (btnInUse === "Register") {
            router.push("/auth/register");
        }
    }

    return (
        <header className={`${styles.primaryBgClr} pb-28`}>
            {/* navbar section start   */}
            <section className="primary-container">
                <nav className="flex items-center justify-between gap-8 py-8">
                    <div className="">
                        <Image className="max-w-full" src={images.logo} alt="Logo" />
                    </div>
                    <div className="flex items-center">
                        <p className="me-7 hidden text-[#656B82] md:block">Already a member?</p>
                        <Button onClick={() => handleRountClick()}>
                            <p>{btnInUse}</p>
                        </Button>
                    </div>
                </nav>
            </section>
            {/* navbar section end  */}
            {/* form and carousel section start  */}
            <section className="primary-container my-14">
                <div className="gap grid gap-x-20 gap-y-20 lg:grid-cols-2">
                    <div>
                        <Slider />
                    </div>
                    <div>{children}</div>
                </div>
            </section>
            {/* form and carousel section end  */}
        </header>
    );
}
