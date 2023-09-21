import React from 'react'
import Link from 'next/link'

const add = ({adicionar, remover, reset}) => {
  return (
    <div>
        <p>
            <adicionar>{adicionar}</adicionar>
            {remover}
        </p>
    </div>
  )
}
