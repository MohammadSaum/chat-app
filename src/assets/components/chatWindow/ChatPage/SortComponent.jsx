import React, { useState } from 'react'

const SortComponent = () => {

    const [selected, setSelected] = useState('All')

    const btns = [
            {id: 'All', label: 'All'},
            {id: 'Unread', label: 'Unread'},
            {id: 'Favourites', label: 'Favourites'},
            {id: 'Groups', label:'Groups'}]

    return (
        <div className='mt-2 flex gap-2 cursor-pointer text-sm'>
            {btns.map((btn)=>
                <button 
                    key={btn.id}
                    onClick={() =>{
                        setSelected(btn.id)}}
                        
                    className={`sortIcons px-3 py-1 rounded-4xl 
                            ${btn.id===selected 
                            ? 'activeBtn'
                            : 'inActiveBtn'
                            }`}
                    >{btn.label}</button>                        
                )}
                
        </div>
    )
}

export default SortComponent
