export default function inputFind() {
  return /*html*/ `
  <form id="selectForm"> 
  <input required type="text" class="search_input" minlength="3" placeholder="Type 3 letters"/>
  <br/>
<div class="range_form">
<label class="range_label" for="vol">How many images?</label> 
  <input type="number" id="rangevalue" min="1" max="5" value="3" oninput="range.value=value">
  <input type="range" id="vol" name="vol" min="1" max="5" oninput="rangevalue.value=value"> 
  </div>
  <input type="submit"  class="btn_search" value="Submit"/>
  </form>`
}