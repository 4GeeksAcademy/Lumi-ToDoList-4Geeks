import React, {useState} from 'react'

export default function Task(props){
    const [hide, setHide] = useState(false)

    return (
        <>
            <div 
                className="d-flex align-items-center justify-content-between p-3 py-1 showDelete" 
                onMouseOver={()=>setHide(true)}
                onMouseOut={()=>setHide(false)}
            >
                <div>
                    <p className='m-0'>{props.title}</p>
                    <p className='m-0 text-muted'>{props.description}</p>
                </div>
                <button 
                    type='button' 
                    className='btn btn-danger deleteBtn' 
                    onClick={props.handleClick}
                    style={{display: hide ? 'block' : "none"}}
                >🗑️
                </button>
            </div>
            <hr className={props.display ? 'px-3 mx-3' : 'd-none'}/>
        </>
    )
}