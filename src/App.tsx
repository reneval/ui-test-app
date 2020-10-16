import React from 'react';
import {StcThemeProvider, TestComponent} from 'stc-kw-web-uitoolkit'

import './App.css';

function App() {
  console.log("::", { TestComponent });

  return (
    // @ts-ignore
    <StcThemeProvider>
    <div className="App">
      <TestComponent theme="primary" />
      <TestComponent theme="secondary" />
    </div>
    </StcThemeProvider>
  );
}

export default App;
