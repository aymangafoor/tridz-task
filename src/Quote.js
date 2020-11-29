import React, { Component } from 'react';
import { Link ,withRouter} from "react-router-dom";
import './Quote.css'
class Quote extends Component {
    constructor(props){
        super(props)
    this.state={
        name: null,
        email:null,
        phone:null,
        section:null,
        storage:null,
        description:null,

    }
    this.store = this.store.bind(this);
    this.show = this.show.bind(this);

}
    store(event){
        this.setState({
            [event.target.name]: event.target.value,
            
        });
    }
    show(){
        alert("name:"+this.state.name+", email:"+this.state.email+" phone:"+this.state.phone+", section:"+this.state.section+" ,storage:"+this.state.storage+" ,description:"+this.state.description);
    }
    render() {
        return (
            <div className='quote'>
                <form onSubmit={this.show}>
                <Link to='/' className='back'>X</Link>
                <label className='heading'>Get a quote</label>
                <div className='firstrow'>
                    <input type='text' value={this.state.name} name='name' className='first' placeholder='Name'
                     onChange={this.store}></input>
                    <input type='text' value={this.state.email} name='email' className='first' placeholder='Email'
                    onChange={this.store}></input>
                    <input type='text' value={this.state.phone} name='phone' className='first' placeholder='Phone'
                    onChange={this.store}></input>
                </div>
                <div className='select'>
                    <select defaultValue='' value={this.state.section} name='section' className='selects'
                    onChange={this.store}>
                        <option  hidden value="none">Section</option>
                        <option value="section A">Section A</option>
                        <option value="section B">Section B</option>
                        <option value="section C">Section C</option>
                    </select>
                    <select className='selects' value={this.state.storage} name='storage' defaultValue=""
                    onChange={this.store}>
                        <option hidden value="none">Storage Area</option>
                        <option value="Storage Area 1">Storage Area 1</option>
                        <option value="Storage Area 2">Storage Area 2</option>
                    </select>
                </div>
                <div className='last'>
                <input type='text' value={this.state.description} name='description' className='requirement' placeholder='Requirement'
                onChange={this.store}></input>
                </div>
                <div style={{display: "flex", justifyContent: 'flex-end'}}>
                <input type='submit' className='submit' value='Send'></input>
                </div>
            
                </form>
            </div>
        )
    }
} export default withRouter(Quote)