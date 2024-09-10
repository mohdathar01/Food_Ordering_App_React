/*hooks are nothing but normal utility functions just like helper functions
after that it will fetch the data same as fetch the data inside component
useRestaurentMenu will take the resId and return resInfo(information of restaurent)
*/
import { useEffect,useState } from "react";
import { CHILDCARD_ID_USEPARAMS } from "../utils/constant";



const useRestaurentMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);

    // fetch
    useEffect(()=>{
        fetchData();

    },[])

    const fetchData=async()=>{
        const data=await fetch(CHILDCARD_ID_USEPARAMS+resId);
        const json=await data.json();
        setResInfo(json.data);
         
    }


    return resInfo;

}
export default useRestaurentMenu;