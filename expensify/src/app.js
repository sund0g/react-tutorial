import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => ( // Implicit returns
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my help component
    </div>
);

const NotFoundPage = () => (
    // React Route Link method tells JavaScript to override server-side refresh with client-side refresh.
    <div>
        404 <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

// Using React Route methods,
//  path        This tells where to look
//  component   This tells what component to load when the path is matched.
//  exact       This tells the matching to be exact.
// All methods are here: https://reacttraining.com/react-router/web/api/Route

// The React Route method Switch works just like a regular switch statement.

// Note BrowserRouter method can have only a single root element, hence the use of <div></div>.

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));
