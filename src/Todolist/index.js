import React, { useState } from 'react';
//import { makeStyles } from '@mui/styles';
import SelectVariants from '../Dropdown';
import { useEffect } from 'react';
import { Gettodostore } from '../Constant/Api';

// const useStyles = makeStyles({
//     root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//     },
// });

const Todolist = () => {
    // const classes = useStyles();
    //todoList
    const getTodoElem = "";
    const [tododata, setdatatodo] = useState([]);

    useEffect(() => {
        GettodoAll();
    }, []);

    //TodoList API function
    const GettodoAll = async () => {
        let resp = await Gettodostore();
        let dataReshapTodo = []
        try {
            debugger;
            for (let i = 0; i < resp.data.length; i++) {
                let object = {
                    label: ""
                }
                object['label'] = resp.data[i].title;
                dataReshapTodo.push(object)
            }
        }
        catch (e) {

        }
        setdatatodo([...dataReshapTodo]);
        console.log(resp);

    }
   
    return (
        <>
           
            {
                tododata.length > 0 ? <SelectVariants
                    label={'Todostore'}
                    list={tododata}
                    value={getTodoElem}>
                </SelectVariants> : null
            }

        </>
    );
}
export default Todolist;