import React from "react";

function RecipeCreate({ formData, handleChange, handleSubmit }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  type="text"
                  id="cuisine"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="URL"
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Preparation"
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
