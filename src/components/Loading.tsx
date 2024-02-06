import React from 'react';
import {CircularProgress} from "@mui/material";

const Loading = () => {
    return (
        <div className='text-center text-3xl mb-[35%]'>
            <h1 className='mb-10'>Загрузка</h1>
            <CircularProgress />
        </div>
    );
};

export default Loading;