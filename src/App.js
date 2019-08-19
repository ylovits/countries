import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.scss';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Header from './components/Header';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route 
            path='/' 
            render={(props) => <React.Fragment><Header {...props} activelink='activehome' /><Home /></React.Fragment>} 
            exact
          />
          {/* <Route path='/countries/:code' component={CountryPage} />
          <Route 
            path='/countries' 
            render={(props) => <React.Fragment><Header {...props} activelink='activecountries' /><Countries /></React.Fragment>} 
          /> */}
          <Route render={(props) => <React.Fragment><Header {...props} activelink='' /><NotFound /></React.Fragment>} />
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
