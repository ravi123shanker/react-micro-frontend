import React from "react";
import './App.css';
import ErrorBoundary from "./components/ErrorBoundry";

const App1 = React.lazy(() => import("app1/App").catch(() => {
  return import("./components/Fallback");
}));

const App2 = React.lazy(() => import("app2/App").catch(() => {
  return import("./components/Fallback");
}));


const App = ({ title }) => (
  <div>
    <h1><center>{title}</center></h1>
    <ErrorBoundary appName="App 1">
      <React.Suspense fallback="Loading App1">
        <fieldset><legend>MFE App1</legend><App1 /></fieldset>
      </React.Suspense>
    </ErrorBoundary>
    <ErrorBoundary appName="App 2">
      <React.Suspense fallback="Loading App2">
        <fieldset><legend>MFE App2</legend><App2 /></fieldset>
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

export default App;