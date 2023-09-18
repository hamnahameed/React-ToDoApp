import React, { useState } from "react";
import './App.css'

const App=()=>{

  const[items,setItems]=useState(" ")
  const[itemsArray,setItemsArray]=useState([])

  const textValue=(e)=>{
    console.log(e.target.value)
    setItems(e.target.value)
  }

  const addItem=()=>{
    setItemsArray((allItems)=>{
      return[...allItems,items]
    }
    );
    setItems('')
  }

  const delFunc=(index)=>{
      console.log("deleted")
    
      setItemsArray((allItems)=>{
        return allItems.filter((arrayElem,i)=>{
         return i!==index;
        })
      })
  }


  return(
    <>
    <div className="main_div">
    <div className="center_div">
        <h1>ToDo App</h1>
        <input type="text" placeholder="Add a item"  onChange={textValue} value={items}/>
        <button className="addBtn" onClick={addItem}>+</button>
        

        <ul>
          {itemsArray.map((arrayItems,index)=>{
            return (
              <>
              <div className="list_style" key={index} >
              <button className="delBtn" onClick={() => delFunc(index)}>X</button>
              <li> {arrayItems}</li>
              </div>
           
              </>)
          })}
        </ul>
      </div>
    </div>
      
    </>
  )
}

export default App;