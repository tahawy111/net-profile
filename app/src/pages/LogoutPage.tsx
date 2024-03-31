import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Layout from '../components/Layout';

const Logout: React.FC = () => {
  return (
    <Layout>
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>تسجيل الخروج</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">تسجيل الخروج</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="تسجيل الخروج" />
      </IonContent>
    </IonPage>
    </Layout>
  );
};

export default Logout;
