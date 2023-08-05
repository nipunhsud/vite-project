
import { useState } from "react";

function ListGroup() {
    var items = ["Messi", "Beckham", "Zlatan"];
    // items = [];
    const message = items.length === 0 && <p>No Items</p>;
    
    const[selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1>List</h1>
            {message}
            <ul className="list-group">
            {items.map((item, index) => (
                 <li 
                className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                    key={item} onClick={() => { setSelectedIndex(index);}}> <a href={`/contacts/`+selectedIndex}>{item} </a></li>
                 ))
            }
            </ul>
        </>
    );
}

export default ListGroup;