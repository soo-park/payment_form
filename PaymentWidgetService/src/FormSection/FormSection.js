import React from 'react';
import FormSectionContent from '../FormSectionContent/FormSectionContent';

class FormSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      detailOpen: false,
    };
    this.onClickFormDetail = this.onClickFormDetail.bind(this);
  }

  onClickFormDetail() {
    this.setState({ detailOpen: !this.state.detailOpen});
  }

  render() {
    const { title, line1, line2, detail, handleChange } = this.props;
    
    return (
      <div className='formSection'>
        <div className='formSectionTop'>
          <div className='formSectionLeft'>
            <div className='formSectionTitle'>{title.toUpperCase()}</div>
            <div className='formSectionContent'>
              <div className='line1'>{line1}</div>
              <div className='line1'>{line2}</div>
            </div>
          </div>
          <div
            className='formDetail'
            onClick={this.onClickFormDetail}
          > > </div>
        </div>

        { detail && this.state.detailOpen ? (
          <div className='formSectionBottom'>
            <FormSectionContent detail={detail} handleChange={handleChange} />
          </div>
        ) : null }

      </div>
    );
  }
};

export default FormSection;