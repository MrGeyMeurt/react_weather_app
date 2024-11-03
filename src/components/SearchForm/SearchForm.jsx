import { useState } from "react";

function SearchForm({ onSearch }) {
    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); //empêche la page de se recharger
        if (inputValue) {
            onSearch(inputValue); // appele la fonction 'onSearch' passée en propo            
        }
    };

    console.log(inputValue); // montrer le handle à l'instant t

    
    return (
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city"
        />
        <button type="submit">Search</button>
        </form>
    );
    
};

export default SearchForm;