import React from 'react';
// @ts-ignore
import headerBack from '../assets/Production/header-back.png'

const ContactPage = () => {

    const inputStyle = 'py-2 px-2 outline-0 w-[45%] mb-5'

    return (
        <div>
            <div className='w-full mx-auto relative mb-[100px] '>
                <h1 className='z-10 h-[120px] left-[40%] top-[25%] absolute text-[35px] font-bold text-white text-center'>КОНТАКТЫ</h1>
                <img src={headerBack} alt="" className=' z-[1]'/>
            </div>
            <div className='w-full flex gap-[30px]'>
                <div className='w-[50%]'>
                    <h1 className='text-[36px] z-[3] uppercase font-[500]'>РЕКВИЗИТЫ КОМПАНИИ</h1>
                    <p className='text-[14px] z-[3] text-[#696969] uppercase mb-[30px]'>ПОЛНЫЕ КОНТАКТНЫЕ ДАННЫЕ И
                        РЕКВИЗИТЫ
                        ЗАВОДА</p>
                    <div className='w-full'>
                        <div className=' p-2 flex w-full'>
                            <div className='w-[50%]'>
                                <div className='phone'><a href="tel:+777777777777">+777777777777</a></div>
                                <p className='text-[14px]'>Солнечная, 17/1 <br/>
                                    с. Нежинка, Оренбургский район, <br/>Оренбургская область</p>

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

                        <div className=' p-2 flex w-full'>
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
                                    <p className='text-red-500 uppercase font-[700]' >РЕАЛИЗАЦИЯ ЖМЫХА</p>
                                    <p className='text-[14px] text-[#696969]'>+7 918 448-52-60</p>
                                </div>

                                <div className='mb-[20px]'>
                                    <p className='text-red-500 uppercase w-[200px] font-[700]'>ЗАКУПКА МАСЛА НЕ РАФИНИРОВАННОГО,
                                        ЖИРНЫХ
                                        КИСЛОТ,
                                        CОАПСТОКИ РАСТИТЕЛЬНЫХ МАСЕЛ</p>
                                    <p className='text-[14px] text-[#696969]'>+7 918 481-02-77</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="w-[50%]">
                    <h1 className='text-[36px] z-[3] uppercase font-[500]'>НАПИШИТЕ НАМ</h1>
                    <p className='text-[14px] z-[3] text-[#696969] uppercase mb-[30px]'>ВЫ МОЖЕТЕ СВЯЗАТЬСЯ С НАМИ,
                        ПРОСТО ЗАПОЛНИВ ФОРМУ НИЖЕ</p>

                    <div className='w-full p-[30px]' style={{
                        background: 'linear-gradient(180deg, #ffe164 0%, rgba(255, 255, 255, 0.62) 100%)',
                        backdropFilter: ' blur(9px);'
                    }}>
                        <p className='text-red-500 uppercase font-[700]'>ОБРАТНАЯ СВЯЗЬ</p>
                        <p className='mb-5'>Пожалуйста, заполните все поля формы и отправьте нам свое сообщение.
                            Мы ответим вам в самое ближайшее время.
                        </p>


                        <form>
                            <div className='flex flex-wrap justify-between mb-10'>
                                <input type="text" placeholder='Имя' className={inputStyle}/>
                                <input type="text" placeholder='Название вашей организации' className={inputStyle}/>
                                <input type="number" placeholder='Телефон' className={inputStyle}/>
                                <input type="text" placeholder='E-mail' className={inputStyle}/>
                                <textarea name="" id="" cols={65} rows={10} className='p-4' placeholder='Ваше сообщение' style={{resize: 'none'}}></textarea>
                            </div>
                            <div className='flex justify-end'>
                                <button
                                    className='py-2 w-[45%] px-12 text-black text-[14px] font-[700]'
                                    style={{
                                        background:' linear-gradient(99.81deg, #fff3b4 0%, #efe164 33.01%, #ffca64 67.37%)',
                                        textShadow: '0px 1px 0 #fff3b4'
                                    }}
                                >
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default ContactPage;