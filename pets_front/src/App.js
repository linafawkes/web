import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ServiceList from "./components/ServiceList";
import Header from "./components/Header"
import Login from "./components/Login"
import CommentList from "./components/CommentList"
import Main from './components/Main';
import Contacts from './components/Contacts';

function App() {
    return (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/services" component={ServiceList} />
        <Route path="/login" component={Login} />
        <Route path="/comments" component={CommentList} />
        <Route path="/main" component={Main} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
      </BrowserRouter >
    );
}

export default App;
