import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component{
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        this.props.notifyPathName(window.location.pathname);
    }

    render() {
        console.log(this.props.pathName)
        return (
            <div>
                {
                    this.props.pathName === '/' ?
                    <Link to="/create"> Add New</Link> : ''
                }
            </div>
        )
    }
}

