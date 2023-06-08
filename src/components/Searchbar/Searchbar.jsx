import { Component } from 'react';
import CSS from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  Submit = event => {
    event.preventDefault();

    this.props.getSearchQuery(this.state.input);
  };

  inputValue = event => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <header className="searchbar">
        <form className={CSS.form} onSubmit={this.Submit}>
          <div className={CSS.searchInput}>
            <button type="submit" className={CSS.button} />

            <input
              className={CSS.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.inputValue}
            />
          </div>
        </form>
      </header>
    );
  }
}
