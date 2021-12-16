import { useState } from 'react'
import '../styles/Selector.css'

function Selector() {
    const itemList = [
        { id: 0, item: 'Item 1' },
        { id: 1, item: 'Item 2' },
        { id: 2, item: 'Item 3' },
        { id: 3, item: 'Item 4' },
    ]
    const [checkedItems, updateCheckedItems] = useState(new Array(itemList.length).fill(false))
    const [selectAll, updateSelectAll] = useState(false)

    return (
        <form>
            <div>
                <input
                    type="checkbox"
                    name="select-all"
                    checked={selectAll}
                    onChange={e => {
                        selectAll ? updateCheckedItems (new Array(itemList.length).fill(false)) : updateCheckedItems (new Array(itemList.length).fill(true))
                        updateSelectAll(e.target.checked)}
                    }
                />
                <label>Select all</label>
            </div>
            {
                itemList.map(({ id, item }) => {
                    return (
                        <div key={id} >
                            <input 
                                type="checkbox" 
                                name={`item-${id}`}
                                checked={checkedItems[id]}
                                onChange={e => {
                                    const tmp = [...checkedItems]
                                    tmp[id] = e.target.checked
                                    if (!tmp.includes(false)) { updateSelectAll(true) }
                                    updateCheckedItems(tmp)} // updateCheckedItems won't work without a new temporary array in parameter (useState)
                                }
                            />
                            <label>{ item }</label>
                        </div>
                    )
                })
            }
        </form>
    )
}

export default Selector