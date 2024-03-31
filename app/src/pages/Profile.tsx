import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Layout from '../components/Layout';

const Profile: React.FC = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Profile;
