import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
    //   const [selectedCategory, setSelectedCategory] = useState("All");
    //   const [searchFood, setSearchFood] = useState("All")

    const [selectFood, setFood] = useState('All')
    const [itemName, setNameFood] = useState('')
    const [itemCategory, setCategoryFood] = useState('Produce')
    const [submitFood, setSubmitFood] = useState(items)

    //   function handleCategoryChange(e) {
    //     setSelectedCategory(e.target.value)
    //     console.log('this is working too');
    //   }

    let handleSelectFood = (e) => {
        setFood(e.target.value)
        console.log('this is working')
    }

    let itemsToDisplay = submitFood.filter((item) => {
        if (selectFood === "All") return true
        return item.name === selectFood
    })

    let inputFood = (e) => {
        setNameFood(e.target.value)
    }

    let selectCategory = (e) => {
        setCategoryFood(e.target.value)
    }

    let onItemFormSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            id: uuid(), // the `uuid` library can be used to generate a unique id
            name: itemName,
            category: itemCategory
        }
        let newArray = [...submitFood, newItem]
        setSubmitFood(newArray)
        //setSubmitFood('')  
    }

//   let searchItemstoDisplay = items.filter((item)=> {
//     if (searchFood === "All") return true
//     return item.name === searchFood
//   })

//   let itemDisplay = (item) => {
//       if(item.category === searchFood) {
//             {itemsToDisplay.map((item) => (
//                 <Item key={item.id} name={item.name} category={item.category} />
//             ))}
//       } else {
//             {searchItemstoDisplay.map((item) => (
//                 <Item key={item.id} name={item.name} category={item.category} />
//             ))}
//       }
//   }

  return (
    <div className="ShoppingList">
        <ItemForm 
            onItemFormSubmit={onItemFormSubmit}
            inputFood={inputFood}
            selectCategory={selectCategory}
        />

        <Filter
            onSearchChange={handleSelectFood}
            value={selectFood}
        />

        <ul className="Items">
            {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
            )
        )}

        {/* {searchItemstoDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
            )
        )}      */}
        </ul>
    </div>
  )
}

export default ShoppingList;
