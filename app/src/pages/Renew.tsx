import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Renew: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>تجديد الاشتراك</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">تجديد الاشتراك</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="تجديد الاشتراك" />
      </IonContent>
    </IonPage>
  );
};

export default Renew;
