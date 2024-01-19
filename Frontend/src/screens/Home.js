import '../App.css'
import Create from './Create'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";

const Home = () => {
  let [recipes, newRecipes] = useState([])
  const navigate = useNavigate();

  const recipesAll = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/allRecipes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      const json = await response.json();
      newRecipes(json)
      console.log(json)
    }
    catch (err) {
      console.log(err)
    }
  }
  const deleteRecipe = async(dishName) => {
    // console.log("button clicked")
    try {
      let response = await fetch("http://localhost:5000/api/delRecipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({dishName})
      })
      if (response.status == 200) {
        alert("Successfully Deleted")
        window.location.reload();
      }
      else{
        alert("Try again")
      }

    }
    catch (err) {
      console.log(err)
    }
    console.log(dishName)
  }

  useEffect(() => {
    recipesAll()
  }, [])
  return (
    <div>
      <center><h1><i>Apni Rasoi!!</i></h1></center>
      <hr />
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            {recipes.map((data, index) => (
              <div key={index}>
                {data.map((item) => (
                  <div>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={item.imgSrc} height={'210'} style={{ borderRadius: '10px' }} className="card-img-top" alt="PavBhaji" />
                    <div className="card-body">
                      <center><h3 className="card-title"><i>{item.dishName}</i></h3></center><br/>

                      <i><p className="card-text"><b><label>Ingredients: </label></b>{item.ingredients}</p></i><br/>
                      <i><p className="card-text"><b><label>Steps: </label></b>{item.steps}</p></i><br/>
                      <button className='btn btn-warning' onClick={() => navigate(`/update/${item._id}`)}>Update</button>&nbsp;&nbsp;&nbsp;
                      <button className='btn btn-danger' onClick={() => deleteRecipe(item.dishName)}>Delete</button>
                    </div>
                  </div><br/>
                  </div>
                ))}
              </div>
            ))}

          </div>
          <div className='col-4 d-flex justify-content-end align-items-start'>
            <button className="btn btn-success" onClick={() => { navigate('/create') }}>Add a Recipe</button>
          </div>

        </div>
      </div>
      <br />
    </div>
  )
}

export default Home