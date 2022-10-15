import React from 'react';
import './SortButton.css';

export function SortButton() {
  const sortBy = [
    { text: "Price high to low", value: 'highToLow'},
    { text: "Price low to high", value: 'lowToHigh' },
    { text: "Product name A - Z", value: 'fromAtoZ'},
    { text: "Product name Z - A", value: 'fromZtoA'},
  ]

  return (
    <div className="sortButtonWrapper">
      <select className='sortButtonSelect' >
        {sortBy.map((option) => (
          <option className='sortButtonOption'>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

/*
const data = [
     { price: 2, name: "FIAT", category: "Liberica"},
     { price: 11, name: "BMW", category: "Excelsa"},
     { price: 3, name: "RENAULT", category: "Robusta"},
     { price: 0, name: "AUDI", category: "Arabica"},
     { price: 6, name: "FIAT", category: "Liberica"},
     { price: 9, name: "BMW", category: "Excelsa"},
     { price: 18, name: "RENAULT", category: "Robusta"},
     { price: 1, name: "AUDI", category: "Arabica"}
   ]
   const sortAsc = data.sort((a, b) => {
     if(a.price > b.price) {return 1}
     if(b.price > a.price) {return -1}
     return 0
   })
   console.log(sortAsc)
   const sortDesc = data.sort((a, b) => {
     if(a.price > b.price) {return -1}
     if(b.price > a.price) {return 1}
     return 0
   })
   console.log(sortDesc)
   const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' }
 ]
   const filteredCategory = data.filter((e)=> {
     return e.category === "Arabica"
   })
   console.log("Filtered category", filteredCategory)
   return (
     <div className='App'>
       <h1>Hello React .</h1>
       {options.map((option) => {
         <div key={option.value}>
           <label>{option.label}</label>
           <input>{option.value}</input>
         </div>
       })}
     </div>
   );
 }

*/

/*
  
  const sortAsc = data.sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    }
    if (b.price > a.price) {
      return -1;
    }
    return 0;
  });
  console.log(sortAsc);

  const sortDesc = data.sort((a, b) => {
    if (a.price > b.price) {
      return -1;
    }
    if (b.price > a.price) {
      return 1;
    }
    return 0;
  });
  console.log(sortDesc);

  */
