import React, { useState } from 'react';
//import { makeStyles } from '@mui/styles';
import SelectVariants from '../Dropdown';
import { useEffect } from 'react';
import { Getfakestore, Gettodostore } from '../Constant/Api';

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
    const [storedata, setstoredata] = React.useState([]);

    //todoList
    const getTodoElem = "";
    const [tododata, setdata] = useState([]);

    useEffect(() => {
        GetstoreAll();
        GettodoAll();
    })

    const GetstoreAll = async () => {
        let res = await Getfakestore();
        console.log(res, "response")
        let dataReshapStore = []
        try {
            for (let i = 0; i < res.data.length; i++) {
                let obj = {
                    label: ""
                }
                obj['label'] = res.data[i].title
                dataReshap.push(obj)
            }
        }
        catch (e) {

        }
        // console.log({ rafe: dataReshap })
        setstoredata([...dataReshapStore])
        console.log(res);
    }

    const GettodoAll = async () => {
        let resp = await Gettodostore();

    }

    return (
        <>
        <SelectVariants>
                label={'Fakestore'}
                list={storedata}
                value={getApiElement}
        </SelectVariants>

           <SelectVariants>
                label={'Todostore'}
                list={tododata}
                value={getTodoElem}
           </SelectVariants>
        </>
    );
}
export default Store;