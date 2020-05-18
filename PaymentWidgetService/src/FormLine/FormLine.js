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
    const { title, placeholder, handleChange, formType, formWidth, name  } = this.props;
    // console.log(formType, formWidth);

    let display = formType === 'input' ? (
      <input
        name={name}
        className='formLineInput'
        placeholder={placeholder || ''}
        onChange={handleChange}
        ref={(input) => { this.nameInput = input; }} 
      />
    ) : formType === 'radio' ? (
      <input
        type='radio'
        name={name}
        className='formLineInput'
        placeholder={placeholder || ''}
        onChange={handleChange}
        ref={(input) => { this.nameInput = input; }} 
        />
    ) : null;

    return (
      <div className={`formLine col-${formWidth}`} >
        <div className='formLineTitle'>{title}</div>
        {display}
      </div>
    );
  }
};

export default FormLine;