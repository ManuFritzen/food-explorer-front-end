import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [ data, setData ] = useState({});

    async function login({email, password}){

        try{
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({user, token});

        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possivel acessar!");
            }
        }
    }

    return(
        <AuthContext.Provider value={{login, user: data.user}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;

}

export { AuthProvider, useAuth};