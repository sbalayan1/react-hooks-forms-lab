
function ItemForm({ onItemFormSubmit, inputFood, selectCategory}) {
    return (
        <div>
            <form className="NewItem" onSubmit={onItemFormSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={inputFood} />
                </label>

                <label>
                    Category:
                    <select name="category" onChange={selectCategory}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Dessert">Dessert</option>
                    </select>
                </label>

                <button type="submit">Add to List</button>
            </form>
        </div>
    );
}

export default ItemForm;
