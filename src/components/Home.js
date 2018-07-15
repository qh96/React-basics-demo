import React from 'react'

export class Home extends React.Component{
	constructor(props){
			super()
			this.state = {
				age : props.initialAge,
				homeLink : props.initialLinkName,
				status : 0
			}
			console.log("constructor")
			setTimeout(()=>{
				// this.state.status += 1
				this.setState({
					status : 1
				})
			}, 3000)
		}

	

	onGrowOlder(){
		this.setState({
			age : this.state.age + 3
		})
	}
	onChangeLink(){
		this.props.changeLink(this.state.homeLink)
	}
	onChangeInput(event){
		this.setState({
			homeLink : event.target.value
		})
	}

	// Component lifecycle

	componentWillMount(){
		console.log("Component will mount")
	}

	componentDidMount(){
		console.log("Component did mount")
	}

	componentWillReceiveProps(nextProps){
		console.log("Component will receive props", nextProps)
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log("Should Component update", nextProps, nextState)
		return true
	}

	componentWillUpdate(nextProps, nextState){
		console.log("Component will update", nextProps, nextState)
	}

	componentDidUpdate(prevProps, prevState){
		console.log("Component did update", prevProps, prevState)
	}

	componentWillUnmount(){
		console.log("Component will Unmount")
	}

	//

	render(){
		return(
			<div>
				<p>I'm a new Component!</p>
				{ 5 < 2 ? 'Yes' : 'No' }

				<p>the name is {this.props.name} and the age is {this.state.age}</p>
				<p>ObjectName => {this.props.user.name}</p>
				<p>Status: {this.state.status}</p>
				<button type="button" className="btn btn-primary" onClick={() => this.onGrowOlder()}>
					Make me older
				</button>
				<hr/>
				<input type="text" value={this.state.homeLink} onChange={(event)=>this.onChangeInput(event)}/>
				<button type="button" className="btn btn-primary" onClick={()=>this.onChangeLink()}>
					Change
				</button>
			</div>
		);
	}
}

//() => this.onGrowOlder() or this.onGrowOlder().bind(this)
