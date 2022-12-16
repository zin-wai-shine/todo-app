import React, { useContext } from 'react'
import { listContext } from '../App';

const List = () => {

    console.log("I'm list....");

    const [state, dispatch] = useContext(listContext);

    const filterData = state.data.filter((res) => res.toLowerCase().includes(state.filterText.toLowerCase()));

    const handleEdit = (id, text) => {

        const newValue = prompt(`edit by ${text}`, text);

        if(text === "" | text === null) return;

            dispatch({

                type:"edit",

                payloat:{id, newValue}
                
            });

    }

    const handleDelete = (id) => {
        dispatch({

            type:"delete",

            payloat:{ id }
        
        })
    }

  return (

    <>

        {
            filterData.map((res, index) => (

                <div className='w-auto h-auto p-2 border-2 border-green-200 rounded-lg flex items-center justify-between gap-5' key={index}>

                        <h5 className='text-xl text-white'>{ res }</h5>

                        <div className='flex items-center gap-2'>

                                <button className='button__style bg-red-300' 
                                    onClick={() => handleDelete(index)}>delete</button>

                                <button className='button__style bg-green-300'
                                    onClick={() => handleEdit(index, res)}
                                >edit</button>

                        </div>

                </div>

            ))
        }
      
    </>

  )

}

export default List
