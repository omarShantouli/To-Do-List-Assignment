import React from 'react';
import Task from './Task';

class Form extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            title : '',
            description : '',
            tasks : [],
            update_phase : {mode : 1, idx : undefined} 
        }
    }

    title(e){
        this.setState({
            title : e.target.value
        })
    }

    description(e){
        this.setState({
            description : e.target.value
        })
    }

    addTask(){
        if(this.state.title && this.state.description)
        {
            var _tasks = [...this.state.tasks]
            _tasks.push({title: this.state.title, description: this.state.description});
            this.setState({
                tasks : _tasks
            }) 
        }
        
    }

    changeMode(index){
        this.setState({
            title : this.state.tasks[index].title,
            description : this.state.tasks[index].description,
            update_phase : {mode : 0, idx : index}
        })
    }


     updating(index){
        var _tasks = [...this.state.tasks]

        _tasks[index] = {title: this.state.title, description: this.state.description};

      this.setState({
            tasks : _tasks,
            update_phase : {mode : 1, idx : index}
        })

    }

    reset(){
        this.setState({
            title : "",
            description : ""
        })
    }

     delete(idx){
        var _tasks = JSON.parse(JSON.stringify(this.state.tasks))
        _tasks.splice(idx, 1);
         this.setState({
            tasks : _tasks
        })
    }

    add_update(e){
        e.preventDefault();
        console.log(this.state.update_phase.mode);
        if(this.state.update_phase.mode)
        this.addTask();
        else
        this.updating(this.state.update_phase.idx);

    }

    render(){
        var tasks = this.state.tasks;
        console.log(tasks);
        return(
            <div>
                <form onSubmit={this.add_update.bind(this)}>

                    <div>
                        <label htmlFor='title'>Title</label>
                    </div>

                    <div style={{marginBottom: "20px"}}>
                        <input id='title' type='text' value={this.state.title} onChange={this.title.bind(this)} />
                    </div>

                    <div>
                        <label htmlFor='description'>Description</label>
                    </div>

                    <div>
                        <textarea id='description' rows={7} cols={28} value={this.state.description} onChange={this.description.bind(this)} />
                    </div>

                    <div>
                        {
                            this.state.update_phase.mode?
                            <button type='submit'>Add</button> :
                            <button type='submit' >Update</button>

                        }
                        <button onClick={this.reset.bind(this)} style={{margin: "30px"}}>Reset</button>
                    </div>

                </form>
                <hr></hr>
    
                <Task 
                tasks={tasks}
                changeMode={this.changeMode.bind(this)}
                delete={this.delete.bind(this)}
                />
                

            </div>
        )
    }
}

export default Form;