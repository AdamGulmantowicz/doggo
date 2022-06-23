export default function Form() {

  return /*html*/ `
  
  <form id="selectForm"> 
    <input type="text" class="input">
      <select id="selected" name="choise-dog">
        ${Object.keys(dogsList.message).map(function (el) {
        return /*HTML*/ ` <option value = "${el}" class = "selected__rase"> ${el} </option>` 
      }).join(" ")}
      </select>
    <button type="submit" class="button">Submit</button>
  </form>
`
}