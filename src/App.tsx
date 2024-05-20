import React from 'react';
import SearchBar from './Component/Search/Search';
import Slider from './Component/Slider/Slider';
import LeftBar from './Component/LeftBar/index';

function App() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <SearchBar />
            <div className="flex">
                <Slider />
            
            </div>
        </div>
    );
}

export default App;
