import React, { useContext, useRef } from 'react'
import { listContext } from '../App';

const AddForm = () => {

    console.log("I'm add form....");

    const [state, dispatch] = useContext(listContext);

    const addRef = useRef();

    const handleSubmit = (e) => {

        e.preventDefault();

        const value = addRef.current.value;

        if(value === "" || value === null) return;

        dispatch({

                type:"add",

                payloat:value

            })

        addRef.current.value = "";

    }

  return (
    <>
        
        <div>

            <form onSubmit={handleSubmit} className='flex items-center gap-2'>

                <input type="text"  ref={addRef} className="input__style" placeholder='add list ...'/>

                <button className='button__style bg-slate-300'>Add List</button>

            </form>

        </div>

    </>
  )
}

export default AddForm
