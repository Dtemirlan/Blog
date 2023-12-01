import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.tsx';
import AddPost from './pages/AddPost.tsx';
import About from './pages/About.tsx';
import Contacts from './pages/Contacts.tsx';
import PostDetail from './components/PostDetail.tsx';
import EditPost from './components/EditPost.tsx';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand as={Link} to="/">My blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/new-post">Add post</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contacts">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Home />} />
                    <Route path="/new-post" element={<AddPost />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/posts/:id/edit" element={<EditPost />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
