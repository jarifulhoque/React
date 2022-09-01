import {useState} from 'react';

const Products = () => {
    const cars = [
        {
            id:1,
            name: "BMW",
            year:2020
        },
        {
            id:2,
            name: "Mercedes",
            year:2018
        },
        {
            id:3,
            name: "Ford",
            year:2021
        },
        {
            id:4,
            name: "Nissan",
            year:2017
        }
    ];

    const [name, setName] = useState('');

    // the search result
    const [foundcars, setFoundcars] = useState(cars);
  
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {
        const results = cars.filter((car) => {
          return car.name.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundcars(results);
      } else {
        setFoundcars(cars);
        // If the text field is empty, show all users
      }
  
      setName(keyword);
    };
    return (
        <div className="Component">
          <input
            type="search"
            value={name}
            onChange={filter}
            className="input"
            placeholder="Filter by Name"
          />
    
          <div className="employee-list">
            {foundcars && foundcars.length > 0 ? (
              foundcars.map((car) => (
                <li key={car.id} className="employee">
                  <span className="car-id">{car.id}  </span>
                  <span className="car-name">{car.name}  </span>
                  <span className="car-year">{car.year}  </span>
                </li>
              ))
            ) : (
              <h1>No cars found!</h1>
            )}
          </div>
        </div>
      );
    }
export default Products;