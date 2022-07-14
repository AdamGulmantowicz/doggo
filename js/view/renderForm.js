export default function renderForm(list) {

    return /* html */ `
    <form class="card mb-l" id="dogForm">
        <h1 class='h3'>Choose breed</h1>
            <div class="field">
                <label>Breed</label>
                <select class="select" name="breed" id="select" form="dogs">
                    ${Object.keys(list).map(function (breed) {
                        return `<option value="${breed}">${breed}</option>`
                    }).join('')}
                </select>
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>`;
}