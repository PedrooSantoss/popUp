"use client"
import { useState } from 'react'
import Link from 'next/link'


  function page(){
    
    let padraoContador = 0;

    const [contador, setContador] = useState(padraoContador);
    


    const adicionar = () =>{
      setContador(contador + 100);
      console.log(contador)
    }

    const remover = () =>{
      setContador(contador > 0 ? contador -1000 : padraoContador);
      console.log(contador)
    }

  const reset = () => {
    setContador(padraoContador)
  }

  return (
    <div>
      <p>Contador</p>
      <button onClick={adicionar}>Adicionar</button>
      <button onClick={remover}>Remover</button>
      <button onClick={reset}>Resetar</button>
      <p>contagem: {contador}</p>

    <Link href={'./aulaInput'}>inputs</Link>
    </div>
  )
}

export default page