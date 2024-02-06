import React, {useContext, useEffect, useState} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";
import Loading from "./Loading";
import {ModalContext} from "../context/ModalContext";
import Modal from "./Modal";
import OrderForm from "./forms/OrderForm";

const UserAccount = () => {

    const {user} = useTypeSelector(state => state.user)

    const {logout, auth, getProduct} = useAction()
    const [loading, setLoading] = useState(true);
    const {lastName, firstName} = user
    const {modal, close, open} = useContext(ModalContext)
    const btnExit = () => {
        logout()
    }
    useEffect(() => {
        const fetchData = async () => {
            await auth();
            setLoading(false);
        };

        fetchData();
    }, []);


    const btnOpenModal = () => open()
    const btnCloseModal = () => close()


    if (loading) {
        return <Loading/>;
    }
    return (
        <div>

            <div>Добро пожаловать {lastName} {firstName}</div>
            <div className='flex justify-around'>
                <button onClick={btnExit} className='px-4 py-2 bg-red-500 text-white'>Выйти</button>
                <button onClick={btnOpenModal} className='px-4 py-2 bg-green-500 text-white'>Оформить заказ</button>
            </div>

            {
                modal && <Modal title='Оформление заказа' onClose={btnCloseModal}>
                    <OrderForm/>
                </Modal>
            }
        </div>
    );
};

export default UserAccount;