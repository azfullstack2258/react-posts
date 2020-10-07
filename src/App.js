import React from 'react';
import { Provider } from 'react-redux';
import { Posts } from './containers';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <div className="main-content">
        <Posts />
      </div>
    </div>
    </Provider>
  );
}

export default App;
