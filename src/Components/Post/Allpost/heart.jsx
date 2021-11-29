import {BsFillEyeSlashFill} from 'react-icons/bs';
import  like  from '../../../services/like';
import { useEffect, useState } from 'react';
import { IoHeartOutline} from 'react-icons/io5';




const Heart = ({identifier, active}) => {
   
    const newtoken = localStorage.getItem('token');
    
    const [temporal, setTemporal] = useState(null);
    const showVisible = temporal !== null? temporal : active;

    useEffect(() => {
        setTemporal(active);
    }, [active, identifier]);

    // const showVisible = temporal !== null? temporal : active;
    
    // useEffect(() => {
    //     setTemporal(active);
    // }, [identifier]);
    
    const data = async () => {
        const data =  await like(identifier, newtoken);
        // setTemporal(!active);
        console.log(temporal);
        console.log(data);
        setTemporal(!active);
        
        
        
        
        
        
        
    }


    return (
    
        !showVisible?
                    <span>
                        <IoHeartOutline onClick={data} className="cursor-pointer text-gray-400 text-opacity-50 hover:text-red-600 hover:text-opacity-1 transition-all transform hover:scale-125"/>
                    </span> :
                    <span>
                        <IoHeartOutline onClick={data} className="cursor-pointer text-red-600 transition-all hover:text-gray-400 transform hover:scale-125"/>
    
                    </span>
       
        
    
    )
};

export default Heart;