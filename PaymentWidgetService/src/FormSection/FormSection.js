import React from 'react';
import FormLine from '../FormLine/FormLine';

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
    const { title, line1, line2, detail } = this.props;
    
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
            <div className='sectionContent'>
            {
              detail.map((title, i) => {
                return <FormLine
                  key={title}
                  name={`${title.toLowerCase()}${i}`}
                  title={title}
                  handleChange={e => { e.persist(); this.handleChange(e); }}
                />
              })}
            </div>
          </div>
        ) : null }

      </div>
    );
  }
};

export default FormSection;