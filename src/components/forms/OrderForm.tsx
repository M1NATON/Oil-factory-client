import React, { useContext, useEffect, useState } from 'react';
import { useAction } from "../../hooks/useAction";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { ModalContext } from "../../context/ModalContext";

const OrderForm = () => {
    const { product } = useTypeSelector(state => state.products);
    const { user } = useTypeSelector(state => state.user);
    const { getProduct, addOrder } = useAction();
    const [order, setOrder] = useState<{ product_id: number; quantity: number }[]>([]);
    const [next, setNext] = useState(true);
    const [addedProducts, setAddedProducts] = useState<{ [key: number]: boolean }>({});
    const [address, setAddress] = useState('')
    const [sumPrice, setSumPrice] = useState<number>(0)
    const { close } = useContext(ModalContext)

    useEffect(() => {
        getProduct();
    }, []);

    const handleAddProduct = (product_id: number) => {
        const existingItemIndex = order.findIndex(item => item.product_id === product_id);
        if (existingItemIndex !== -1) {
            const updatedOrder = [...order];
            updatedOrder[existingItemIndex].quantity += 1;
            setOrder(updatedOrder);
        } else {
            setOrder([...order, { product_id, quantity: 1 }]);
        }
        setAddedProducts(prevState => ({ ...prevState, [product_id]: true }));
    };

    const handleRemoveProduct = (product_id: number) => {
        const updatedOrder = order.filter(item => item.product_id !== product_id);
        setOrder(updatedOrder);
        setAddedProducts(prevState => ({ ...prevState, [product_id]: false }));
    };

    const btnForm = async (e: React.FormEvent) => {
        e.preventDefault()
        if (order.length !== 0 || !address) {
            await addOrder(user.id, address, order)
            setAddress('')
            setOrder([])
            close()
        } else {
            console.log('ERROR')
        }
    }

    const handleQuantityChange = (product_id: number, quantity: number) => {
        const updatedOrder = order.map(item => {
            if (item.product_id === product_id) {
                return { ...item, quantity };
            }
            return item;
        });
        setOrder(updatedOrder);
    };

    useEffect(() => {
        let total = 0;
        order.forEach((item) => {
            const productInfo = product.find((p) => p.product_id === item.product_id);
            if (productInfo) {
                total += productInfo.price * item.quantity;
            }
        });
        setSumPrice(total);
    }, [order, product]);

    return (
        <div>
            {next ? (
                <div>
                    <h1 className='text-center'>Выберите товар</h1>
                    <div className='flex justify-around mb-[50px]'>
                        {product.map(item => (
                            <div key={item.product_id} className='border-2 p-2'>
                                <div className='mb-[30px]'>
                                    <h1>{item.name}</h1>
                                    <p>{item.price} руб/1шт</p>
                                </div>

                                {addedProducts[item.product_id] ? (
                                    <button className='bg-red-400 w-[150px] text-white px-4 py-2'
                                            onClick={() => handleRemoveProduct(item.product_id)}>Убрать товар</button>
                                ) : (
                                    <button className='bg-green-400 w-[150px] text-white px-4 py-2'
                                            onClick={() => handleAddProduct(item.product_id)}>Добавить товар</button>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className='text-end'>
                        <button className='bg-green-400 text-white px-4 py-2'
                                onClick={() => setNext(false)}>Продолжить
                        </button>
                    </div>
                </div>
            ) : (
                <div>

                    {
                        order.length === 0 ? (<div>
                                <h1 className='text-center text-3xl text-red-500 mb-[30px]'>Вы не выбрали товар!</h1>
                                <button className='bg-red-400 w-[40%]  text-white px-2 py-1'
                                        onClick={() => setNext(true)}>Назад
                                </button>
                            </div>)
                            : (
                                <div>
                                    {order.map((item, index) => (
                                        <div key={index} className='items-center mb-[20px]'>
                                            <p>{product.map((i: any) => i.product_id === item.product_id && <div>
                                                <p>{i.name} </p>
                                                <p>Сумма {(i.price * item.quantity).toFixed(2)} руб</p>
                                            </div>)}
                                            </p>
                                            <input
                                                type='number'
                                                className='border-2 px-2 py-1'
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(item.product_id, +e.target.value)}
                                                placeholder='Выберите количество'
                                            />
                                            <button className='bg-red-400 text-white p-2'
                                                    onClick={() => handleRemoveProduct(item.product_id)}>X
                                            </button>
                                        </div>
                                    ))}
                                    <div >
                                        <label>Адрес доставки:</label>
                                        <input
                                            type="text"
                                            className='border-2 px-2 py-1 w-full'
                                            placeholder='Введите адрес доставки'
                                            onChange={(e) => setAddress(e.target.value)}
                                            value={address}
                                        />
                                    </div>
                                    <div className='mb-[30px]'>
                                        <p className='text-gray-500'>Общая сумма заказа: {sumPrice.toFixed(2)} руб</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <button className='bg-red-400 w-[40%]  text-white px-2 py-1'
                                                onClick={() => setNext(true)}>Назад
                                        </button>
                                        <button className='bg-green-400 w-[40%]  text-white px-4 py-2'
                                                onClick={btnForm}>Оформить заказ
                                        </button>
                                    </div>

                                </div>
                            )
                    }

                </div>
            )}
        </div>
    );
};

export default OrderForm;
