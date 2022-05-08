//imported file
import { useContext } from "react";
import { AllContext } from "../contexts/AuthProvider";

//use auth context
const useAuth = () => {
  return useContext(AllContext);
};
export default useAuth;
