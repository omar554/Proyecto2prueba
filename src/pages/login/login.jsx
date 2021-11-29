import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useUserContext } from '../../context/userContext';

export default function Login() {
    const { login, token } = useUserContext();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);

    const onChange = (e, save) => {
        save(e.target.value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const logged = await login(username, password);

        setError(!logged);
        setUsername("");
        setPassword("");
    }

    if (token) {
        console.log("Ya se loggea")
        return <Navigate replace to="/redirect" />
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-bl from-emerald-400 to-indigo-800">
            <main className="w-3/4 max-w-3xl bg-blue-100 rounded-md p-8 md:p-10 shadow-md">
                <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 items-center justify-center">
                    <h2 className="text-gray-800 font-monserrat font-black text-4xl">Proyecto Final</h2>
                    <h3 className="-mt-4 p-0 font-monserrat text-gray-800 font-bold min-w-max"> Programación Web</h3>

                    {error && <p className="w-full rounded p-3 text-center text-yellow-800 font-roboto bg-amber-300 select-none">
                        Ha ocurrido un error. Por favor, revisa tus credenciales y vuelve a intentarlo
                    </p>}

                    <input className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded"
                        type='text'
                        value={username}
                        placeholder='Usuario'
                        onChange={(e) => onChange(e, setUsername)}
                    />

                    <input className="font-medium w-full text-gray-700 focus:outline-none focus:ring focus:border-gray-700 p-2 rounded"
                        type="password"
                        placeholder="Contraseña"
                        onChange={(e) => onChange(e, setPassword)}
                        value={password}
                    />

                    <button className="mt-6 w-full transition rounded border border-blue-500 duration-300 ease-in-out text-xl text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Ingresar</button>
                </form>
            </main>
        </div>
    );
}
