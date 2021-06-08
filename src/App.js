import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Auth from './components/Auth';
import GuestRoute from './routes/GuestRoute';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import theme from './theme';
import store from './store';
import NewPost from './pages/Post/New';
import './mock';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/new" element={<NewPost />} />
              <GuestRoute path="/sign-in" element={<SignIn />} />
              <Route path="*" element={<h1>Not Found 404!</h1>} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
