import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonTextarea, IonFooter, IonButton, IonSelect, IonSelectOption } from '@ionic/react';

interface TaskModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  newTask: { title: string; description: string; type: string; completed: boolean };
  setNewTask: React.Dispatch<React.SetStateAction<{ title: string; description: string; type: string; completed: boolean }>>;
  onSave: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onDismiss, newTask, setNewTask, onSave }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nueva Tarea</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Título</IonLabel>
            <IonInput value={newTask.title} onIonChange={(e) => setNewTask({ ...newTask, title: e.detail.value || '' })} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Descripción</IonLabel>
            <IonTextarea value={newTask.description} onIonChange={(e) => setNewTask({ ...newTask, description: e.detail.value || '' })} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Tipo</IonLabel>
            <IonSelect value={newTask.type} placeholder="Seleccione el tipo de tarea" onIonChange={(e) => setNewTask({ ...newTask, type: e.detail.value })}>
              <IonSelectOption value="Casa">Casa</IonSelectOption>
              <IonSelectOption value="Trabajo">Trabajo</IonSelectOption>
              <IonSelectOption value="Negocios">Negocios</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="block" onClick={onSave}>Guardar</IonButton>
          <IonButton expand="block" color="light" onClick={onDismiss}>Cancelar</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonModal>
  );
};

export default TaskModal;
