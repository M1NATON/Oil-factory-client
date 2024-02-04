import React, {useEffect} from 'react';
import Authorization from "../components/Authorization";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";


const DashboardPage = () => {

    const {isAuth} = useTypeSelector(state => state.user)
    const {logout, auth} = useAction()
    const btnExit = () => {
        logout()
    }

    useEffect(() => {
        auth()
        console.log('auth')
    }, []);
    console.log(isAuth)
    return (
        <div className='mb-[250px]'>
            <h1 className='text-center text-3xl mt-10 mb-20'>Личный кабинет</h1>
            {
                isAuth ? (<button onClick={btnExit}>Выйти</button>) : <Authorization/>
            }

        </div>
    );
};

export default DashboardPage;