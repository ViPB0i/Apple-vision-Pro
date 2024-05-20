import React from 'react';

const SearchBar = () => {
    return (
        <div className="w-full bg-transparent py-4 px-6 flex justify-between items-center h-40">
            <input type="text" placeholder="Search..." className="bg-transparent text-white-400" style={{width:'400px',borderRadius:'5%',position:'relative',left:'600px',top:"30px", height:'40px'}}/>

        </div>
    );
};

export default SearchBar;
