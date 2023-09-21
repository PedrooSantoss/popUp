"use client"
import Link from "next/link";
import { useState } from "react";
import { Inp } from "../components/compInput/page";

export default function Home() {

  const vazio = '';

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() !== ''){
      setTaskList([...taskList, task]);
      setTask(vazio);
    }
  }
  return ( 
    <div>
      <h2>Utilizando Inputs</h2>

      <div>
        <h3>To Do List</h3>

        <input
          type="text"
          placeholder="Digite nova tarefa"
          value={task}
          onChange={(param) => setTask(param.target.value)}
        />

        <button onClick={addTask}>Cadastrar</button>
      </div>

      {
        taskList.map((task, index) =>
        Inp({index, task: task})
        )
      }
      <Link href={'./'}>Voltar para home</Link>
    </div>
  )
}

