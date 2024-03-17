import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const UpdateForm = () => {
    const {id} = useParams()
    const [credentials, setcredentials] = useState({dishName:"", ingredients:"", steps:"", imgSrc:""});
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/upRecipe/${id}`, {
          method: "PUT",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({dishName:credentials.dishName, ingredients:credentials.ingredients, steps:credentials.steps, imgSrc:credentials.imgSrc})
        });
        const json = await response.json();
        console.log("Update json",  json)                            
        if(!json.success){
          alert("Enter valid credentias")
        }
        if(json.success){
            alert("Successfully Updated!")
            
        }
      }
    const onChange = (e) => {
        setcredentials({...credentials, [e.target.name]:e.target.value})
        
      }
      let val 
      useEffect(() => {
        const fetchData = async () => {
          try{
            const res = await fetch(`https://recipewebapp-2.onrender.com/api/recipe/${id}`,{
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              }
              )
              const json =  await res.json();
            console.log("Json ",json)
            setcredentials({
              dishName: json.dishName,
              ingredients: json.ingredients,
              steps: json.steps,
              imgSrc: json.imgSrc
            })
            // console.log("json dishname ", json.dishName)
          }
          catch(err){
            console.log(err)
          }
        }
        fetchData()
      }, [id])
      
  return (
    <div>
      <center><h1><i>Apni Rasoi!!</i></h1></center>
      &nbsp;&nbsp;&nbsp;<Link style={{color:"green", }} to={'/'}>Home</Link>
      <hr/>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter Updated Dish Name:</label>
          <input
            type="text"
            className="form-control"
            name="dishName"
            value={credentials.dishName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients:">Enter Updated Ingredients:</label>
          <input
            type="text"
            className="form-control"
            name="ingredients"
            value={credentials.ingredients}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="steps">Updated Steps:</label>
          <input
            type="text"
            className="form-control"
            name="steps"
            value={credentials.steps}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="steps">Updated Image Source:</label>
          <input
            type="text"
            className="form-control"
            name="imgSrc"
            value={credentials.imgSrc}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
          
      </form>
    </div>
  )
}

export default UpdateForm