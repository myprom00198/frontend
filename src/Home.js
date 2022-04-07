import React from 'react';
import Header from './Header';
import Body from './Body';
import Search from './Search';
import Dropdown from './Dropdown';

function Home() {
    return (
     <div>
         <Header/>
         <Body/>
         <Search/>
         <Dropdown/>
     </div>
    );
}
  
export default Home;