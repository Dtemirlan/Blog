import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.tsx';
import AddPost from './pages/AddPost.tsx';
import About from './pages/About.tsx';
import Contacts from './pages/Contacts.tsx';
import PostDetail from './components/PostDetail.tsx';
import EditPost from './components/EditPost.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/posts" exact component={Home} />
                <Route path="/new-post" component={AddPost} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/posts/:id" exact component={PostDetail} />
                <Route path="/posts/:id/edit" component={EditPost} />exact component
            </Switch>
        </Router>
    );
}

export default App;
