import React, { useState } from 'react';
import { IonPage, IonHeader, IonContent, IonButton, IonList, IonItem, IonLabel, IonCheckbox, IonApp, IonFooter, IonInput, IonModal, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css'
import TaskDetailsModal from '../components/TaskDetailsModal';
import TaskList from '../components/TaskList';
import TaskModal from '../components/TaskModal';
import './Tab1.css'

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Array<{ title: string; description: string; type: string; completed: boolean }>>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState<{ title: string; description: string; type: string; completed: boolean } | null>(null);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    type: '',
    completed: false,
  });

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ title: '', description: '', type: '', completed: false });
    setShowModal(false);
  };

  const toggleComplete = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const showTaskDetails = (task: { title: string; description: string; type: string; completed: boolean }) => {
    setSelectedTask(task);
    setShowDetailsModal(true);
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Gestor de Tareas</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
        <IonList>
            <IonItem>
              <IonLabel>Tareas Pendientes: {tasks.filter((task) => !task.completed).length}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Tareas Completadas: {tasks.filter((task) => task.completed).length}</IonLabel>
            </IonItem>
          </IonList>
          <TaskList tasks={tasks} onToggleComplete={toggleComplete} onDelete={deleteTask} onTaskClick={showTaskDetails} />
          <IonButton expand="block" onClick={() => setShowModal(true)}>Agregar Tarea</IonButton>
          <TaskModal isOpen={showModal} onDismiss={() => setShowModal(false)} newTask={newTask} setNewTask={setNewTask} onSave={addTask} />
          <TaskDetailsModal isOpen={showDetailsModal} onDismiss={() => setShowDetailsModal(false)} selectedTask={selectedTask} />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Home;