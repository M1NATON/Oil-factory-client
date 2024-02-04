import React from 'react';
// @ts-ignore
import headerBack from '../assets/Production/header-back.png'

// @ts-ignore
import item1 from '../assets/ProductionMain/process/item1.png'

// @ts-ignore
import item2 from '../assets/ProductionMain/process/item2.png'

// @ts-ignore
import item3 from '../assets/ProductionMain/process/item3.png'

// @ts-ignore
import item4 from '../assets/ProductionMain/process/item4.png'

// @ts-ignore
import item5 from '../assets/ProductionMain/process/item5.png'

// @ts-ignore
import item6 from '../assets/ProductionMain/process/item6.png'

const ProductPage = () => {
    return (
        <div>
            <div className='w-full mx-auto relative mb-[50px] '>
                <h1 className='z-10 h-[120px] left-[40%] top-[25%] absolute text-[35px] font-bold text-white'>ПРОИЗВОДСТВО</h1>
                <img src={headerBack} alt="" className=' z-[1]'/>
            </div>

            <div className='mb-[150px]'>
                <h1 className='text-[36px] z-[3] uppercase font-normal'>ПРОИЗВОДСТВЕННЫЙ ПРОЦЕСС</h1>
                <p className='text-[14px] z-[3] text-[#696969] uppercase mb-[30px]'>НА МАСЛОЗАВОДЕ «AGROMIR»</p>

                <div className='w-full flex'>

                    <div className='w-[25%] relative '>
                        <img src={item1} alt="" className='-z-10'/>
                        <div className='absolute bottom-0 bg-amber-300 w-full h-[60%] z-30 p-[30px]' style={{
                            background: 'linear-gradient(180deg, #ffe164 0%, rgba(255, 255, 255, 0.62) 100%)',
                            backdropFilter: 'blur(9px)'
                        }}>
                            <h1 className='text-[20px] uppercase font-[500] mb-3'>ПРИЕМКА СЕМЯН</h1>
                            <p className='text-[14px] leading-4 font-[400]'>Семена подсолнечника попадают на завод
                                только после одобрения нашей собственной лаборатории. Вот почему у нас всегда
                                качественное исходное сырье.</p>
                        </div>
                    </div>


                    <div className='w-[25%] relative '>
                        <img src={item2} alt="" className='-z-10'/>
                        <div className='absolute bottom-0 bg-amber-300 w-full h-[60%] z-30 p-[30px]' style={{
                            background: 'linear-gradient(180deg, #ffe164 0%, rgba(255, 255, 255, 0.62) 100%)',
                            backdropFilter: 'blur(9px)'
                        }}>
                            <h1 className='text-[20px] uppercase font-[500] mb-3'>ОЧИСТКА И СУШКА</h1>
                            <p className='text-[14px] leading-4 font-[400]'>Очистка, сушка, обрушивание (разрушение)
                                кожуры семян и отделение её от ядра – следующий этап производственного процесса
                                подсолнечного масла. Потом семена измельчают. Полученную массу подвергают
                                гидротермической обработке и затем обжаривают.</p>
                        </div>
                    </div>


                    <div className='w-[25%] relative '>
                        <img src={item3} alt="" className='-z-10'/>
                        <div className='absolute bottom-0 bg-amber-300 w-full h-[60%] z-30 p-[30px]' style={{
                            background: 'linear-gradient(180deg, #ffe164 0%, rgba(255, 255, 255, 0.62) 100%)',
                            backdropFilter: 'blur(9px)'
                        }}>
                            <h1 className='text-[20px] uppercase font-[500] mb-3'>ПРЕССОВАНИЕ</h1>
                            <p className='text-[14px] leading-4 font-[400]'>Подготовленное семя перед извлечением масла
                                подогревают. Так масло сохраняет не только все свои полезные свойства, но и становится
                                более ароматным. Затем масло отстаивается, фильтруется, подвергается дальнейшей
                                переработке.</p>
                        </div>
                    </div>


                    <div className='w-[25%] relative '>
                        <img src={item4} alt="" className='-z-10'/>
                        <div className='absolute bottom-0 bg-amber-300 w-full h-[60%] z-30 p-[30px]' style={{
                            background: 'linear-gradient(180deg, #ffe164 0%, rgba(255, 255, 255, 0.62) 100%)',
                            backdropFilter: 'blur(9px)'
                        }}>
                            <h1 className='text-[20px] uppercase font-[500] mb-3'>ЖМЫХ</h1>
                            <p className='text-[14px] leading-4 font-[400]'>Полученный в процессе экстракции жмых
                                гранулируется и используется в сельском хозяйстве как высокобелковый концентрированный
                                корм для животных.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full px-[20px] py-[100px] flex gap-[30px]' style={{
                background: 'linear-gradient(180deg, #ffe164 0%, rgba(255, 255, 255, 0.62) 100%)',
                backdropFilter: ' blur(9px);'
            }}>
                <div className='w-[50%]'>
                    <div className='relative'>
                        <img src={item5} alt="" className='absolute right-0 bottom-0'/>
                    </div>
                    <h1 className='text-[20px] font-[500] uppercase'>РАФИНАЦИЯ</h1>
                    <p className='text-[14px] font-[400] leading-4'>На этом этапе производится сразу несколько операций.
                        Отстаивание, фильтрация и центрифугирование позволяют очистить подсолнечное масло от
                        механических примесей.
                        В процессе гидратации удаляются белковые и слизистые вещества.
                        На стадии нейтрализации удаляются свободные жирные кислоты, тяжелые металлы и пестициды.
                        На следующей стадии происходит выведение свободных жирных кислот и отбеливание масла.
                        Дезодорацией уничтожаются пахучие вещества, которые приводят к окислению.
                        Все эти стадии очистки масла от нежелательных примесей позволяют увеличить его срок
                        хранения. <br/> <br/>
                        Вымораживание позволяет очистить масло от воскообразных мутных веществ и придать ему
                        прозрачность. <br/> <br/>
                        Подсолнечное масло на нашем заводе проходит все этапы очистки.</p>
                </div>


                <div className='w-[50%]'>
                    <div className='relative'>
                        <img src={item6} alt="" className='absolute right-0 bottom-0'/>
                    </div>
                    <h1 className='text-[20px] font-[500] uppercase'>ФАСОВКА</h1>
                    <p className='text-[14px] font-[400] leading-4'>
                        У нас автоматизированная линия розлива подсолнечного масла высокой производительности.
                        Сначала заготовки из полиэтилентерефталата загружают в аппарат, который выдувает из них бутылки
                        для подсолнечного масла.
                        Готовые бутылки поступают на линию налива масла. После заполнения бутылки, она закрывается.
                        Здесь же на бутылки наклеивается этикетка и печатается дата производства. Заполнение бутылок
                        подсолнечным маслом контролируется в автоматическом режиме, позволяя до минимума снизить процент
                        брака. <br/><br/>
                        Наша линия исключает возможность попадания подсолнечного масла на внешнюю часть бутылки.
                        Благодаря чему гарантируется хороший товарный вид масла.<br/><br/>

                        Заполненные бутылки пакуются в коробки из гофрокартона.<br/><br/>

                        Готовые коробки размещаются на европоддонах и в таком виде передаются покупателям.<br/><br/>

                        Мы можем нанести на коробки и бутылки с подсолнечным маслом ваш логотип, если вы пожелаете.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ProductPage;