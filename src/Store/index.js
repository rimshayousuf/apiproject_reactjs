import React, { useState } from 'react';
//import { makeStyles } from '@mui/styles';
import SelectVariants from '../Dropdown';
import { useEffect } from 'react';
import { Getfakestore } from '../Constant/Api';

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

const Store = () => {
    // const classes = useStyles();
    //fakestore
     const getApiElement = "";
     const [storedata, setstoredata] = useState([]);
    //todoList
    // const getTodoElem = "";
    // const [tododata, setdatatodo] = useState([]);

    useEffect(() => {
        GetstoreAll();
       // GettodoAll();
    }, []);

    //Fakestore API function
    const GetstoreAll = async () => {
        let res = await Getfakestore();
        console.log(res, "response")
        let dataReshap = []
        try {

            for (let i = 0; i < res.data.length; i++) {
                let obj = {
                    label: " "
                }
                obj['label'] = res.data[i].title
                dataReshap.push(obj)
            }
        }
        catch (e) {

        }
        // console.log({ rafe: dataReshapStore })
        setstoredata([...dataReshap])
        console.log(res);
    }

    //TodoList API function
    // const GettodoAll = async () => {
    //     let resp = await Gettodostore();
    //     let dataReshapTodo = []
    //     try {
    //         debugger;
    //         for (let i = 0; i < resp.data.length; i++) {
    //             let object = {
    //                 label: ""
    //             }
    //             object['label'] = resp.data[i].title;
    //             dataReshapTodo.push(object)
    //         }
    //     }
    //     catch (e) {

    //     }
    //     setdatatodo([...dataReshapTodo]);
    //     console.log(resp);

    // }
    console.log(storedata);
    return (
        <>
            {
                storedata.length > 0 ? <SelectVariants
                label={'Fakestore'}
                    list={storedata}
                    value={getApiElement} >
                </SelectVariants> : null
            }

            {/* {
                tododata.length > 0 ? <SelectVariants
                    label={'Todostore'}
                    list={tododata}
                    value={getTodoElem}>
                </SelectVariants> : null
            } */}

        </>
    );
}
export default Store;