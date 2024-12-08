import React from 'react';
import { IonItem, IonLabel, IonCheckbox, IonButton } from '@ionic/react';

interface TaskItemProps {
  task: { title: string; description: string; type: string; completed: boolean };
  index: number;
  onToggleComplete: (index: number) => void;
  onDelete: (index: number) => void;
  onClick: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, onToggleComplete, onDelete, onClick }) => {
  return (
    <IonItem button onClick={onClick}>
      <IonCheckbox slot="start" checked={task.completed} onIonChange={() => onToggleComplete(index)} />
      <IonLabel>{task.title}</IonLabel>
      <IonButton slot="end" color="danger" onClick={(e) => {
        e.stopPropagation();
        onDelete(index);
      }}>
        Eliminar
      </IonButton>
    </IonItem>
  );
};

export default TaskItem;
