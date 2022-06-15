import React from 'react'
import Watched from '../MainView/WatchedList/WatchedEntryContainer'
import WatchList from '../MainView/WatchList/WatchEntryContainer'
import { useSelector } from 'react-redux'

export default class View extends React.Component {
    state = {
        display: 'watchList'
    }

    changeView = () => {
        if(this.state.display === 'watchList') this.setState({display: 'watched'})
        if(this.state.display === 'watched') this.setState({display: 'watchList'})
    }

    render(){
        const {display} = this.state
        const {mpData, wlData} = this.props
        
        return(
            <div style={{width: '80%'}}>
                {display === 'watchList' ? (
                <WatchList view={display} changeDisplay={this.changeView} mpData={mpData} wlData={wlData} />
                ) 
                : <Watched view={display} changeDisplay={this.changeView} mpData={mpData} wlData={wlData} />}
            </div>
        )
    }
}