import React from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';
export default class NewTaskForm extends React.Component {
  static defaultProps = {
    onLabelChange: () => {},
    onSubmit: () => {},
    currentLabel: 'label',
  };

  static propTypes = {
    onLabelChange: PropTypes.func,
    onSubmit: PropTypes.func,
    currentLabel: PropTypes.string,
  };

  render() {
    const { onLabelChange, onSubmit, currentLabel } = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={(event) => {
            onSubmit(event);
          }}
        >
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={(event) => {
              onLabelChange(event.target.value);
            }}
            value={currentLabel}
          ></input>
        </form>
      </header>
    );
  }
}
