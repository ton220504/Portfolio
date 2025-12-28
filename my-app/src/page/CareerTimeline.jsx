import React from 'react'
import ElectricBorder from '../hook/ElectricBorder/ElectricBorder';
import HituImage from '../../public/images/logoHitu.png';
import Misumi from '../../public/images/misumi1.webp';



const CareerTimeline = () => {

    const timeline = [

        {
            year: "06/2025 - 12/2025",
            title: "Sai Gon Precision Company",
            image: Misumi,
            desc: "Is a intern at Sai Gon Precision Company, working on maintaining and developing internal management software using ReactJS, NodeJS, ASP.NET, MySQL.",
            side: "left"
        },
        {
            year: "03/2025 - 06/2025",
            title: "Fullstack Developer",
            image: HituImage,
            desc: "Built a  E-commerce Website using HTML, CSS, JavaScript, NodeJS, MySQL and framework ReactJS, Fastify.",
            side: "right"
        },
        {
            year: "09/2022 - 12/2025",
            title: "Ho Chi Minh Industry and Trade College",
            image: HituImage,
            desc: "Is a student at Ho Chi Minh Industry and Trade College, majoring in Information Technology.",
            side: "left"
        }
    ];



    return (
        <div className="flex justify-center bg-black ">
            <div className="w-full max-w-5xl py-10 ">
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
                                        ? "mr-auto bg-white text-black"
                                        : "ml-auto bg-white text-black"
                                    }`}
                            >
                                <div className='flex items-center justify-between'>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <img
                                        src={item.image}
                                        loading="lazy"
                                        alt="Logo"
                                        className=" w-20 h-10 object-contain "
                                    />
                                </div>
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