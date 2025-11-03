import { useState } from 'react'
import {closestCorners, DndContext} from '@dnd-kit/core';
import './App.css'
import { Column } from './Components/Column/Column';
import { arrayMove } from '@dnd-kit/sortable';
import { restrictToFirstScrollableAncestor, restrictToParentElement, restrictToWindowEdges } from '@dnd-kit/modifiers';

function App() {
  const [tasks, setTasks] = useState([
    {id:1,title:"Water the plants"},
    {id:2,title:"Clean the desk"},
    {id:3,title:"Change the wallpaper"},
  ]);

  const getTaskpos = id => tasks.findIndex( task => task.id === id)

  const handleDragEnd = event =>{
    const {active,over} = event;

    if (active.id === over.id) return;

    setTasks( tasks => {
      const originalPos = getTaskpos(active.id);
      const newPos = getTaskpos(over.id);

      return arrayMove(tasks,originalPos,newPos);
    })
  }

  return (
    <div className='app'>
      <h1>My task</h1>
      <div className='dragarea'>
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
          <Column tasks={tasks}/>
        </DndContext>
      </div>  
    </div>
  )
}

export default App
