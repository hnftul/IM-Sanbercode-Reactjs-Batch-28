import axios from "axios"
import React, { useContext, useEffect} from "react"
import { MobileContext } from "../Context/mobileContext"
import { Table, Button, message } from 'antd';
import { DeleteFilled, EditFilled, PlusSquareFilled} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useHistory } from "react-router"

const MobileList = () => {
    let history = useHistory()
    const { dataMobile, fetchStatus, setFetchStatus, functions} = useContext(MobileContext)
    const { functionDelete, functionEdit, getSize, fetchData} = functions

    useEffect(() => {
        if(fetchStatus){
            fetchData()
            setFetchStatus(false)
        }
    }, [ fetchStatus, setFetchStatus])
    
    const handleDelete = (event) => {
        let idMobile = parseInt(event.currentTarget.value)
        functionDelete(idMobile)
        message.success('Data Terhapus', 3);
    }

    const handleEdit = (event) => {
        let idMobile = parseInt(event.currentTarget.value)
        functionEdit(idMobile)
        history.push(`/mobile-form/edit/${idMobile}`)
    }

    const columns = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            align: 'center'
            
        },
        {
            title: 'Category',
            key: 'category',
            dataIndex: 'category',
            align: 'center'
          },
        {
            title: 'Description',
            key: 'shorterdesc',
            dataIndex: 'shorterdesc',
            align: 'center'
        },
        {
            title: 'Year',
            key: 'release_year',
            dataIndex: 'release_year',
            align: 'center'
        },
          {
            title: 'Size',
            key: 'size',
            dataIndex: 'size',
            align: 'center'
        },
        {
            title: 'Price',
            key: 'price',
            dataIndex: 'price',
            align: 'center'
        },
        {
            title: 'Image URL',
            key: 'shorterurl',
            dataIndex: 'shorterurl',
            align: 'center'
        },
        {
            title: 'Android',
            key: 'is_android_app',
            dataIndex: 'is_android_app',
            align: 'center'
        },
        {
            title: 'iOS',
            key: 'is_ios_app',
            dataIndex: 'is_ios_app',
            align: 'center'
        },
        {
            key: 'action',
            title: 'Action',
            align: 'center',
            render: (res, index) => (
                <>
                <Button style={{margin:'0 10px', backgroundColor:'yellow', color:'white', fontWeight:"bold"}} icon={<EditFilled />} onClick={handleEdit} value={res.id} />
                <Button style={{margin:'0 10px', backgroundColor:'red', color:'white', fontWeight:"bold"}} icon={<DeleteFilled/>} onClick={handleDelete} value={res.id} />
                </>
            ),
        },
    ];
      
    const data = dataMobile

    return(
        <>
            <div className="container">
                <div className="titles">
                    <h1>Mobile Apps List</h1>
                </div>
                <Link to="/mobile-form"><Button  type="primary" style={{ width: '150px', color: 'white', height:'40px', align:'center', marginBottom:'20px'}} icon={<PlusSquareFilled />}>Create Data</Button></Link> 
                <Table columns={columns} dataSource={data}/>
            </div>
        </>
    )
}

export default MobileList