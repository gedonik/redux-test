import React, {useState} from 'react';
import {useDispatch} from "react-redux";

const ManagerPanel = () => {
    const [sort, setSort] = useState(true);
    const dispatch = useDispatch();

    const sortFunc = () => {
        setSort(!sort);
        dispatch({type: 'SORT', payload: sort});
    }

    return (
        <div>
            <button onClick={sortFunc} style={{cursor: "pointer"}}>{sort ? 'asc' : 'desc'}</button>
        </div>
    );
};

export default ManagerPanel;