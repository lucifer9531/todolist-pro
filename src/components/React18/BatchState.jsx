import React, {useState} from 'react';

const BatchState = () => {

    const [value, setValue] = useState(0);

    const handleClick = () => {
        setValue(value + 1);
        console.log(value);
        setValue(value + 1);
        console.log(value);
        // setTimeout(() => {
        //     setValue(value + 1);
        //     console.log(value);
        //     setValue(value + 1);
        // })
    }

    return (
        <div>
            <p>{ value }</p>
            <button onClick={ handleClick }>增加</button>
        </div>
    );
};

export default BatchState;