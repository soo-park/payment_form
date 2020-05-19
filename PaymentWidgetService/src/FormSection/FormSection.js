import React from 'react';
import FormSectionContent from '../FormSectionContent/FormSectionContent';
import cheveron from '../static/img/right-thin-chevron-svgrepo-com.svg';


class FormSection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      detailOpen: false,
      detail: {},
    };
    this.onClickFormDetail = this.onClickFormDetail.bind(this);
  }

  componentDidMount() {
    this.setState({ detail: this.props.detai});
  }

  onClickFormDetail() {
    this.setState({ detailOpen: !this.state.detailOpen});
  }

  render() {
    const { title, line1, line2, detail, handleChange } = this.props;
    
    return (
      <div className='formSection'>
        
        {/* pre-selected data */}
        <div className='formSectionTop'>

          <div className='formSectionLeft'>
            <div className='formSectionTitle'>{title.toUpperCase()}</div>
            <div className='formSectionLines'>
              <div className='line1'>{line1}</div>
              <div className='line2'>{line2}</div>
            </div>
          </div>

          <div
            className={`formDetail ${this.state.detailOpen ? 'open': null}`}
            onClick={this.onClickFormDetail}
          >
            <svg width="15" height="15" xmlns="./img/Apple_Pay_Mark_RGB_041619.svg">       
              <image href={cheveron} height="15" width="15"></image>
            </svg>
          </div>

        </div>

        {/* form input fields */}
        { detail && this.state.detailOpen ? (
          <FormSectionContent detail={detail} handleChange={handleChange} />
        ) : null }

      </div>
    );
  }
};

export default FormSection;