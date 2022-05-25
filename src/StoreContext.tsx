import React, {FC} from 'react';
import {StoreType} from './redux/store';

const StoreContext = React.createContext({} as StoreType)

export type ProviderPropsType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider: FC<ProviderPropsType> = ({store, children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContext;