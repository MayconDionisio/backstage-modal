import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: this.props.isOpen };
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="modal-header">
          <span className="modal-title">
            {this.props.title}
          </span>
          <span className="modal-close" onClick={this.close} />
        </div>
        <div className="modal-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  className: React.PropTypes.string,
  isOpen: React.PropTypes.bool,
  title: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

Modal.defaultProps = {
  isOpen: false,
  title: '',
};
