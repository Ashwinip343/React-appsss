import { useState } from 'react'
import './App.css'
import {FaTwitter} from 'react-icons/fa'
import {TiTickOutline} from 'react-icons/ti'
import {RxUpdate} from 'react-icons/rx'
import {RiDeleteBin6Line} from 'react-icons/ri'

// array.push doesnt work in states , because we cannot change the value of variable without set function in states


function App() {  
  const [todo,setTodo] = useState([])
  const [newTask, setnewTask] = useState("")

  // todo - array of objects having id , todoitem string

  const handleChange=(event)=>{
    setnewTask(event.target.value)}

  
  

  const addTask=()=>{

    // ... adds the latter specified - newtask element into the todo list 
    const task= {
      id : todo.length===0 ? 1 : todo[todo.length-1].id + 1,
      
      taskname:newTask,
      completed:false
    }
    setTodo([...todo, task])
  }
  const deleteTask=(id)=>{
    // filter function - returns false for the elements you dont wanna keep in the array 
  //   todo.filter((t)=>
  //   {if(t===task)
  //     {return false}
  //   else{return true}
  //        OR
  //todo.filter((t)=>{return t!=task})
  // }) - this will delete all the items having duplicate names , we dont want it
    
    setTodo(todo.filter((t)=>{return t.id!=id}))

  }
  const CompleteTask=(id)=>{
    setTodo(todo.map((task)=>{
    if(task.id===id){
      console.log(task.completed)
      return {...task, completed : task.completed ? false : true  }
    }
    else{
      return task
    }
  }
    ))
  }
return (
  <div> 
    <div className='text-2xl text-cyan-500 font-bold' style={{fontFamily:'fantasy'}}>Day - 01 of React </div>
    <div className='addTask'>
      <input onChange={handleChange} className=" p-2 rounded" type="text"></input> 
 <h1></h1>
     
       
        <button className = "mb-4 px-3 py-2 text-black font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 " onClick={addTask}>Add task</button>

    </div>
    {todo.map((task, key)=>{
      return (
        <div className='m-3 ml-5 px-3 py-3 shadow shadow-cyan-500/50 ' style={{background: task.completed ?"#06b6d4" : null ,color:"black", borderRadius:"10px" }}>
          <div className='flex flex-row'> 

          <div className='mb-1 w-48  text-white font-bold text-2xl'>{task.taskname}</div>  
          <button className='px-3 py-2 text-green-500 rounded-lg bg-black shadow-sm shadow-cyan-500/50 ml-3 ' onClick={()=>deleteTask(task.id)} ><RiDeleteBin6Line style={{color:"#06b6d4"}}/></button>
        
          <button className='px-3 py-2text-green-500 rounded-lg bg-black shadow-sm shadow-cyan-500/50 mx-3 ' onClick={()=>CompleteTask(task.id)} ><TiTickOutline style={{color:"#06b6d4"}}></TiTickOutline></button>
          <button className='px-3 py-2 text-green-500 rounded-lg bg-black shadow-sm shadow-cyan-500/50 mr-3 '><RxUpdate style={{color:"#06b6d4"}}></RxUpdate></button>
         
          {/* // functions having argument needs ()=> in onclick */}
        </div>
        </div>
      )
    })}
    
    <div className='list'></div>

  </div>
  )
}

export default App
