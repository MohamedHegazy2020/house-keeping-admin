import axios from "axios";
import {
  AuthProvider,
  fetchUtils,
  QueryFunctionContext,
  useRedirect,
} from "react-admin";

const authProvider: AuthProvider = {
  login: ({ username, password ,email}) => {
    return axios
      .post("http://194.5.157.162:8000/api/login/admin", {
        username,
        password,
        email,
      })
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      })
      .catch((err) => {
        console.log(err);

        throw new Error(err);
      });
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("user");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  getIdentity: () => {
    try {

      const  {username:fullName ,email:id}:{username:string ,email:string}  = JSON.parse(localStorage.getItem("user")||'');
      
      return Promise.resolve({fullName ,id});
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPermissions: () => Promise.resolve(""),
};

export default authProvider;
