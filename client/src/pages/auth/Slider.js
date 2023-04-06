import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import images from "../../assets/images";

function Slider() {
    return (
        <div className="min-h-full w-full rounded-xl">
            <Carousel
                autoPlay
                autoFocus
                infiniteLoop
                interval={6000}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                transitionTime={4000}
            >
                <div>
                    <Image
                        className="rounded-xl object-contain"
                        alt="auth-hero"
                        src={images.authBg1}
                    />
                </div>
                <div>
                    <Image
                        className="rounded-xl object-contain"
                        alt="auth-hero"
                        src={images.authBg2}
                    />
                </div>
                <div>
                    <Image
                        className="rounded-xl object-contain"
                        alt="auth-hero"
                        src={images.authBg3}
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default Slider;
