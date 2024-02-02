import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import Login from "./authorization/Login";
import {useAction} from "../hooks/useAction";

const Authorization = () => {
    const [loginChek, setLoginChek] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useAction()
    const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const btnLogin = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(email, password)
        login(email, password)
    }

    return (
        <div>
            {
                loginChek ? (
                        <div
                            className='flex-wrap w-[250px] mx-auto text-center border-amber-400 border-2 px-4 py-8 rounded-2xl'>
                            <h1 className='text-center mb-5'>Войти</h1>
                            <div className='mb-2'>
                                <TextField id="outlined-basic" label="Email" variant="outlined" size="small" onChange={emailChange} value={email}/>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Пароль" variant="outlined" size="small" onChange={passwordChange} value={password}/>
                            </div>
                            <button onClick={() => setLoginChek(false)} className='flex justify-start mb-10'>
                                <span
                                    className='text-[14px] text-gray-400 hover:text-gray-500 transition-all'>Зарегистрироваться!</span>
                            </button>
                            <div className='mx-auto flex'>
                                <Button variant="contained" onClick={btnLogin}>Войти</Button>
                            </div>
                        </div>
                    )
                    : (
                        <div className='flex-wrap w-[250px] mx-auto border-amber-400 border-2 px-4 py-8 rounded-2xl'>
                            <h1 className='text-center mb-5'>Зарегистрироваться</h1>
                            <div className=''>
                                <div className='mb-2 mx-auto'>
                                    <TextField id="outlined-basic" label="Фамилия" variant="outlined"
                                               size="small"/>
                                </div>
                                <div className='mb-2'>
                                    <TextField id="outlined-basic" label="Имя" variant="outlined" size="small"/>
                                </div>
                                <div className='mb-2'>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
                                </div>
                                <div>
                                    <TextField id="outlined-basic" label="Пароль" variant="outlined" size="small"/>
                                </div>
                            </div>

                            <button onClick={() => setLoginChek(true)} className='flex justify-start mb-10'>
                                    <span
                                        className='text-[14px] text-gray-400 hover:text-gray-500 transition-all'>Войти!</span>
                            </button>
                            <div className='flex justify-start'>
                                <Button variant="contained">Зарегистрироваться</Button>
                            </div>


                        </div>
                    )
            }


        </div>
    );
};

export default Authorization;