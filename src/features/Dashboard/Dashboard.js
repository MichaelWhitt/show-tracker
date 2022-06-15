import React, {useEffect, useState} from 'react'
import axios from 'axios'
import View from './MainView/View'
import { useSelector, useDispatch} from 'react-redux'
import {getMPs} from '../../redux/shows'


import SearchContainer from './Search/SearchContainer'

//TODO Refresh component when movie added to watchList
//TODO Refresh component when movie added to watched
//TODO Send toast when adding, deleting, and moving movies
//TODO Add scrolling all containers as necessary
//TODO Update UI with all components
//TODO Check UI for responsiveness, add breakpoints as needed
//TODO Clean up unsed code
//TODO lazy loading


const Dashboard = () => {

    const [mps, setMPs] = useState([])
    const [wlis, setWLIs] = useState([])
    const showRedux = useSelector(state => state.mps)

    const dispatch = useDispatch()

    useEffect(() => {
      axios.get('/api/getMP').then(res => setMPs(res.data))
      axios.get('/api/getWLI').then(res => setWLIs(res.data))
      
    }, [])

    useEffect(() => {
      dispatch(getMPs())
    }, [])

    return(
        <div className='dash-container'>
          <div style={{display: 'flex', height: '100%', width: '100%'}}>
            {/* {showRedux.list.map(a => <span key={a._id}>{a.name}</span>)} */}
            <SearchContainer wlData={wlis} />
            <View mpData={mps} wlData={wlis} />
            {/* REDUX DATA: <View mpData={showRedux.list} wlData={wlis} /> */}
          </div>
        </div>
    )
}

export default Dashboard