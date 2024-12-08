import React from 'react';
import { IonList } from '@ionic/react';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Array<{ title: string; description: string; type: string; completed: boolean }>;
  onToggleComplete: (index: number) => void;
  onDelete: (index: number) => void;
  onTaskClick: (task: { title: string; description: string; type: string; completed: boolean }) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDelete, onTaskClick }) => {
  return (
    <IonList>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onClick={() => onTaskClick(task)}
        />
      ))}
    </IonList>
  );
};

export default TaskList;
