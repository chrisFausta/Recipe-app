import React from "react";


const Recipe = ({ recipe, handleDelete}) => {
    return ( 
    <React.Fragment>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img className="scale-down" src={recipe.photo} alt={recipe.name} /></td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td><button name="delete" onClick={handleDelete}>Delete</button></td>    
    </React.Fragment> );
}
 
export default Recipe;