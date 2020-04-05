import {combineReducers} from 'redux'


const numOperationReducer = (num = 0, action) =>
{
    if(action.type === 'INCREMENT')
    {
        return num+1;
    }
    else if (action.type === 'DECREMENT')
    {
         return num-1;
    }

    return num;
};


export default combineReducers({
    numOperation: numOperationReducer,
})
