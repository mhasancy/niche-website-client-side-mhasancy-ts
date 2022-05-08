//imported file
import React, { createContext, ReactNode } from "react";
import useFirebase from "../hooks/useFirebase";
import useDataContext from "./useDataContext";
//Context Creation
export const AllContext: any = createContext({} as any);

//auth provider
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const firebaseContext = useFirebase();
  const dataContext = useDataContext();
  return (
    <AllContext.Provider value={{ firebaseContext, dataContext }}>
      {children}
    </AllContext.Provider>
  );
};

export default AuthProvider;
