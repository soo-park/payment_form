import React from 'react';
import { debounce } from 'lodash';
import FormLine from '../FormLine/FormLine';

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
    return fetch('./fakeResponse.json', new Headers({
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
    const paymentInfo = ['First Name', 'Last Name', 'Payment Number', 'Security Code'];
    const address = ['Line1', 'Line2', 'City', 'State', 'Zip', 'Country'];

    return (
      <div className='paymentForm'>
        <div className='sectionTitle'>Payment</div>
        <div className='sectionContent'>
          {
            paymentInfo.map((title, i) => {
              return <FormLine
                key={title}
                name={`${title.toLowerCase()}${i}`}
                title={title}
                handleChange={e => { e.persist(); this.handleChange(e); }}
              />
            })
          }
        </div>
        <div className='sectionTitle'>Billing Address</div>
          <div className='sectionContent'>

            {
              address.map((title, i) => {
                return <FormLine
                  key={title} 
                  index={i} title={title}
                  handleChange={e => { e.persist(); this.handleChange(e); }}
                />
              })
            }
          </div>
        <button className='formSubmit' onClick={this.onSubmitHander}>submit</button>
      </div>
    );
  };
};

export default PaymentFormContent;
