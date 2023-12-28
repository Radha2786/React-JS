// hooks are basically just function
// here we are creating our own custom hooks and we can also use other hooks in our custom hook 

import {useEffect,useState} from "react"

// this hook will return data  (currency k andar jab bhi change ho tab call karana chahenge)
function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=> res.json()).then((res)=> setData(res[currency]))
        console.log(data);
    },[currency])

    return data
}

export default useCurrencyInfo; 