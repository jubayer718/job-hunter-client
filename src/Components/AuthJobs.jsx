import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const AuthJobs = () => {
  const jobContext = useContext(AuthContext);
  return jobContext;
};

export default AuthJobs;