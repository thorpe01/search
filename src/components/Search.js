import React from 'react';
import {useState,useEffect} from 'react';
import "./Search.css";


function Search(){

    const[datas , setDatas] = useState([]);
    const[searchword ,setsearchword] = useState("");

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setDatas(json));
    } , [] );

     const handleSearchword =(e) =>{
         let value = e.target.value;
         value.length > 2 && setsearchword(value);
     };


    return(
        <>
        <div className="searchbar">
            <input type="text"
             name="searchbar"
              id="searchbar" 
              placeholder="Rechercher" 
              onchange={handleSearchword}
              />
        </div>
        <div className="search_results">
            {datas.filter((val)=>{
                return val.title.toLowerCase().includes(searchword.toLowerCase());
            }).map((val)=>{
            return <div className="search_result" key={val.id}>{val.title}</div>;
            })}
        </div>
        
        </>
    );
}
export default Search;

