import React from 'react'

export class Home extends React.Component{
	render(){
		return(
			<div>
				<p>I'm a new Component!</p>
				{ 5 < 2 ? 'Yes' : 'No' }
				<p>the name is {this.props.name} and the age is {this.props.age}</p>
				<p>ObjectName => {this.props.user.name}</p>
				<p>{this.props.user.hobbies.map(hobby => <li>{hobby}</li>)}</p>


			</div>
		);
	}
}

