import React from 'react'
import Watched from './WatchedList/WatchedEntryContainer'
import WatchList from './WatchList/WatchEntryContainer'

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
        return(
            <div style={{width: '80%'}}>
                {display === 'watchList' ? <WatchList view={display} changeDisplay={this.changeView} /> : <Watched view={display} changeDisplay={this.changeView} />}
            </div>
        )
    }
}