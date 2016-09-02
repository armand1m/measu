import bulma from 'bulma/bulma.sass';
import React from 'react';
import { Provider } from 'react-redux';
import router from './router';
import store from './store';

export default ( <Provider style={ bulma } store={ store }>{ router }</Provider> );
