import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import  authProvider  from "./authProvider";
import LoginPage from "./components/Login/Login";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage} >
    <Resource
      name="users"
      show={ShowGuesser}
      create={EditGuesser}
      list={ListGuesser}
      edit={EditGuesser}
    /> <Resource
    name="posts"
    show={ShowGuesser}
    create={EditGuesser}
    list={ListGuesser}
    edit={EditGuesser}
  />
  <Resource
    name="comments"
    show={ShowGuesser}
    create={EditGuesser}
    list={ListGuesser}
    edit={EditGuesser}
  />
  </Admin>
);
