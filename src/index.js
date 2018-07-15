import React from 'react'
import { render } from 'react-dom'

import {Header} from './components/Header'
import {Home} from './components/Home'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			homeLink : "Home",
			homeMounted : true
		}
	}

	onChangeLinkFunc(newLink){
		// this.state.homeLink = newLink
		this.setState({
			homeLink : newLink
		})
	}

	onChangeHomeMounted(){
		this.setState({
			homeMounted : ! this.state.homeMounted
		})
	}

	render(){
		var user = {
			name : "Max",
			hobbies : ["Football","Swimming"],
		}

		let homeCmp = ""
		if (this.state.homeMounted){
			homeCmp = (
				<Home name="Howard" 
    				  initialAge={19} 
    				  user={user} 
    				  changeLink={(newLink)=>this.onChangeLinkFunc(newLink)}
    				  initialLinkName={this.state.homeLink} >
            	</Home>
			)
		}

		return(
			<div className="container">
            	<div className="row">
            		<div className="col-xs-10 col-xs-offset-1">
            			<Header homeLink={this.state.homeLink}></Header>
            		</div>
            	</div>
            	<div className="row">
            		<div className="col-xs-10 col-xs-offset-1">
            			{homeCmp}
            		</div>
            	</div>
            	<div className="row">
            		<div className="col-xs-10 col-xs-offset-1">
            			<button type="button" className="btn btn-primary" onClick={()=>this.onChangeHomeMounted()}>
            				Show Home Component
            			</button>
            		</div>
            	</div>
            </div>
		);
	}
}

//changeLink={this.onChangeLinkFunc().bind(this)} ----- cannot use es6 arrow func
render(<App/>, window.document.getElementById('app'));