import { Component } from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { Layout } from '../components/Layout';

export class App extends Component {
  render() {
    return (
      <Layout>
        <GlobalStyle />
      </Layout>
    );
  }
}
