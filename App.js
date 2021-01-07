import React from 'react';
import { View, Text } from 'react-native';
import HomeContainer from './src/containers/HomeContainer';
import {createStore} from 'redux';
import  combineReducers from './src/service/reducers';

const store = createStore(combineReducers);

const App = () => {
  return (
      
    <Provider store={store}>
      <Text>I am at App !!!</Text>
      <HomeContainer />
    </Provider>
  );
};



export default App;
