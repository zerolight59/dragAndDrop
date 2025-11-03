import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable'
import './Column.css'
import { Task } from '../Task/Task'

export const Column = ({tasks}) => {
  return (
    <div className='Column'>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {
            tasks.map((task)=>(
                <Task id={task.id} title={task.title}  key={task.id}/>
                // <div id={task.id}>{task.title}</div>
            ))
        }
        </SortableContext>
        
        
    </div>
  )
}
