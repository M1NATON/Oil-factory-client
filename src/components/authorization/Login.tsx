import React from 'react';
import {Button, TextField} from "@mui/material";

const Login = () => {
    return (
        <div className='flex-wrap w-[250px] mx-auto text-center'>
            <div className='mb-2'>
                <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
            </div>
            <div>
                <TextField id="outlined-basic" label="Пароль" variant="outlined" size="small"/>
            </div>
            <button>
                <span
                    className='text-[14px] text-gray-400 hover:text-gray-500 transition-all'>Зарегистрироваться!</span>
            </button>
            <div className='mx-auto flex'>
                <Button variant="contained">Войти</Button>
            </div>
        </div>
    );
};

export default Login;