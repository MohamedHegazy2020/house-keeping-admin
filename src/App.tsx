
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';


export const App = () => (
    <Admin
        layout={Layout}
        dataProvider={dataProvider}
	>
        <Resource name='users' show={ShowGuesser} create={EditGuesser} list={ListGuesser} edit={EditGuesser}/>
    </Admin>
);

    