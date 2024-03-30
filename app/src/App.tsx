import { Redirect, Route } from "react-router-dom";
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
import { IonReactRouter } from "@ionic/react-router";
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

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          {/* start route */}
          <Route exact path="/logout">
            <LogoutPage />
          </Route>
          {/* end route */}

          {/* start route */}
          <Route exact path="/profile">
            <Profile />
          </Route>
          {/* end route */}
          {/* start route */}
          <Route exact path="/renew">
            <Renew />
          </Route>
          {/* end route */}

        </IonRouterOutlet>
        <IonTabBar className="" slot="bottom">
          <IonTabButton tab="tab1" href="/logout">
            <IonIcon aria-hidden="true" icon={logOut} />
            <IonLabel>تسجيل الخروج</IonLabel>
          </IonTabButton>
          <IonTabButton tab="renew" href="/renew">
            <DollarSign />
            <IonLabel>تجديد الاشتراك</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/profile">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>الملف الشخصي</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
