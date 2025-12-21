import React from 'react'
import ElectricBorder from '../hook/ElectricBorder/ElectricBorder'
import html from '../../public/images/html-5.png'
import css from '../../public/images/css-3.png'
import js from '../../public/images/js.png'
import reactjs from '../../public/images/reactjs.png'
import nextjs from '../../public/images/nextjs.png'
import tailwind from '../../public/images/tailwind.png'
import bootstrap from '../../public/images/bootstrap.png'
import ts from '../../public/images/typescript.png'
import nodejs from '../../public/images/nodejs.png'
import express from '../../public/images/express.png'
import mssql from '../../public/images/sql-server.png'
import mysql from '../../public/images/mySQL.png'
import csharp from '../../public/images/c-sharp.png'
import net from '../../public/images/dotNet-core.png'
import fastify from '../../public/images/fastify.png'
import oracle from '../../public/images/oracle.png'
import git from '../../public/images/git.png'
import github from '../../public/images/github.png'
import gitlab from '../../public/images/gitlab.png'
import masterialui from '../../public/images/material-UI.png'
import vercel from '../../public/images/vercel.png'
import stackoverflow from '../../public/images/stack-overflow.png'
import npm from '../../public/images/npm.png'
import nginx from '../../public/images/NGINX.png'
import vscode from '../../public/images/vscode.png'
import visualstudio from '../../public/images/visualstudio.png'
import docker from '../../public/images/docker.png'
import postman from '../../public/images/postman.png'
import GradientText from '../hook/GradientText/GradientText'


const Skill = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-black text-white'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4'>
                <div className='w-full md:w-[350px] mx-auto'>
                    <ElectricBorder
                        color="#7df9ff"
                        speed={1}
                        chaos={0.5}
                        thickness={2}
                        style={{ borderRadius: 16 }}
                    >
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="text-2xl font-serif pt-5"
                        >
                            Frontend Skills
                        </GradientText>
                        <div className="h-80 md:h-96 flex items-center justify-center">
                            <div className='grid grid-cols-3 gap-4'>
                                <img src={html} alt="HTML5" className="w-15 h-15 mx-2" />
                                <img src={css} alt="CSS3" className="w-15 h-15 mx-2" />
                                <img src={js} alt="JavaScript" className="w-15 h-15 mx-2" />
                                <img src={ts} alt="TypeScript" className="w-15 h-15 mx-2" />
                                <img src={reactjs} alt="ReactJS" className="w-15 h-15 mx-2" />
                                <img src={nextjs} alt="NextJS" className="w-15 h-15 mx-2" />
                                <img src={tailwind} alt="TailwindCSS" className="w-15 h-15 mx-2" />
                                <img src={bootstrap} alt="Bootstrap" className="w-15 h-15 mx-2" />
                            </div>
                        </div>
                    </ElectricBorder>
                </div>
                <div className='w-full md:w-[350px] mx-auto'>
                    <ElectricBorder
                        color="#7df9ff"
                        speed={1}
                        chaos={0.5}
                        thickness={2}
                        style={{ borderRadius: 16 }}
                    >
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="text-2xl font-serif pt-5"
                        >
                            Backend+Database Skills
                        </GradientText>
                        <div className="h-80 md:h-96 flex items-center justify-center">
                            <div className='grid grid-cols-3 gap-4'>
                                <img src={nodejs} alt="NodeJS" className="w-15 h-15 mx-2" />
                                <img src={express} alt="ExpressJS" className="w-15 h-15 mx-2 bg-white" />
                                <img src={csharp} alt="C#" className="w-15 h-15 mx-2" />
                                <img src={net} alt=".NET Core" className="w-15 h-15 mx-2" />
                                <img src={mssql} alt="MS SQL Server" className="w-15 h-15 mx-2 bg-white" />
                                <img src={mysql} alt="MySQL" className="w-15 h-15 mx-2" />
                                <img src={fastify} alt="Fastify" className="w-15 h-15 mx-2 bg-white" />
                                <img src={oracle} alt="Oracle" className="w-15 h-15 mx-2 " />
                            </div>
                        </div>
                    </ElectricBorder>
                </div>
                <div className='w-full md:w-[350px] mx-auto'>
                    <ElectricBorder
                        color="#7df9ff"
                        speed={1}
                        chaos={0.5}
                        thickness={2}
                        style={{ borderRadius: 16 }}
                    >
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="text-2xl font-serif pt-5"
                        >
                            Others Skills
                        </GradientText>
                        <div className="h-80 md:h-96 flex items-center justify-center">
                            <div className='grid grid-cols-3 gap-4'>
                                <img src={git} alt="Git" className="w-15 h-15 mx-2" />
                                <img src={github} alt="GitHub" className="w-15 h-15 mx-2 bg-white" />
                                <img src={gitlab} alt="GitLab" className="w-15 h-15 mx-2" />
                                <img src={masterialui} alt="Material UI" className="w-15 h-15 mx-2" />
                                <img src={vercel} alt="Vercel" className="w-15 h-15 mx-2 bg-white" />
                                <img src={stackoverflow} alt="Stack Overflow" className="w-15 h-15 mx-2" />
                                <img src={npm} alt="NPM" className="w-15 h-15 mx-2" />
                                <img src={nginx} alt="NGINX" className="w-15 h-15 mx-2" />
                                <img src={vscode} alt="VS Code" className="w-15 h-15 mx-2" />
                                <img src={visualstudio} alt="Visual Studio" className="w-15 h-15 mx-2" />
                                <img src={docker} alt="Docker" className="w-15 h-15 mx-2" />
                                <img src={postman} alt="Postman" className="w-15 h-15 mx-2" />
                            </div>
                        </div>
                    </ElectricBorder>
                </div>

            </div>

        </div>
    )
}

export default Skill