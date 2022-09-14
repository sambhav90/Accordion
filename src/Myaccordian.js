import React, {useState} from 'react'

const MyAccordian = ({ Question, Answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className="main-heading">
                <p onClick={() => setShow(!show)}> { show? "➖" : "➕"} </p>
                <h3>{Question}</h3>
                   
            </div>
            { show &&  <p className="answers"> {Answer} </p> }
         
        </>
    )
}

export default MyAccordian