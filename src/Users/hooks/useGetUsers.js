import { getUsers } from "../utils";
import { useEffect, useState } from "react";

export const useGetUsers = ()=> {
    const [users, setUsers]= useState([]);
    const [error, setError]= useState('');
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        const fecthUsers = async () => {
            try{
                setLoading(true);
                const result = await getUsers();
                console.log({ result});
                setUsers(result.users);
                setLoading(false);
            }
            catch (error){
                setError(`Error: ${error.message}`)
                setLoading(false);
            }
        };
        fecthUsers();
    },[]);

    return {users,error,loading}
};