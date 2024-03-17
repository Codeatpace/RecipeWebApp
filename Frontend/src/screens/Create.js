import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
    const [credentials, setcredentials] = useState({dname:"", ingredients:"", steps:"", imgSrc:""});
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('https://recipewebapp-2.onrender.com/api/createrecp', {
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({dname:credentials.dname, ingredients:credentials.ingredients, steps:credentials.steps, imgSrc:credentials.imgSrc})
        });
        const json = await response.json();
        // console.log(json)                            
        if(!json.success){
          alert("Enter valid credentias")
        }
        if(json.success){
            alert("Successfully Added!")
            
        }
      }
    const onChange = (e) => {
        setcredentials({...credentials, [e.target.name]:e.target.value})
        
      }
  return (
    <div>
      <center><h1><i>Apni Rasoi!!</i></h1></center>
      &nbsp;&nbsp;&nbsp;<Link style={{color:"green", }} to={'/'}>Home</Link>
      <hr/>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter Dish Name:</label>
          <input
            type="text"
            className="form-control"
            name="dname"
            value={credentials.dname}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients:">Enter Ingredients:</label>
          <input
            type="text"
            className="form-control"
            name="ingredients"
            value={credentials.ingredients}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="steps">Steps:</label>
          <input
            type="text"
            className="form-control"
            name="steps"
            value={credentials.steps}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="steps">Image Source:</label>
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

export default Create