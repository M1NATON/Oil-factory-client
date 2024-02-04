import React from 'react';

const Footer = () => {
    return (
        <div className='w-full flex'>
            <div className='w-[50%] bg-gray-100 p-2 flex justify-around'>
                <div className='w-[50%]'>
                    <div className='phone'><a href="tel:+777777777777">+777777777777</a></div>
                    <p className='text-[14px]'>Солнечная, 17/1 <br/>
                        с. Нежинка, Оренбургский район, Оренбургская область</p>
                    <div className='mt-[75px]'><a href="#"><span className='bg-amber-300 px-6 py-2'>Напишите нам</span></a>
                    </div>
                </div>
                <div>
                    <h1 className='uppercase'>РЕКВИЗИТЫ</h1>
                    <p>
                        <p className='text-red-500 font-[700]'>ООО “AGROMIR”</p>
                        <span>
                            ИНН/КПП 2313016108 / 231301001, <br/>
                            ОГРН 1022302295751, <br/>
                            ОКПО 53430143
                        </span>
                    </p>
                </div>
            </div>

            <div className='w-[50%] bg-gray-50 p-2 flex justify-around'>
                <div className='w-[50%]'>
                    <div className='uppercase text-[24px] font-normal'>ОТДЕЛ ПРОДАЖ</div>
                    <div className='text-[14px] text-[#696969]'>
                        <p>+7 900 293-18-89</p>
                        <p>+7 900 289-63-69</p>
                    </div>

                </div>
                <div className='font-normal text-[14px]'>

                    <h1 className='uppercase'>ЖМЫХ И ЗАКУПКИ</h1>
                    <div className='mb-[20px]'>
                        <p className='text-red-500 uppercase font-[700]'>РЕАЛИЗАЦИЯ ЖМЫХА</p>
                        <p className='text-[14px] text-[#696969]'>+7 918 448-52-60</p>
                    </div>

                    <div className='mb-[20px]'>
                        <p className='text-red-500 uppercase font-[700]'>ЗАКУПКА СЕМЯН</p>
                        <p className='text-[14px] text-[#696969]'>7 918 481-02-77</p>
                        <p className='text-[14px] text-[#696969]'>+7 918 448-52-60</p>
                    </div>

                    <div className='mb-[20px]'>
                        <p className='text-red-500 uppercase w-[200px] font-[700]'>ЗАКУПКА МАСЛА НЕ РАФИНИРОВАННОГО, ЖИРНЫХ КИСЛОТ,
                            CОАПСТОКИ РАСТИТЕЛЬНЫХ МАСЕЛ</p>
                        <p className='text-[14px] text-[#696969]'>+7 918 481-02-77</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;