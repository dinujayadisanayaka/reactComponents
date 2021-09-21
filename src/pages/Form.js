import React, { Component } from 'react'
import ProfileDetails from '../components/form/profileDetails'


export default class Form extends Component {
    render() {
        return (
            <div>
                <a href="/chart">chart</a>
               <ProfileDetails/>
            </div>
        )
    }
}
