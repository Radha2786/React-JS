import {useContext, createContext} from 'react'

export const ThemeContext = createContext({
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{},
}) // but here we are providing some default values also
// hum variables bhi de skte and also methods bhi

// in the same file we are creating provider 

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
    // ab hume 2-2 br ye useContext and Theme import nhi krna padega

}

