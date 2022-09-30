import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [message, setMessage] = useState('Hello World!');

    return (
        <>
            <div className='container'>{message}</div>
            <button onClick={() => setMessage ("hellooooooooo")}>
                mudar mensagem
                </button>
        </>
    );
}

export default App;