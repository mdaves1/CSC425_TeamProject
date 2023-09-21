import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Toolbar.js';

function App() {
  return (
    <main>
      {/* Header */}
      <header className='header'></header>
      {/* Toolbar */}
      <section className='toolbar'>
        <Toolbar/>
      </section>
      {/* List */}
      <ul className='list'>
      </ul>
    </main>
  );
}

export default App;
