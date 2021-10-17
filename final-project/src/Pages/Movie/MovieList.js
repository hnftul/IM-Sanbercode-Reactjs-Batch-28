import React, { useContext, useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import { MovieContext } from "../../Context/MovieContext"
import { Table, Button, message, Input } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import axios from "axios"


const MovieList = () => {

    let history = useHistory()
    const { data, fetchStatus, setFetchStatus, functions, setData} = useContext(MovieContext)
    const {fetchData, functionDelete, functionEdit, getDesc} = functions
    const { Search } = Input;
    const [filter, setFilter] = useState({
        year: "",
        genre: "",
        duration: "",
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
        history.push(`/movie/edit/${idMobile}`)
    }

    const handleDelete = (e) => {
        let idMobile = parseInt(e.currentTarget.value)
        functionDelete(idMobile)
        message.success('Data has been deleted successfully', 1);
    }

    const onSearch = value => {
        const getData = async () => {
            let result = await axios.get('https://backendexample.sanbersy.com/api/data-movie')
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
                            description : res.description,
                            image_url : res.image_url,
                            title : res.title,
                            duration : res.duration,
                            rating : res.rating,
                            year : res.year,
                            review : res.review,
                            shorterurl: getDesc(res.image_url, 20),
                            shorterdesc: getDesc(res.description, 20),
                            shortereview: getDesc(res.review, 20),
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
            let result = await axios.get('https://backendexample.sanbersy.com/api/data-movie')
            let data = result.data
            let filterData = data.filter((e) => {
                return e.year === parseInt(filter.year) || e.genre.toLowerCase() === filter.genre.toLowerCase() || e.duration === parseInt(filter.duration)
            })
            if (filter.year !== "" && filter.genre !== "" && filter.duration !== ""){
                setData(
                    filterData.map((res) => {
                        return {
                            id : res.id,
                            genre : res.genre,
                            description : res.description,
                            image_url : res.image_url,
                            title : res.title,
                            duration : res.duration,
                            rating : res.rating,
                            year : res.year,
                            review : res.review,
                            shorterurl: getDesc(res.image_url, 20),
                            shorterdesc: getDesc(res.description, 20),
                            shortereview: getDesc(res.review, 20),
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
            title: 'Title',
            key: 'title',
            dataIndex: 'title',
            align: 'center',
            sorter: (a, b) => {
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
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
            title: 'Description',
            key: 'shorterdesc',
            dataIndex: 'shorterdesc',
            align: 'center',
            sorter: (a, b) => {
                if(a.shorterdesc < b.shorterdesc) { return -1; }
                if(a.shorterdesc > b.shorterdesc) { return 1; }
                return 0;
            }
        },
        {
            title: 'Year',
            key: 'year',
            dataIndex: 'year',
            align: 'center',
            sorter: (a, b) => a.year - b.year,
        },
          {
            title: 'Review',
            key: 'shortereview',
            dataIndex: 'shortereview',
            align: 'center',
            sorter: (a, b) => {
                if(a.shortereview < b.shortereview) { return -1; }
                if(a.shortereview > b.shortereview) { return 1; }
                return 0;
            }
        },
        {
            title: 'Duration',
            key: 'duration',
            dataIndex: 'duration',
            align: 'center',
            sorter: (a, b) => a.duration - b.duration
        },
        {
            title: 'Rating',
            key: 'rating',
            dataIndex: 'rating',
            align: 'center',
            sorter: (a, b) => a.rating - b.rating
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
                <h1 className='title-movie'>List Movies</h1>
                <div style={{padding: 0, display:'inline'}}>
                <Search placeholder="Input keyword" allowClear onSearch={onSearch} style={{ width: 250, padding:'46px 0'}} />
                    <div style={{padding: 0, float:'right'}} >
                        <form  onSubmit={handleFilter} method="post" style={{display:'inline'}}>
                            <input placeholder = "Input year" className="filter-input" onChange={handleChangeFilter} value = {filter.year} type="number" name="year"/>
                            <input placeholder = "Input genre" className="filter-input" onChange={handleChangeFilter} value = {filter.genre} type="text" name="genre"/>
                            <input placeholder = "Input duration" className="filter-input" onChange={handleChangeFilter} value = {filter.duration} type="number" name="duration"/>
                            <Button type="primary"style={{height:'50px', width:'100px', marginTop:'50px', marginBottom: '50px', padding:0}}>
                                <input style={{cursor:'pointer',backgroundColor:'unset', border:'none', height:'50 px', width: '100px'}} type="submit" value="Filter"/>
                            </Button>
                        </form>
                        <Button type="danger" style={{height:'50px', width:'100px', padding:0, display:'inline', marginLeft:'20px'}}
                        onClick={() => {
                            setFetchStatus(true)
                            setFilter({
                                year: "",
                                genre: "",
                                duration: "",
                            })}} > Reset Filter
                        </Button>
                    </div>      
                </div>
                <Table columns={columns} dataSource={dataMobile} onChange={onChange} rowKey="9"/>
            </div>
        </>
    )
}

export default MovieList
