import React, {useEffect, useState} from 'react';
import {Alert, Button, TextField} from "@mui/material";
import {useAction} from "../hooks/useAction";
import {useTypeSelector} from "../hooks/useTypeSelector";

const Authorization = () => {
    const [loginChek, setLoginChek] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const {login, registration, auth} = useAction()
    const {error, success} = useTypeSelector(state => state.user)


    useEffect(() => {
        auth()
    }, []);



    const btnLogin = async (e: React.FormEvent) => {
        e.preventDefault()


        if (!email || !password) {
            alert('Введите данные')
            setEmail('')
            setPassword('')
        } else {
            await login(email, password)
            setLoginChek(true)
            auth()
            setEmail('')
            setPassword('')
        }
    }
    const btnRegistration = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!lastName || !firstName || !email || !password) {
            alert('Введите данные')
            setLastName('')
            setFirstName('')
            setEmail('')
            setPassword('')
        } else {
            await registration(lastName, firstName, email, password)
            setLoginChek(true)
            setEmail('')
            setPassword('')
        }
    }

    return (
        <div>
            {
                loginChek ? (
                        <div
                            className='flex-wrap w-[250px] mx-auto text-center border-amber-400 border-2 px-4 py-8 rounded-2xl'>
                            <h1 className='text-center mb-5'>Войти</h1>
                            <div className='mb-2'>
                                <TextField id="outlined-basic" label="Email" variant="outlined" size="small"
                                           onChange={(e) => setEmail(e.target.value)} value={email}/>
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Пароль" variant="outlined" size="small"
                                           onChange={(e) => setPassword(e.target.value)} value={password}/>
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
                                               size="small" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                                </div>
                                <div className='mb-2'>
                                    <TextField id="outlined-basic" label="Имя" variant="outlined" size="small"
                                               onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                                </div>
                                <div className='mb-2'>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" size="small"
                                               onChange={(e) => setEmail(e.target.value)} value={email}/>
                                </div>
                                <div>
                                    <TextField id="outlined-basic" label="Пароль" variant="outlined" size="small"
                                               onChange={(e) => setPassword(e.target.value)} value={password}/>
                                </div>
                            </div>

                            <button onClick={() => setLoginChek(true)} className='flex justify-start mb-10'>
                                    <span
                                        className='text-[14px] text-gray-400 hover:text-gray-500 transition-all'>Войти!</span>
                            </button>
                            <div className='flex justify-start'>
                                <Button variant="contained" onClick={btnRegistration}>Зарегистрироваться</Button>
                            </div>


                        </div>
                    )
            }
            {
                error && <p className='text-center text-red-500 '>{error}</p>
            }
            {
                success && <p className='text-center text-green-500'>{success}</p>
            }
        </div>
    );
};

export default Authorization;