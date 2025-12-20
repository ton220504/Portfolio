import React from 'react'
import ChromaGrid from '../hook/ChromaGrid/ChromaGrid';
import GradientText from '../hook/GradientText/GradientText';

import image_1 from '../../public/images/Screenshot_1.png'
import image_2 from '../../public/images/Screenshot_2.png'
import image_3 from '../../public/images/Screenshot_3.png'
import image_4 from '../../public/images/Screenshot_4.png'


const items = [
    {
        image: image_2,
        title: 'Fastify-and-ReactJS',
        subtitle: 'ReactJS, Fastify',
        handle: '@ton220504',
        borderColor: '#4F46E5',
        gradient: 'linear-gradient(145deg, #4F46E5, #000)',
        url: 'https://github.com/ton220504/Fastify-and-ReactJS'
    },
    {
        image: image_4,
        title: 'BaoCaoLTWe2',
        subtitle: 'ReactJS, Java',
        handle: '@ton220504',
        borderColor: '#F59E0B',
        gradient: 'linear-gradient(165deg, #F59E0B, #000)',
        url: 'https://github.com/ton220504/BaoCaoLTWe2'
    },
    {
        image: image_3,
        title: 'DoAn_Web',
        subtitle: 'ReactJS, NodeJS',
        handle: '@ton220504',
        borderColor: '#EF4444',
        gradient: 'linear-gradient(195deg, #EF4444, #000)',
        url: 'https://github.com/ton220504/DoAn_Web'
    },
    {
        image: image_1,
        title: 'ASP.NET',
        subtitle: 'ASP.NET Core, C#',
        handle: '@ton220504',
        borderColor: '#8B5CF6',
        gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
        url: 'https://github.com/ton220504/ASP.NET'
    }
];

const Repository = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="text-4xl flex justify-center items-center font-serif"
            >
                My Repository
            </GradientText>
            <div >
                <ChromaGrid
                    items={items}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                />
            </div>
        </div>
    )
}

export default Repository