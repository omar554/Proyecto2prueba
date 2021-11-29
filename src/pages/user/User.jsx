import { useUserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import {Post} from '../../Components/Post/Post'


export default function User() {
    const navigate = useNavigate()
    const { logout } = useUserContext()

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    return (
        <section className="flex flex-col justify-center items-center min-h-screen min-w-scren">
            <div className="p-10 w-11/12 lg:w-1/2 h-max flex flex-col items-center bg-gradient-to-tr from-bluegray-50 to-warmgray-50 shadow-md">
            <button onClick={logoutHandler} className="fixed bottom-5 right-2 w-max transition rounded border border-blue-500 duration-300 ease-in-out lg:text-lg text-sm text-extrabold bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white">Log out</button>
                <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">Bienvenido!</h2>
            </div>
        </section>
    )
    
}