import { createContext, Dispatch, SetStateAction, useState } from 'react';

type AppContextProviderProps = {
    children: React.ReactNode
}

export interface SearchItemContextType {
    searchItem: string,

setSearchItem:Dispatch<SetStateAction<string>>
  }

export const AppContext = createContext<SearchItemContextType>({} as SearchItemContextType);

export const AppContextProvider = ( {children}: AppContextProviderProps ) => {
    const [searchItem, setSearchItem] = useState<string>("");
    return (
        <AppContext.Provider value={{searchItem, setSearchItem} }>
            {children}
        </AppContext.Provider>
    );
}