import {BsFillEyeSlashFill} from 'react-icons/bs';
import  usetoogle  from '../../../services/toogle';
import { useEffect, useState } from 'react';
import Icon from './edit';



const Toogle = ({identifier, active}) => {
    console.log({identifier, active});
    const newtoken = localStorage.getItem('token');
    const [temporal, setTemporal] = useState(null);
    const showVisible = temporal !== null? temporal : active;
    
    useEffect(() => {
        setTemporal(active);
    }, [active, identifier]);

    
    
    const data = async () => {
        const data =  await usetoogle(identifier, newtoken);
        setTemporal(!active);
        // console.log(temporal);
        console.log(data);
        
       
    }


return (
    
    showVisible?
                <span>
                    <BsFillEyeSlashFill onClick={data} className="cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"/>
                </span> :
                <span>
                    <BsFillEyeSlashFill onClick={data} className="cursor-pointer text-red-600 transition-all hover:text-gray-400 transform hover:scale-125"/>

                </span>
   
    

)
};

export default Toogle;