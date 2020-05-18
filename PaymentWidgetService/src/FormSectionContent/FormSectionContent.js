import React from 'react';
import FormLine from '../FormLine/FormLine';
import { formType } from '../_MockData/paymentMockData';

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
              name={formType[title]['name'] || `${title.toLowerCase()}${i}`}
              title={title}
              handleChange={e => { e.persist(); handleChange(e); }}
              formType={formType[title]['type']}
              formWidth={formType[title]['width']}
            />
          })}
      </div>
    );
  }
};

export default FormSectionContent;