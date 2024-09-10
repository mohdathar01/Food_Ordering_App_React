import { useState,useEffect } from "react";

const useOnlineStatus=()=>{

    const[onlineStatus]=useState()

    //check online or offline
    useEffect(()=>{

      addEventListener("online",()=>{

      })

    },[])


    //return bool
    return onlineStatus;
}
export default useOnlineStatus;