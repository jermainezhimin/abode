import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Fascinator } from './components/fascinator';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Header />
      <Fascinator />
      <Footer />
    </div>
  );
};

export default hot(App);
