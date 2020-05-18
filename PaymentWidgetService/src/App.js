import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import PaymentForm from './PaymentForm/PaymentForm';
import PaymentFormContent from './PaymentFormContent/PaymentFormContent';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <PaymentForm />
          </Route>
          <Route path="/payment">
            <PaymentFormContent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;