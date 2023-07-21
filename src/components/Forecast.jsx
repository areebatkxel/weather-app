import React from 'react'
import { UilSun } from '@iconscout/react-unicons'
function Forecast({title}) {
    return (
        <div>
            <div className='flex items-center justify-start my-6'>
                <p className='text-white font-medium uppercase'> {title} </p>
            </div>
            <hr className='my-2' />

            <div className='flex flex-row items-center justify-between text-white '>
                <div className='flex flex-col items-center justify-center '>
                    <p className='font-light text-sm '> 4:30 PM</p>
                    {/* <img 
                    src=''
                    alt=''
                    className='w-12 my-1'/> */}
                    <UilSun className='w-12 my-1' />
                    <p className='font-medium'> 25°</p>
                </div>

                <div className='flex flex-col items-center justify-center '>
                    <p className='font-light text-sm '> 4:30 PM</p>
                    {/* <img 
                    src=''
                    alt=''
                    className='w-12 my-1'/> */}
                    <UilSun className='w-12 my-1' />
                    <p className='font-medium'> 25°</p>
                </div>

                <div className='flex flex-col items-center justify-center '>
                    <p className='font-light text-sm '> 4:30 PM</p>
                    {/* <img 
                    src=''
                    alt=''
                    className='w-12 my-1'/> */}
                    <UilSun className='w-12 my-1' />
                    <p className='font-medium'> 25°</p>
                </div>

                <div className='flex flex-col items-center justify-center '>
                    <p className='font-light text-sm '> 4:30 PM</p>
                    {/* <img 
                    src=''
                    alt=''
                    className='w-12 my-1'/> */}
                    <UilSun className='w-12 my-1' />
                    <p className='font-medium'> 25°</p>
                </div>

            </div>

        </div>
    )
}

export default Forecast