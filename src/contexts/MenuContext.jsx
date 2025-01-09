import { createContext, useState } from "react";

const MenuContext = createContext();

export default MenuContext;

export const MenuContextProvider = ({children}) => {
  const [menu, setMenu] = useState("home");
  const value = { 
    menu,
    setMenu 
    };

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
};
