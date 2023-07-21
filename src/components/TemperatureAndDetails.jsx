import React from 'react'
import { UilCloudRain, UilTemperature, UilWind, UilTear, UilSun,UilSunset,UilArrowUp,UilArrowDown } from '@iconscout/react-unicons'
function TemperatureAndDetails() {
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
                <p>Mostly Cloudy</p>
            </div>

            <div className='flex flex-row items-center justify-between text-white py-3'>
                {/* <img
                src=''
                alt=''
                className='w-20'/> */}
                <UilCloudRain size={50}/>
                <p className='text-5xl '> 31° </p>
                <div className='flex flex-col space-y-2' >

                    <div className='flex font-light text-sm items-center jusitfy-center'>
                        <UilTemperature size={18} className='mr-1' />
                        Real fell:
                        <span className='font-medium ml-1'>32°</span>
                    </div>

                    <div className='flex font-light text-sm items-center jusitfy-center'>
                        <UilTear size={18} className='mr-1' />
                        Humidity:
                        <span className='font-medium ml-1'>43%</span>
                    </div>

                    <div className='flex font-light text-sm items-center jusitfy-center'>
                        <UilWind size={18} className='mr-1' />
                        Wind:
                        <span className='font-medium ml-1'>3km/h</span>
                    </div>

                </div>
            </div>

            <div className='flex flex-row items-center jusity-center space-x-2 text-white text-sm py-3'>

                <UilSun/>
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>6:45 AM</span>
                </p>
                <p className='font-light'>|</p>


                <UilSunset/>
                <p className='font-light'>
                    Set: <span className='font-medium ml-1'>6:45 PM</span>
                </p>
                <p className='font-light'>|</p>


                <UilArrowUp/>
                <p className='font-light'>
                    High: <span className='font-medium ml-1'>45°</span>
                </p>
                <p className='font-light'>|</p>

                <UilArrowDown/>
                <p className='font-light'>
                    Low: <span className='font-medium ml-1'>40°</span>
                </p>
                <p className='font-light'>|</p>


            </div>
        </div>
    )
}

export default TemperatureAndDetails