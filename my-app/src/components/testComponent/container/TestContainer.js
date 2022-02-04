import React, {useCallback} from 'react';
import TestComponent from "../component/TestComponent";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../../../redux-store/reducers/reposReducer/actions/actions";

const TestContainer = () => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.repos.count)

    const handleSetCount = useCallback((e)=> {
        if(e.target.value === '+') {
            dispatch(setCount(count + 1))
        } else {
            if(count === 0) {
                return count
            } else  {
                dispatch(setCount(count - 1))
            }
        }
    },[count])

    return (
        <div>
            <TestComponent handleSetCount={handleSetCount} count={count}/>
        </div>
    );
};

export default TestContainer;