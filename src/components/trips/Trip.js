import React from 'react';

export const Trip = ({date, place, type, onStatusChange}) => {
    const changeStatus=(event)=>{
        onStatusChange(event.target.value)
    }
    return(
    <tr>
        <td>
            {date}
        </td>
        <td>
            {place}
        </td>
        <td>
            {type}
        </td>
        <td>
            <select onChange={changeStatus}>
                <option value="Pending">
                    Pending
                </option>
                <option value="Completed">
                    Completed
                </option>
            </select>
        </td>
    </tr>
    )	
}