import ReactDom from 'react-dom';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';

ReactDom.render(
    <BrowserRouter>
        <Main>

        </Main>
    </BrowserRouter>,
document.getElementById('root'))