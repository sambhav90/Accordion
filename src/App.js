import React, {useState} from 'react'
import { Question } from './Arr';
import Myaccordian from './Myaccordian';
import './App.css';

const Accordian = () => {
    const [data, setData] = useState(Question);
    return (
        <>
            <section className="main-div">
                <h1>React Interview Questions </h1>
        {
                data.map((curElem) => {
                    return <Myaccordian key={curElem.id} {...curElem} />
                    //here the spread operator is use to pass the the properties of the questions api
                })        
        }
                 </section>
        </>
    )
}

export default Accordian