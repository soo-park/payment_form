import React from 'react';
import FormLine from '../FormLine/FormLine';

class FormSectionContent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { detail, handleChange  } = this.props;
    
    return (
      <div className='sectionContent'>
        {
          detail.map((title, i) => {
            return <FormLine
              key={title}
              name={`${title.toLowerCase()}${i}`}
              title={title}
              handleChange={e => { e.persist(); handleChange(e); }}
            />
          })}
      </div>
    );
  }
};

export default FormSectionContent;