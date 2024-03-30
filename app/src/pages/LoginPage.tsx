import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>تسجيل الدخول</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">تسجيل الدخول</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LoginForm />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
