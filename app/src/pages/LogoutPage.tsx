import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Logout: React.FC = () => {
  return (
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
  );
};

export default Logout;
