import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
        <div>
        
          <Layout>
            {/* questo qui sotto "BurgerBuilder" è un componente passato come prop.children al layout comp*/}
            <BurgerBuilder></BurgerBuilder>
          </Layout>

        </div>
      
    );
  }
}

export default App;
