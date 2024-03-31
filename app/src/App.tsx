import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { person, logOut } from "ionicons/icons";
import { DollarSign } from "lucide-react";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Profile from "./pages/Profile";
import Renew from "./pages/Renew";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

setupIonicReact();

const PrivateRoute = ({
  auth: { isAuthenticated },
  children,
}: {
  auth: { isAuthenticated: boolean };
  children: React.ReactNode;
}) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  const checkIfLoggedIn = !!(
    localStorage.getItem("username") && localStorage.getItem("password")
  );

  return (
    <div className="flex flex-col h-screen">
      <Toaster />
      <IonApp className="">
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={
                checkIfLoggedIn ? <Navigate to="/login" /> : <LoginPage />
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />

            {/* start route */}
            <Route
              path="/logout"
              element={
                <PrivateRoute auth={{ isAuthenticated: checkIfLoggedIn }}>
                  <LogoutPage />
                </PrivateRoute>
              }
            />
            {/* <PrivateRoute auth={{ isAuthenticated: checkIfLoggedIn }}> */}

            {/* </PrivateRoute> */}
            {/* end route */}

            {/* start route */}
            <Route
              path="/profile"
              element={
                <PrivateRoute auth={{ isAuthenticated: checkIfLoggedIn }}>
                  <Profile />
                </PrivateRoute>
              }
            ></Route>
            {/* end route */}
            {/* start route */}
            <Route
              path="/renew"
              element={
                <PrivateRoute auth={{ isAuthenticated: checkIfLoggedIn }}>
                  <Renew />
                </PrivateRoute>
              }
            />
            {/* end route */}
          </Routes>
        </BrowserRouter>
      </IonApp>
    </div>
  );
};

export default App;
