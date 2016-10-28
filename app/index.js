 import React from 'react'
 import { render } from 'react-dom'

 var App = React.createClass({
 	render:function(){
 		return (
 			<div className="main">
 		     <h1>Rewen</h1>
         <p> A Smart Front-End Scaffold </p>
         <p><a href="http://www.cnblogs.com/leinov">Leinov's Blog</a></p>
 			</div>
 			)
 	}
 })
 
render(<App/>,document.getElementById('app'))

 
 

    