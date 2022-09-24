import * as React from 'react'
import Root from './app/root';
import { Provider } from 'react-redux'
import { store } from './app/store'



function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};


export default App;
