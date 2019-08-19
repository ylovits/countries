import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.scss';
import Home from './components/Home';
import NotFound from './components/NotFound';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
            <Route path='/' component={Home} exact />
            {/* <Route path='/countries/:code' component={CountryPage} />
            <Route path='/countries' component={Countries} />*/}
            <Route component={NotFound} /> 
          </Switch>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
