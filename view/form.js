export default function choiceForm(dogsList) {

  return /*html*/ `
  
  <form id="selectForm"> 
   
      <select id="selected" name="choice-dog">
        ${Object.keys(dogsList.message).map(function (el) {
        return /*HTML*/ ` <option value = "${el}" class = "selected__rase"> ${el} </option>` 
      }).join(" ")}
      </select>
      <input type="submit" class="input">
    
  </form>
`
}