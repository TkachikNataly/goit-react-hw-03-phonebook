import React, { Component } from 'react';
import s from './Form.module.css';
import PropTypes from 'prop-types';


class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state);
        this.resetForm();
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    resetForm = () => {
        this.setState({ contacts: [], name: '', number: '' });
    };

    render = () => {
        return (
            <div>
                <form className={s.form} onSubmit={this.handleSubmit}>
                    <p className={s.title}>Name</p>
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <p className={s.title}>Number</p>
                    <input
                        className={s.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                    <button className={s.button} type="submit">Add Contact</button>
                </form>
            </div>
        );
    };
}
Form.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};

export default Form;