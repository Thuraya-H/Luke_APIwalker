import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Form from './Components/Form';
import Display from './Components/Display';

function App() {
  return (
    <div className="container m-5">
      <Form />
        <Router>
            <Display path="/:category/:id" />
        </Router>
    </div>
  );
}

export default App;
