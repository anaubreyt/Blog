import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { postApi } from './shared/api/PostApi';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app/App';
import './index.css';

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>
);