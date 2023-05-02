import React, { useState, useEffect } from "react";
import img1 from "../../Component/Images/recipe1.png";
import img2 from "../../Component/Images/res2.png";
import img3 from "../../Component/Images/res3.png"
import img4 from "../../Component/Images/res4.png";
import img5 from "../../Component/Images/res5.jpg";
import img6 from "../../Component/Images/res6.jpg";
import img7 from "../../Component/Images/res7.jpg";
import img8 from "../../Component/Images/res8.jpg";
import img9 from "../../Component/Images/res9.jpg";
import img10 from "../../Component/Images/res10.jpg";
import img14 from "../../Component/Images/res14.jpeg";

function Header() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [img1, img14, img3, img4, img5, img6, img7, img8, img9, img10, img2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(
                (currentImage) => (currentImage + 1) % images.length
            );
        }, 2000);
        return () => clearInterval(interval);
    }, [currentImage, images.length]);

    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 min-h-screen flex flex-wrap justify-center items-center">

            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center items-start pr-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ps-32">
                    Welcome to Kitchen Zen
                </h2>
                <p className="text-white text-base md:text-lg lg:text-xl mb-8 ps-32">
                    This website is all about finding your inner peace in the kitchen. Explore our collection of delicious and nutritious recipes that will help you create balanced meals with ease. From quick and easy weeknight dinners to indulgent desserts, we have something for every taste and occasion. Try our recipes today and start your journey towards Kitchen Zen!
                    <p className="mt-3">Get ready to impress your dinner guests with our delicious and easy-to-follow chef recipes. From appetizers to desserts, we've got you covered.</p>
                </p>

                <button className="bg-white text-purple-600 py-2 px-4 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 ms-32">
                    Learn More
                </button>
            </div>

            <div className="w-full md:w-1/2 flex flex-wrap justify-center items-center mt-4">
                <div className="space-y-2">
                <img
                    src={images[currentImage]}
                    alt="Header Image"
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-80 lg:h-64 object-cover rounded shadow-lg mx-2 my-1"
                />
                <img
                    src={images[(currentImage + 1) % images.length]}
                    alt="Header Image"
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-80 lg:h-64 object-cover rounded shadow-lg mx-2 my-1"
                />
                </div>
                <div className="space-y-2">
                <img
                    src={images[(currentImage + 2) % images.length]}
                    alt="Header Image"
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-80 lg:h-64 object-cover rounded shadow-lg mx-2 my-1"
                />
                <img
                    src={images[(currentImage +
                        3) % images.length]}
                    alt="Header Image"
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-80 lg:h-64 object-cover rounded shadow-lg mx-2 my-1"
                />
                </div>
            </div>
        </div>
    );
}

export default Header;
