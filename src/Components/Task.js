import React from "react";



class Task extends React.Component{
   

    render(){
        return(
            
            <div>
                {this.props.tasks.map((task, idx)=>{
                    return <div key={idx}>
                                <div>
                                    <b><h1>{task.title}</h1></b> 
                                </div>

                                <div>
                                    {task.description}
                                </div>

                                <div>
                                    <button onClick={this.props.changeMode.bind(this,idx, task.title, task.description)}>Edit</button>
                                    <button onClick={this.props.delete.bind(this, idx)} style={{margin: "30px"}}>Delete</button>
                                </div>
                                <hr style={{ border: "none",
                                            borderTop: "2px dotted black",
                                            color: "black",
                                            backgroundColor: "white",
                                            height: "5px",
                                            width: "100%"}}>
                                </hr>
                            </div>
                })}
                
            
        </div>
        )

    }
}

export default Task;
