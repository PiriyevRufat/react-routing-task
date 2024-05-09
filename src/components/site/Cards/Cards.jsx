import React from 'react'
import Card from '../Card/Card'
import Loading from '../../../pages/Loading/Loading'; 
import { useContext } from "react";
import MainContext from '../../../context/context'; 
const Cards = () => {
  const {data,loading}=useContext(MainContext)
  return (
    <div style={{display:"flex",width:"100%" ,padding:"100px 0px",flexWrap:"wrap"}}>
        {
            loading ? <Loading/> : <Card items={data}/>
        }
    </div>
  )
}

export default Cards