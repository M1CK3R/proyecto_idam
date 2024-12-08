import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonFooter, IonButton } from '@ionic/react';

interface TaskDetailsModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  selectedTask: { title: string; description: string; type: string; completed: boolean } | null;
}

const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({ isOpen, onDismiss, selectedTask }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detalles de Tarea</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selectedTask && (
          <IonList>
            <IonItem>
              <IonLabel>Título: {selectedTask.title}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Descripción: {selectedTask.description}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Tipo: {selectedTask.type}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Estado: {selectedTask.completed ? 'Completada' : 'Pendiente'}</IonLabel>
            </IonItem>
          </IonList>
        )}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="block" onClick={onDismiss}>Cerrar</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonModal>
  );
};

export default TaskDetailsModal;
