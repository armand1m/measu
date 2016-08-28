import React from 'react';
import { Provider } from 'react-redux';
import router from './router';
import store from './store';

export default ( <Provider store={ store }>{ router }</Provider> );
