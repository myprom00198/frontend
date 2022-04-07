// import Axios from 'axios'
// import { useState } from 'react';
import '../src/Search.css';

function Search(){
    // const [templeSearch, setTempleSearch] = useState([]);

    // const getTemple = () => {
    //     Axios.get('http://localhost:3333/search').then((response) => {
    //         setTempleSearch(response.data);
    //     });
    // }

    return (
        
        <div className='form-search'>
            <h1>ค้นหาวัดที่คุณต้องการ...</h1>
            <input className="search" type="text" name="search" placeholder='ค้นหา...'></input>
            <button type="submit" value="submit">ค้นหา</button>
            
            {/* {templeSearch.map((val, key) => {
                return (
                    <div className='search-card'>
                        <div className='card-body'>
                            <p className='card-text'>ชื่อวัด: {val.temple_name}</p>
                            <p className='card-text'>ที่อยู่: {val.temple_description}</p>
                            <p className='card-text'>รายละเอียด: {val.temple_address}</p>
                        </div>
                    </div>
                )
            })} */}
        </div>
    );
}
export default Search