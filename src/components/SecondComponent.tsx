import React, { useState } from 'react'
import { FirstComponent } from './FirstComponent'

export  function SecondComponent() {
const [age, setAge] = useState("")
const [nom, setNom] = useState("")

const Formulaire =
<form className="">
    <input type="text" name="nom" value={nom}
    onChange={(event)=>setNom(event.target.value)}
    />

    <input type="text" name="age" value={age}
    onChange={(event)=>setAge(event.target.value)}
    />


</form>

  return (
    <>
      <FirstComponent nom = {nom} age = {age} />
      {Formulaire}
    </>
  )
}
