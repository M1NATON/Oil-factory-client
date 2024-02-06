import React, {useEffect} from 'react';
import Authorization from "../components/Authorization";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";
import UserAccount from "../components/UserAccount";


const DashboardPage = () => {

    const {isAuth} = useTypeSelector(state => state.user)
    const { auth} = useAction()


    useEffect(() => {
        auth()
    }, []);
    return (
        <div className='mb-[250px]'>
            <h1 className='text-center text-3xl mt-10 mb-20'>Личный кабинет</h1>
            {
                isAuth ? <UserAccount/> : <Authorization/>
            }

        </div>
    );
};

export default DashboardPage;