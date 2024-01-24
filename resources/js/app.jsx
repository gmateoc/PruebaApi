import {createRoot} from 'react-dom/client';
import React from 'react';
import { PlaceHolder } from './components/Prueba/PlaceHolder';

require('./bootstrap');


createRoot(document.getElementById('root'))
    .render(
    <PlaceHolder/>);
