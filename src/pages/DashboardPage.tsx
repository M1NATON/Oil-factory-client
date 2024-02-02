import React from 'react';
import Authorization from "../components/Authorization";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";


const DashboardPage = () => {

    const {isAuth} = useTypeSelector(state => state.user)
    const {logout} = useAction()
    const btnExit = () => {
        logout()
    }
    console.log(isAuth)
    return (
        <div>
            <h1 className='text-center text-3xl mt-10 mb-20'>Личный кабинет</h1>
            {
                isAuth ? (<button onClick={btnExit}>Выйти</button>) : <Authorization/>
            }

        </div>
    );
};

export default DashboardPage;