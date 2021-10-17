import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "../../Context/GameContext"
import { Table, Button, message, Input} from 'antd';
import { DeleteFilled, EditFilled, PlusSquareFilled} from '@ant-design/icons';


const MobileList = () => {

    let history = useHistory()
    const { data, fetchStatus, setFetchStatus, setData, functions} = useContext(GameContext)
    const {fetchData, functionDelete, functionEdit, getDesc} = functions
    const { Search } = Input;
    const [filter, setFilter] = useState({
        release: "",
        genre: "",
        platform: "",
    })
    
    useEffect(() => {

        if (fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }
        window.scrollTo(0, 0)
    }, [fetchStatus, setFetchStatus])

    const handleEdit = (e) => {
        let idMobile = parseInt(e.currentTarget.value)
        functionEdit(idMobile)
        history.push(`/game/edit/${idMobile}`)
    }

    const handleDelete = (e) => {
        let idMobile = parseInt(e.currentTarget.value)
        functionDelete(idMobile)
        message.success('Data has been deleted successfully', 1);
    }

    const onSearch = value => {
        const getData = async () => {
            let result = await axios.get('https://backendexample.sanbersy.com/api/data-game')
            let data = result.data
            let searchData = data.filter((e) => {
                return Object.values(e).join(" ").toLowerCase().includes(value.toLowerCase())
            })
            if (value !== ""){
                setData(
                    searchData.map((res) => {
                        return {
                            id : res.id,
                            genre : res.genre,
                            platform : res.platform,
                            image_url : res.image_url,
                            singlePlayer : res.singlePlayer,
                            multiplayer : res.multiplayer,
                            name : res.name,
                            release : res.release,
                            shorterurl: getDesc(res.image_url, 20),
                            shorterdesc: getDesc(res.platform, 20),
                            single: res.singlePlayer === 0 ? "false" : "true",
                            multi: res.multiplayer === 0 ? "false" : "true"
                        }
                    })
                )
            } else {
                setFetchStatus(true)
            }
            
        }
        getData()
    }

    const handleChangeFilter = (e) => {
        let value = e.target.value
        let name = e.target.name

        setFilter({...filter, [name]: value})
    }

    const handleFilter = (e) => {
        e.preventDefault()
        const getData = async () => {
            let result = await axios.get('https://backendexample.sanbersy.com/api/data-game')
            let data = result.data
            let filterData = data.filter((e) => {
                return e.release === filter.release || e.genre.toLowerCase() === filter.genre.toLowerCase() || e.platform.toLowerCase() == filter.platform.toLowerCase()
            })
            if (filter.release !== "" && filter.genre !== "" && filter.platform !== ""){
                setData(
                    filterData.map((res) => {
                        return {
                            id : res.id,
                            genre : res.genre,
                            platform : res.platform,
                            image_url : res.image_url,
                            singlePlayer : res.singlePlayer,
                            multiplayer : res.multiplayer,
                            name : res.name,
                            release : res.release,
                            shorterurl: getDesc(res.image_url, 20),
                            shorterdesc: getDesc(res.platform, 20),
                            single: res.singlePlayer === 0 ? "false" : "true",
                            multi: res.multiplayer === 0 ? "false" : "true"
                        }
                    })
                )
            } else {
                setFetchStatus(true)
            }
            
        }
        getData()
    }
    const columns = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            align: 'center',
            sorter: (a, b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            },
        },
        {
            title: 'Genre',
            key: 'genre',
            dataIndex: 'genre',
            align: 'center',
            sorter: (a, b) => {
                if(a.genre < b.genre) { return -1; }
                if(a.genre > b.genre) { return 1; }
                return 0;
            }
          },
        {
            title: 'Platform',
            key: 'platform',
            dataIndex: 'platform',
            align: 'center',
            sorter: (a, b) => {
                if(a.platform < b.platform) { return -1; }
                if(a.platform > b.platform) { return 1; }
                return 0;
            }
        },
        {
            title: 'Year',
            key: 'release',
            dataIndex: 'release',
            align: 'center',
            sorter: (a, b) => a.release - b.release,
        },
        {
            title: 'Image URL',
            key: 'shorterurl',
            dataIndex: 'shorterurl',
            align: 'center',
            sorter: (a, b) => {
                if(a.shorterurl < b.shorterurl) { return -1; }
                if(a.shorterurl > b.shorterurl) { return 1; }
                return 0;
            }
        },
        {
            title: 'Single Player',
            key: 'single',
            dataIndex: 'single',
            align: 'center',
            sorter: (a, b) => {
                if(a.single < b.single) { return -1; }
                if(a.single > b.single) { return 1; }
                return 0;
            }
        },
        {
            title: 'Multi Player',
            key: 'multi',
            dataIndex: 'multi',
            align: 'center',
            sorter: (a, b) => {
                if(a.multi < b.multi) { return -1; }
                if(a.multi > b.multi) { return 1; }
                return 0;
            }
        },
        {
            key: 'action',
            title: 'Action',
            align: 'center',
            width: '150px',
            render: (e, index) => (
                <>
                <Button style={{margin:'0 10px', backgroundColor:'#1c2940', color:'white', fontWeight:"bold"}} icon={<EditFilled />} value={e.id} onClick={handleEdit}  />
                <Button style={{margin:'0 10px', backgroundColor:'#1c2940', color:'white', fontWeight:"bold"}} icon={<DeleteFilled/>} value={e.id} onClick={handleDelete}  />
                </>
            ),
        },
    ];
    const dataMobile = data
    

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <>
            <div className="container">
                <h1 className='title-movie'>List Games</h1>
                <div style={{padding: 0, display:'inline'}}>
                <Search placeholder="Input keyword" allowClear onSearch={onSearch} style={{ width: 250, padding:'46px 0'}} />
                    <div style={{padding: 0, float:'right'}} >
                        <form  onSubmit={handleFilter} method="post" style={{display:'inline'}}>
                            <input placeholder = "Input year" className="filter-input" onChange={handleChangeFilter} value = {filter.release} type="number" name="release"/>
                            <input placeholder = "Input genre" className="filter-input" onChange={handleChangeFilter} value = {filter.genre} type="text" name="genre"/>
                            <input placeholder = "Input platform" className="filter-input" onChange={handleChangeFilter} value = {filter.platform} type="text" name="platform"/>
                            <Button type="primary"style={{height:'50px', width:'100px', marginTop:'50px', marginBottom: '50px', padding:0}}>
                                <input style={{cursor:'pointer', backgroundColor:'unset', border:'none', height:'50 px', width: '100px'}} type="submit" value="Filter"/>
                            </Button>
                        </form>
                        <Button type="danger" style={{height:'50px', width:'100px', padding:0, display:'inline', marginLeft:'20px'}}
                        onClick={() => {
                            setFetchStatus(true)
                            setFilter({
                                release: "",
                                genre: "",
                                platform: "",
                            })}} > Reset Filter
                        </Button>
                    </div>      
                </div>
                <Table columns={columns} dataSource={dataMobile} onChange={onChange} rowKey="8"/>
            </div>
        </>
    )
}

export default MobileList
