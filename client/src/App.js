// import axios from "axios";
// import Home from "./Components/Home/Home";
// import Navigationbar from "./Components/Navbar";
// import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
// http://localhost:3002/hello
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import routeGuard from "./routes/route-guard";
import { history } from "./util/history";
import { authProtectedRoutes, publicRoutes } from "./routes";
import NonAuthLayout from "./layout/NonAuthLayout";
import ErrorBoundary from "./layout/ErrorBoundry";
import AppLoader from "./layout/AppLoader";
import AuthLayout from "./layout/AuthLayout";
const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthProtected) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        } else {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }
      }}
    />
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <ErrorBoundary> */}
        <React.Fragment>
          <Suspense fallback={<AppLoader />}>
            {/* <GuardProvider guards={[routeGuard]}> */}
              {/* <Router history={history}> */}
                <Switch>
                  {/* public route render */}
                  {publicRoutes.map((route, idx) => (
                    <AppRoute
                      path={route.path}
                      layout={NonAuthLayout}
                      component={route.component}
                      key={idx}
                      isAuthProtected={false}
                      {...route}
                    />
                  ))}
                  {/* authorised route render */}
                  {authProtectedRoutes.map((route, idx) => (
                    <AppRoute
                      path={route.path}
                      layout={AuthLayout}
                      component={route.component}
                      key={idx}
                      isAuthProtected={true}
                      {...route}
                    />
                  ))}
                </Switch>
              {/* </Router> */}
            {/* </GuardProvider> */}
          </Suspense>
          </React.Fragment>
        {/* </ErrorBoundary> */}
      </BrowserRouter>
    </>
  );
}

export default App;
