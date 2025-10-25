import React from 'react'

export default function TableComponent() {

   const product = [
      {titre: "Pomme", prix:"10.000fg", id: 1},
      {titre: "Mangue", prix: "5.000fg", id: 2},
      {titre: "Orange", prix:"15.000fg", id: 3},
      {titre: "Ananas",  prix:"8.000fg",id:4},
    ]

        const myArray = <div className='col-8'>
          <h2>Ma Liste</h2>
          {product.map(product=>(
            <ul>
              <li key={product.id}>
                <strong>{product.titre} : </strong>
                <strong>{product.prix}</strong>
              </li>
            </ul>
          )
          )}
        </div>

        const Etudiant = [
          {id:1, nom: "Tenin", departement: "Biologie" , licence:2},
          {id:2,nom: "Koumba", departement: "Sociologie" , licence:1},
          {id:3,nom: "Mohamed", departement: "Photovoltaique" , licence:3},
          {id:4,nom: "Jeanine", departement: "Informatique" , licence:1},
        ]


        const myTable = 
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Département</th>
              <th>Licence</th>
            </tr>
          </thead>
          <tbody>
            {Etudiant.map((etudiant)=>(
              <tr key={etudiant.id}>
                <td>{etudiant.nom}</td>
                <td>{etudiant.departement}</td>
                <td>{etudiant.licence}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
  return (
    <>
   
      {myArray}
      {myTable}
    </>
  )

}