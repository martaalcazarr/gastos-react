import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto}) => {
  return (
    <div className='listado-gastos contenedor'>
       <h2>{gastos.length ? 'Gastos' : 'Todavía no hay gastos'}</h2>
       {gastos.map ( gasto => (
        <Gasto 
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
        />
        ))}
    </div>
  )
}

export default ListadoGastos