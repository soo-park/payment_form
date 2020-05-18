import React from 'react';

class FormLine extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.name === 'first name0') {
      this.nameInput.focus();
    }
  }

  render() {
    const { title, placeholder, handleChange  } = this.props;
    const name = title
    
    return (
      <div className='formLine'>
        <div className='formLineTitle'>{title}</div>
        <input
          name={name}
          className='formLineInput'
          placeholder={placeholder || ''}
          onChange={handleChange}
          ref={(input) => { this.nameInput = input; }} 
        />
      </div>
    );
  }
};

export default FormLine;