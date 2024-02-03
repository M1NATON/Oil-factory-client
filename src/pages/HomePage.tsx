import React from 'react';
// @ts-ignore
import oil from '../assets/home-page/Oil.png'
// @ts-ignore
import logo from '../assets/header/logo.png'// @ts-ignore
import back from '../assets/home-page/headerBack.png'
// @ts-ignore
import icon1 from '../assets/home-page/icon1.png'
// @ts-ignore
import icon2 from '../assets/home-page/icon2.png'
// @ts-ignore
import icon3 from '../assets/home-page/icon3.png'


// @ts-ignore
import item1 from '../assets/home-page/item1.png'
// @ts-ignore
import item2 from '../assets/home-page/item2.png'
// @ts-ignore
import item3 from '../assets/home-page/item3.png'
// @ts-ignore
import item4 from '../assets/home-page/item4.png'


// @ts-ignore
import i1 from '../assets/home-page/i.png'
// @ts-ignore
import i2 from '../assets/home-page/i-1.png'
// @ts-ignore
import i3 from '../assets/home-page/i-2.png'
// @ts-ignore
import i4 from '../assets/home-page/i-3.png'

const HomePage = () => {
    return (
        <div>
            <div className='flex justify-between mt-[65px] mb-[100px]'>
                <div>
                    <img src={oil} alt="" className='w-[450px]'/>
                </div>
                <img src={back} alt="" className='absolute z-[-1] top-[280px]'/>
                <div className='w-[700px]'>
                    <div className='flex items-center  mx-auto w-[550px] justify-between font-bold mb-[60px]'>
                        <div className=''>
                            <img src={logo} className='w-[150px]' alt=""/>
                        </div>
                        <div className='w-[320px] leading-7 uppercase'>
                            <h1 className='text-[36px] '>Маслозавод</h1>
                            <p className='text-[26px]'>город Оренбург</p>
                            <p className='text-[16px] leading-4'>Производитель подсолнечного
                                масла в Оренбургской области</p>
                        </div>
                    </div>
                    <div className='mb-[73px]'>
                        <p className='text-white text-[17px]'>Подсолнечное масло, изготовленное маслозаводом ООО
                            «AGROMIR» из
                            города Кропоткина Краснодарского края вы можете приобрести в России,
                            странах СНГ и в странах дальнего зарубежья.
                            Наша продукция продается под торговыми марками «Оренбурское
                            отборное», «AGROMIR».
                            Производим фритюрное масло.</p>
                    </div>
                    <p className='bg-yellow-300 h-[2px] mb-[35px]'></p>
                    <div className='leading-4 text-white text-[14px] flex justify-between'>
                        <div className='w-[210px] h-[45px] flex justify-between items-center'>
                            <img src={icon1} alt="" className=''/>
                            <p className=' w-[145px] '>На заводе внедрена
                                собственная система
                                качества и контроля</p>
                        </div>
                        <div className='w-[210px] h-[45px] flex justify-between items-center'>
                            <img src={icon2} alt="" className=''/>
                            <p className=' w-[145px] '>Производим подсолнечное
                                масло высшего сорта по
                                ГОСТ 1129-2013</p>
                        </div>
                        <div className='w-[210px] h-[45px] flex justify-between items-center'>
                            <img src={icon3} alt="" className=''/>
                            <p className=' w-[145px] '>Продукция
                                сертифицирована
                                в СДС «Халяль»</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[1150px] mb-[150px]'>
                <h1 className='text-[36px] uppercase font-bold'>Преимущества нашего масла</h1>
                <p className='text-[14px] text-[#696969] uppercase mb-[30px]'>Почему покупатели выбирают именно наши масла</p>

                <div className='text-white flex gap-0 justify-center'>


                    <div className='relative w-[287px] h-[307px]'>
                        <img src={item2} alt="" className='absolute z-[-2] w-[287px] h-[307px] top-0 left-0'/>
                        <p className='w-[287px] bottom-0 h-[120px]  absolute bg-black opacity-75 z-[-1]'></p>
                        <div className='flex gap-[20px] w-[200px] mt-[170px] p-[30px]'>
                            <img src={i2} alt="" className='w-[35px] h-[35px]'/>
                            <div>
                                <h1 className='text-[20px] uppercase'>Сырье</h1>
                                <p className='text-[14px] leading-3'>Экологически чистые
                                    семена подсолнечника,</p>
                            </div>
                        </div>
                    </div>


                    <div className='relative w-[287px] h-[307px]'>
                        <img src={item3} alt="" className='absolute z-[-2] w-[287px] h-[307px] top-0 left-0'/>
                        <p className='w-[287px] bottom-0 h-[120px]  absolute bg-black opacity-75 z-[-1]'></p>
                        <div className='flex gap-[20px] w-[200px] mt-[170px] p-[30px]'>
                            <img src={i3} alt="" className='w-[35px] h-[35px]'/>
                            <div>
                                <h1 className='text-[20px] uppercase'>Сырье</h1>
                                <p className='text-[14px] leading-3'>Экологически чистые
                                    семена подсолнечника,</p>
                            </div>
                        </div>
                    </div>


                    <div className='relative w-[287px] h-[307px]'>
                        <img src={item4} alt="" className='absolute z-[-2] w-[287px] h-[307px] top-0 left-0'/>
                        <p className='w-[287px] bottom-0 h-[120px]  absolute bg-black opacity-75 z-[-1]'></p>
                        <div className='flex gap-[20px] w-[200px] mt-[170px] p-[30px]'>
                            <img src={i4} alt="" className='w-[35px] h-[35px]'/>
                            <div>
                                <h1 className='text-[20px] uppercase'>Сырье</h1>
                                <p className='text-[14px] leading-3'>Экологически чистые
                                    семена подсолнечника,</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HomePage;



