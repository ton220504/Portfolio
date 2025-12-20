import React from 'react'
import ChromaGrid from '../hook/ChromaGrid/ChromaGrid';
import GradientText from '../hook/GradientText/GradientText';

const items = [
    {
        image: 'https://i.pravatar.cc/300?img=8',
        title: 'Fastify-and-ReactJS',
        subtitle: 'ReactJS, Fastify',
        handle: '@ton220504',
        borderColor: '#4F46E5',
        gradient: 'linear-gradient(145deg, #4F46E5, #000)',
        url: 'https://github.com/ton220504/Fastify-and-ReactJS'
    },
    {
        image: 'https://i.pravatar.cc/300?img=3',
        title: 'BaoCaoLTWe2',
        subtitle: 'ReactJS, Java',
        handle: '@ton220504',
        borderColor: '#F59E0B',
        gradient: 'linear-gradient(165deg, #F59E0B, #000)',
        url: 'https://github.com/ton220504/BaoCaoLTWe2'
    },
    {
        image: 'https://i.pravatar.cc/300?img=16',
        title: 'DoAn_Web',
        subtitle: 'ReactJS, NodeJS',
        handle: '@ton220504',
        borderColor: '#EF4444',
        gradient: 'linear-gradient(195deg, #EF4444, #000)',
        url: 'https://github.com/ton220504/DoAn_Web'
    },
    {
        image: 'https://i.pravatar.cc/300?img=25',
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
        <div className='min-h-screen  bg-black text-white'>
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