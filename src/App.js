import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import { Posts } from './containers';
import store from './redux/store';
import './App.css';

library.add(fab, faShareAlt);

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
