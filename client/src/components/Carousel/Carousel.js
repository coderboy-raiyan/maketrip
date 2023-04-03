import images from "@/assets/images";
import Image from "next/image";

export default function Carousel() {
    return <Image className="w-full rounded-xl" src={images.authBg1} alt="carousel image" />;
}
