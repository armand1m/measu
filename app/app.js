import bulma from 'bulma/bulma.sass';
import download from './vendor/download';
import React from 'react';
import { Provider } from 'react-redux';
import router from './router';
import store from './store';

window.download = download

export default ( <Provider style={ bulma } store={ store }>{ router }</Provider> );
