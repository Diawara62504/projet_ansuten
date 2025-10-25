import React from 'react'

type Revision={
    nom: string;
    age?: number ;
}

export  function FirstComponent({nom, age}:Revision) {

    const MonNomEtMonAge = 
    <strong>
        Votre nom est: {nom} et Votre age est: {age}
    </strong>

    const checkOld = (condition: number)=>{
        if (condition<=17) 
            {
                return <h4>Vous êtes mineur</h4>
            }else if(condition>17 && condition<=25){
                  return <h4>Vous êtes a peu près majeur </h4>
            }else{return <h4>Vous êtes majeur</h4>

            }
          }

        // const checkOld = age <=17 ? <h2>Vous êtes mineur</h2>: <h2>Vous êtes majeur</h2>
        
  return (
    <>
    {MonNomEtMonAge}
      {/* {age && checkOld} */}
      {age && checkOld(age)}
    </>
  )

}