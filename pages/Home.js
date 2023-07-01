import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTOCart } from './Redux/Action/Index';
import { useRouter } from 'next/router';

function Home() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [getData, setData] = useState([])
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const getCategory= router.query.category;
        const fetchData = async () => {
          let apiUrl = 'https://fakestoreapi.com/products';
          if (getCategory) {
            apiUrl = `https://fakestoreapi.com/products/category/${getCategory}`;
          }
          try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setData(data);
            setFilteredData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, [router.query.category]);
            
        
    const AddTOCartBtn = (element, quantity) => {
            dispatch(AddTOCart({
                id: element.id,
                title: element.title,
                quantity: quantity,
                image: element.image,
                desc: element.description,
                price: element.price
            }))
    }



    return (
        <>
            <div className='heading' >
            </div>
            <div className='box'>
                {filteredData.map((element) => (
                    <div className="card" style={{ width: "18rem", margin: '10px', backgroundColor: 'white', border: 'none' }} key={element.title}>
                        <img src={element.image} className="card-img-top" alt={element.image} style={{ height: '100%', position: 'relative', alignItems: 'center', maxHeight: '200px', width: '100%', }} />
                        <div className="card-body">
                            <h6 className="card-title text-center">{element.title.slice(0, 30)}..</h6>
                            <p className='text-center'>₹{element.price}</p>
                        </div>
                        <button onClick={()=>AddTOCartBtn(element,1)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home

