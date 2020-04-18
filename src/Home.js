import React,{Component} from 'react';
import Perfil from './Perfil';

class Home extends Component{
    constructor(){
        super()
        this.state={
            error: null ,           
            isLoaded:false,
            perfiles:[]
        }
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(
            (result)=>{
                console.log(result)
                this.setState({
                    perfiles:result,
                    isLoaded:true
                    
                    
                })
              
            }, (error) => {
                console.log("Error")
            }
        )
            
    }
    
    
    render(){
        if(!this.state.isLoaded){
            return (
                <div>
                    Loading
                </div>
            )
        }else{
            return(
                <div>
                    {this.state.perfiles.map(data=><Perfil datos={data}/>)}
                    
                    
                </div>
            )
            } 
                  
        
    }
}

export default Home;