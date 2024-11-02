import { createContext, FunctionComponent, ReactNode, useState } from "react";

interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({ isLoading: false, setIsLoading: () => { } });


const LoadingContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);


    return (<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        {children}
    </LoadingContext.Provider>);
}

export { LoadingContext,LoadingContextProvider };
export type { LoadingContextType };
