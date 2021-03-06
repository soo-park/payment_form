import React from 'react';
import { debounce } from 'lodash';
import FormSecton from '../FormSection/FormSection';
import { paymentSelection, invoice } from '../_MockData/paymentMockData';

class PaymentFormContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: {},
    }
    this.onSubmitHander = this.onSubmitHander.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = debounce((e) => {
    this.setState({ formInput: {
      ...this.state.formInput,
      [e.target.name]: e.target.value,
    }});
  }, 100);

  getData(formInput) {
    return fetch('./json/fakeResponse.json', new Headers({
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formInput),
    }));
  }

  onSubmitHander = async e => {
    e.preventDefault();
    try {
      let data = await (await this.getData(this.state.formInput)).json();
      // may not want to clear if there is other data in localStorage
      localStorage.clear();
      // localStorage event invokes event if no CORS
      localStorage.setItem('paymentToken', data.token);
      console.log(this.state.formInput);
      console.log('Payment successful.', localStorage.paymentToken);
      // line below will only work with CORS off on browser
      window.parent.document.getElementsByClassName('modal')[0].style.display = 'none';
      this.props.onCloseModal(); // to sync React state with above action
    } catch (err) {
      // SPEC for the project specified to ignore error handlings
      // console.log(err);
    }
  };

  render() {
    return (
      <div className='paymentForm'>
        <div className='sectionTitle'>{this.icon ? this.icon : null}</div>
        <div className='formSection'>

          {
            Object.keys(paymentSelection).map(x => 
              <FormSecton
                key={x}
                {...paymentSelection[x]}
                handleChange={this.handleChange}
              />
            )
          }
        </div>

        <div className='invoice'>
          {
            Object.keys(invoice).map(x => 
              <div key={x} className='invoiceItem'>
                <div className='costType'>{x}</div>
                <div className='costAmount'>{invoice[x]}</div>
              </div>
          )}
          <div className='invoiceItem total'>
            <div className='costType'>TOTAL</div>
            <div className='costAmount'>$422.10</div>
          </div>
        </div>

        <button
          className='formSubmit'
          onClick={this.onSubmitHander}
        >submit</button>
      </div>
    );
  };
};

export default PaymentFormContent;
