'use strict';

var React = require('tuxx/React');

var MessageForm = React.createOwneeClass({
  displayName: 'MessageForm',

  anyPropTypes: {
    updateMessage: React.PropTypes.func.isRequired,
    createMessage: React.PropTypes.func.isRequired
  },

  getDefaultProps: function () {
    return {
      username: 'Anonymous',
      editing: false,
      addOrEdit: 'Add'
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var messageNode = React.findDOMNode(this.refs.message);
    var message = messageNode.value.trim();

    if (this.props.editing) {
      this.nearestOwnerProps.updateMessage(message, this.props.message.id);
    } else {
      this.nearestOwnerProps.createMessage(message, this.props.username);
    }

    messageNode.value = '';
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder={this.props.addOrEdit + " Message"} defaultValue={this.props.text} ref="message"></input>
        <button type='submit'>{this.props.addOrEdit}</button>
      </form>
    );
  }
});

module.exports = MessageForm;
