import React,{Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        console.log(this.props.title)
    }


    render(){
    
        return(
            <div>
                
                {this.props.title}
                <button onClick={this.props.modificar}></button>
            </div>
        )
    }
}

export default Login;