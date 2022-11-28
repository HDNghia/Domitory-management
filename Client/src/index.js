import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { ProSidebarProvider } from 'react-pro-sidebar';

const reduxStore = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
