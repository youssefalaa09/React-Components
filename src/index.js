import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Navbar from "./components/Navbar"
import Content from "./components/Content"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <div className='container'>
<Navbar/>
<Content/>
</div>
);




