import React from 'react'
import ElectricBorder from '../hook/ElectricBorder/ElectricBorder'

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
                        <div className="h-80 md:h-96 flex items-center justify-center">
                            <p className="opacity-80 text-center">
                                Front end
                            </p>
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
                        <div className="h-80 md:h-96 flex items-center justify-center">
                            <p className="opacity-80 text-center">
                                Back end
                            </p>
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
                        <div className="h-80 md:h-96 flex items-center justify-center">
                            <p className="opacity-80 text-center">
                                Other tools
                            </p>
                        </div>
                    </ElectricBorder>
                </div>

            </div>

        </div>
    )
}

export default Skill