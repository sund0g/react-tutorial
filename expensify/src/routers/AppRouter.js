import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import ExpenseDashboardPage from '../components/expenseDashboardPage';
import AddExpensePage from '../components/addExpensePage';
import EditExpensePage from '../components/editExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/notFoundPage';

// Using React Route methods,
//  path        This tells where to look
//  component   This tells what component to load when the path is matched.
//  exact       This tells the matching to be exact.
// All methods are here: https://reacttraining.com/react-router/web/api/Route

// The React Route method Switch works just like a regular switch statement.

// Note BrowserRouter method can have only a single root element, hence the use of <div></div>.

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
              <Route path="/" component={ExpenseDashboardPage} exact={true} />
              <Route path="/create" component={AddExpensePage} />
              <Route path="/edit" component={EditExpensePage} />
              <Route path="/help" component={HelpPage} />
              <Route component={NotFoundPage} />
          </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter
