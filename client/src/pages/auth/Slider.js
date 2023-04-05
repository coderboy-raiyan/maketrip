import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import images from "../../assets/images";

function Slider() {
    return (
        <div className="mr-auto block h-full w-[500px] rounded-lg">
            <Carousel
                autoPlay
                autoFocus
                infiniteLoop
                interval={4000}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
            >
                <div>
                    <Image
                        className="rounded-lg object-contain"
                        alt="auth-hero"
                        src={images.authBg1}
                    />
                </div>
                <div>
                    <Image
                        className="rounded-lg object-contain"
                        alt="auth-hero"
                        src={images.authBg2}
                    />
                </div>
                <div>
                    <Image
                        className="rounded-lg object-contain"
                        alt="auth-hero"
                        src={images.authBg3}
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default Slider;
