import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import LoginForm from "../components/LoginForm";
import Layout from "../components/Layout";

const LoginPage: React.FC = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default LoginPage;
