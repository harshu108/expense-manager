import React from 'react';
import { iCategories } from '../../models/Categories';
import { CategoryType } from '../../utils/CategoryType';
import initialState from './state';


const AppStateContext = React.createContext(initialState);

const AppStateProvider = (props:{children:React.ReactNode})=>{

    const [categories, setCategories] = React.useState<iCategories>({
        "0": {
            name: "Harsh",
            id: "0",
            color: "#12345659",
            type: CategoryType.Income
          },
          "1": {
            name: "Manish",
            id: "1",
            color: "#a343ff59",
            type: CategoryType.Expense
          }  
    })

    return(
        <AppStateContext.Provider value = {{categories,setCategories}}>
            {props.children}
            </AppStateContext.Provider>

    );
}

export {AppStateContext, AppStateProvider} ;
export default AppStateContext;