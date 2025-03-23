import axios from 'axios';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../../slices/access_token';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";

type HomeProps = {}

const emailValidator = z.string().email({message: 'Given email is not a valid one.'});

const Home: FC<HomeProps> = ({}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async() => {
        const response = await axios.post(`http://localhost:3001/auth/login`, { email, password})

        dispatch(set(response.data.access_token));
    }

    const validateInputs = (email: string) => {
        let validation = emailValidator.safeParse(email);

        if(!validation.success){
            return validation.error.format()?._errors[0];
        }

        return null;
    }

    const handleLogin = async() => {
        const message = validateInputs(email);

        if(message){
            setError(message);
            return;
        }

        await login();
        
        return navigate('/invoices');
    }

    
    return (
        <div>
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={(event) => { event.preventDefault(); handleLogin()}} method='post' >
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} onChange={(event) => setPassword(event.target.value)}/>
                            </div>
                            <p className='flex justify-center text-red-600'>{error}</p>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Home;