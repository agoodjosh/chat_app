import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';

import SignUp from './signup';
import SignIn from './singin';

const App = () => (
    <div>
        <SignUp />
        <SignIn />
    </div>
);

export default App;
