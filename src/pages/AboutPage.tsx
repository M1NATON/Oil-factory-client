import React from 'react';

// @ts-ignore
import headerBack from '../assets/Production/header-back.png'

// @ts-ignore
import back from '../assets/Production/back.png'

// @ts-ignore
import main from '../assets/Production/main.png'

const AboutPage = () => {
    return (
        <div className='mb-[100px]'>
            <div className='w-full mx-auto relative mb-[150px] '>
                <h1 className='z-10 h-[120px] left-[30%] top-[25%] absolute text-[35px] font-bold text-white text-center'>О
                    КОМПАНИИ «AGROMIR»</h1>
                <img src={headerBack} alt="" className=' z-[1]'/>
            </div>
            <div className='w-full flex leading-5 mb-[50px] relative py-[50px]'>
                <img src={back} alt="" className='absolute z-[-1] bottom-0'/>
                <img src={main} alt="" className='absolute bottom-0 right-[50%]'/>

                <div className='w-[50%]  flex justify-end items-end relative'>
                    <p className='w-[235px] z-10 text-red-500 text-[18px] font-[500]'>Продукция маслозавода ООО
                        «AGROMIR» хорошо известна в Оренбургской области, в России и за ее пределами</p>
                </div>
                <div className='w-[50%]  p-4'>
                    <div className='text-[20px] text-black font-[500]'>
                        <p className='mb-[15px]'>Мы производим подсолнечное масло высшего сорта по ГОСТу 1129-2013.</p>
                        <p>Наша продукция продается под торговыми марками «AGROMIR», «Оренбургское отборное».</p>
                    </div>
                    <p className='w-full h-[2px] bg-gray-400 my-[30px]'></p>
                    <div className='text-[16px]  text-black'>
                        <p className='mb-[15px]'> Маслозавод "AGROMIR" работает с 2000 года.</p>
                        <p>Компания занимает лидирующие позиции в Оренбургской области по производству подсолнечного
                            масла
                            рафинированного дезодорированного вымороженного высший сорт ГОСТ 1129-2013 и относится к
                            числу самых современных переработчиков семян подсолнечника, а также прессованного жмыха.</p>
                    </div>
                </div>
            </div>
            <div className='text-[16px] font-[400]'>
                <p className='mb-[15px]'>В 2019 году маслозавод приступил к промышленному производству бутилированного подсолнечного масла под
                    торговыми марками «Краснодарское Отборное», «Живой янтарь» и «Южный полюс». Сегодня мощности
                    предприятия составляют выпуск 3 млн. литровых бутылок в месяц.</p>
                <p>Маслозавод размещен в городе Кропоткин Краснодарского края, обладает собственной инфраструктурой,
                    включающей элеваторный комплекс емкостью хранения 30 тысяч тонн семян подсолнечника,
                    веяльно-рушильным и сушильным отделениями, автоматизированной весовой станцией, котельной,
                    современной аттестованной лабораторией, которая производит полный анализ семян, т.е. определяет
                    зачетный вес, согласно нормативов по показателям.</p>
            </div>
        </div>
    );
};

export default AboutPage;