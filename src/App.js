// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componets/Header';
import FilterDropdown from './componets/FilterDropdown';
import ItemList from './componets/ItemList';

const itemsData = [
                      { 
                        name: "BMW X5",
                        description: "Top speed 255 mph",
                        category: "BMW M Series",
                        imageLink: "images/bmw-m1.jpg", 
                    },
                    { 
                        name: "BMW X7",
                        description: "Top speed 355 mph",
                        category: "BMW M Series",
                        imageLink: "images/bmw-m2.jpg", 
                    },
                    { 
                        name: "BMW X6",
                        description: "Top speed 205 mph",
                        category: "BMW M Series",
                        imageLink: "images/bmw-m3.jpg", 
                    },
                    { 
                        name: "Bugatti Chiron",
                        description: "Top speed 150 mph",
                        category: "Bugatti Classics",
                        imageLink: "images/bugatti_1.jpg", 
                    },
                    { 
                        name: "Bugatti Veyron",
                        description: "Top speed 120 mph",
                        category: "Bugatti Classics",
                        imageLink: "images/bugatti_2.jpg", 
                    },
                    { 
                        name: "Rolls-Royce Cullinan",
                        description: "Top speed 155 mph",
                        category: "Rolls-Royce",
                        imageLink: "images/rolls-royce_cullinan.jpg", 
                    },
                    { 
                        name: "Rolls-Royce Ghost",
                        description: "Top speed 250 km/h",
                        category: "Rolls-Royce",
                        imageLink: "images/rolls-royce_ghost.jpg", 
                    },
                    { 
                        name: "Rolls-Royce Phantom",
                        description: "Top speed 250 km/h",
                        category: "Rolls-Royce",
                        imageLink: "images/rolls-royce_phantom.jpg", 
                    },

];

function App() {
  const [categorySelect, setCategorySelect] = useState('all');
  const [items, setItems] = useState(itemsData);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    // Load the theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");
    setDarkTheme(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    // Save the theme preference to localStorage
    localStorage.setItem("theme", darkTheme ? "light" : "dark");
  };

  const handleCategoryChange = (e) => {
    setCategorySelect(e.target.value);
  };

  useEffect(() => {
    // Populate items based on the selected category
    const filteredItems = itemsData.filter(
      (item) => categorySelect === 'all' || categorySelect === item.category
    );
    setItems(filteredItems);
  }, [categorySelect]);

  return (
    <div className={`App ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <Header toggleTheme={toggleTheme} darkTheme={darkTheme} />
      <main>
        <FilterDropdown categorySelect={categorySelect} onCategoryChange={handleCategoryChange} />
        <ItemList items={items} />
      </main>
    </div>
  );
}

export default App;
