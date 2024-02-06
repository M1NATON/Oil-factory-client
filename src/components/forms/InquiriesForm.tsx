import React, {useState} from 'react';
import {IInquiries} from "../../type/inquiries";
import {useAction} from "../../hooks/useAction";
import {isValidPhoneNumber, parsePhoneNumber} from "libphonenumber-js";
import { InputMask } from 'primereact/inputmask';
const InquiriesForm = () => {

    const inputStyle = 'py-2 px-2 outline-0 w-[47%] mb-5'

    const [lastName, setLastName] = useState('')
    const [nameOrganization, setNameOrganization] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const {createInquiries} = useAction()


    const convertPhoneNumber = (inp: string) => {
        if (isValidPhoneNumber(inp, 'RU')) {
            const phoneNumber = parsePhoneNumber(inp, 'RU')
            return phoneNumber.formatNational()
        }
        return inp
    }

    const btnCreateInquiries = (e: React.FormEvent) => {
        e.preventDefault()
        const DataInquiries: IInquiries = {
            lastName: lastName,
            nameOfOrganization: nameOrganization,
            email: email,
            number: number,
            text: text
        }
        setLastName('')
        setNameOrganization('')
        setNumber('')
        setEmail('')
        setText('')
        createInquiries(DataInquiries)
    }



    return (
        <form>
            <div className='flex flex-wrap justify-between mb-10'>
                <input
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    placeholder='Фамилия'
                    className={inputStyle}
                />
                <input
                    onChange={(e) => setNameOrganization(e.target.value)}
                    value={nameOrganization}
                    type="text"
                    placeholder='Название вашей организации'
                    className={inputStyle}
                />
                <InputMask
                    // @ts-ignore
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    type="text"
                    mask='+7 999 999 99 99'
                    placeholder='+7 999 999 99 99'
                    className={inputStyle}
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder='E-mail'
                    className={inputStyle}
                />
                <textarea onChange={(e) => setText(e.target.value)} value={text} name="" id="" cols={65} rows={10} className='p-4 outline-0' placeholder='Ваше сообщение'
                          style={{resize: 'none'}}></textarea>
            </div>
            <div className='flex justify-end'>
                <button
                    className='py-2 w-[45%] px-12 text-black text-[14px] font-[700] hover:text-gray-500 transition-all'
                    onClick={btnCreateInquiries}
                    style={{
                        background: ' linear-gradient(99.81deg, #fff3b4 0%, #efe164 33.01%, #ffca64 67.37%)',
                        textShadow: '0px 1px 0 #fff3b4'
                    }}
                >
                    Отправить
                </button>
            </div>
        </form>
    );
};

export default InquiriesForm;