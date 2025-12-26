import React from 'react'
import ElectricBorder from '../hook/ElectricBorder/ElectricBorder';
import HituImage from '../../public/images/HITU.png';
import Misumi from '../../public/images/misumi.png';



const CareerTimeline = () => {

    const timeline = [

        {
            year: "06/2025-12/2025",
            title: "Sai Gon Precision Company",
            image: Misumi,
            desc: "React, Tailwind, UI/UX",
            side: "left"
        },
        {
            year: "11/2024-02/2025",
            title: "Fullstack Developer",
            image: HituImage,
            desc: "NodeJS, MongoDB, REST API",
            side: "right"
        },
        {
            year: "09/2022-12/2025",
            title: "Ho Chi Minh Industry and Trade College",
            image: HituImage,
            desc: "Xây dựng sản phẩm thực tế",
            side: "left"
        }
    ];



    return (
        <div className="flex justify-center bg-black ">
            {/* KHÔNG relative */}
            <div className="w-full max-w-4xl py-10 ">

                {/* CHỈ THẰNG NÀY relative */}
                <div className="relative">

                    {/* Line giữa */}
                    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-sky-500 -translate-x-1/2" />

                    {timeline.map((item, i) => (
                        <div key={i} className="relative mb-20">

                            {/* Dot */}
                            <div className="absolute left-1/2 top-2 w-5 h-5 bg-sky-400 rounded-full -translate-x-1/2 z-10" />

                            {/* Year */}
                            <div className="absolute left-1/2 -top-10 text-white font-bold -translate-x-1/2">
                                {item.year}
                            </div>

                            {/* Box */}

                            <div
                                className={`w-96 p-5 rounded-xl
                                    ${item.side === "left"
                                        ? "mr-auto bg-black text-white"
                                        : "ml-auto bg-black text-white"
                                    }`}
                            >

                                <h3 className="font-bold text-lg">{item.title}</h3>
                                {/* <img
                                    src={item.image}
                                    loading="lazy"
                                    alt="Logo"
                                    className="mt-2 w-9 h-9 object-contain"
                                /> */}

                                <p className="text-sm mt-2">{item.desc}</p>



                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>

    );
}

export default CareerTimeline