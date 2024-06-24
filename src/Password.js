import React, { useState } from 'react'
import { LC, NC, SC, UC } from './Data/pass'

const Password = () => {
    let [uppercase, setuppercase] = useState(false)
    let [lowercase, setlowercase] = useState(false)
    let [symbol, setsymbol] = useState(false)
    let [number, setnumber] = useState(false)
    let [passwordlen, setpasswordlen] = useState(10)
    let [psss, setpass] = useState('')
    let createpassword = () => {
        let finalpass = ''
        let charser = ''
        if (uppercase || lowercase || symbol || number) {
            if (uppercase) charser += UC;
            if (lowercase) charser += LC;
            if (symbol) charser += SC;
            if (number) charser += NC
            for (let i = 0; i < passwordlen; i++) {
                finalpass += charser.charAt(Math.floor(Math.random() * charser.length))
                setpass(finalpass)
            }
        } else {
            alert("atlest select one opstion is must require")
        }

    }
    let copypass = () => {
        navigator.clipboard.writeText(psss)
    }

    return (
        <div>
            <div className='bg-blue-800 h-[100vh] w-full flex justify-center items-center'>
                <div className='bg-violet-800 h-[430px] w-[350px]'>
                    <h1 className='p-6 text-2xl font-serif font-bold'>Password Generator </h1>
                    <div className='flex items-center gap-1 p-3'>
                        <input type='text' readOnly className=' basis-[80%] ' value={psss}></input> <button className='bg-white text-black  basis-[20%]' onClick={copypass}>Copy</button>
                    </div>
                    <div className='flex  justify-between p-3'>
                        <label>Password length</label>
                        <input type='number' max={20} min={10} value={passwordlen} onChange={(event) => setpasswordlen(event.target.value)} className='w-14' ></input>

                    </div>
                    <div className='flex  justify-between p-3'>
                        <label>Upper Case</label>
                        <input type='checkbox' checked={uppercase} onChange={() => setuppercase(!uppercase)}></input>

                    </div>
                    <div className='flex  justify-between p-3'>
                        <label>Lower Case</label>
                        <input type='checkbox' checked={lowercase} onChange={() => setlowercase(!lowercase)}  ></input>

                    </div>
                    <div className='flex  justify-between p-3'>
                        <label>Symbol </label>
                        <input type='checkbox' checked={symbol} onChange={() => setsymbol(!symbol)}  ></input>

                    </div>
                    <div className='flex  justify-between p-3'>
                        <label>Number</label>
                        <input type='checkbox' checked={number} onChange={() => setnumber(!number)}  ></input>

                    </div>
                    <div className='p-6 text-center'>
                        <button className='bg-blue-700 w-full cursor-pointer' onClick={createpassword}>Generate Password</button>
                    </div>


                </div>

            </div>
        </div >
    )
}

export default Password
