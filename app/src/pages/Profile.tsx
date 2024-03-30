import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>الملف الشخصي</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">الملف الشخصي</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="الملف الشخصي" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
