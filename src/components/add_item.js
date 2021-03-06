import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {addToDoItem} from "../actions";
import NavButton from './nav_button';

class AddItem extends Component {
    renderInput(props){
        console.log('add item props:', props);
        return (
            <div className={`input-field col ${props.size}`}>
                <input {...props.input} type="text" />
                <label>{props.label}</label>
                <p className="red-text">{props.meta.touched && props.meta.error}</p>
            </div>
        )
    }
    handleAddItem = async (values) => {
        console.log('form values:', values);
        await this.props.addToDoItem(values);
        this.props.history.push('/');

    }

    render(){
    console.log('thisssss is',this.props)

        const { handleSubmit, reset } = this.props;
        return(
            <div>
                <h1 className="center">
                    Add Item
                </h1>
                <NavButton to="/" text="Back to List" color="purple"/>
                <form onSubmit={handleSubmit(this.handleAddItem)}>
                    <div className="row">
                        <Field size="s12" name="title" label="title" component={this.renderInput}/>
                    </div>
                    <div className="row">
                        <Field size="s12" name="details" label="details" component={this.renderInput}/>
                    </div>

                    <div className="row">
                        <div className="col s6 center">
                            <button type="button" onClick={reset} className="btn red">
                                Cancel
                            </button>
                        </div>
                        <div className="col s6 center">
                            <button className="btn blue">
                                Add Item
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(formValues){
    const error = {};

    if(!formValues.title){
        error.title = 'Please enter a title for your to do item'
    }

    if (!formValues.details){
        error.details = 'Please give yout to do items some details'
    }
    return error;
}

AddItem = reduxForm({
    form: 'add-item',
    validate: validate
})(AddItem);

export default connect(null, {
    addToDoItem: addToDoItem
})(AddItem);