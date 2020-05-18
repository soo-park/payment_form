import React from 'react';
import PaymentFormContent from '../PaymentFormContent/PaymentFormContent';
import logo from '../static/img/Apple_Pay_Mark_RGB_041619.svg';


class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onCloseButton = this.onCloseButton.bind(this);
  }

  onButtonClick() {
    this.setState({ 'modalOpen': !this.state.modalOpen });
  }

  onCloseModal() {
    this.setState({ 'modalOpen': false });
  }

  onCloseButton(e, result) {
    e.preventDefault();
    console.log('Payment cancel.', result || 'fakeErrorResponse');
    this.onCloseModal();
  }

  render() {
    return (
      <div className='fakeUserContainer'>
        <div className='fakeUserHeader'>Mock User Header</div>
        <div className='fakeUserContent'>Mock User Content</div>
        <div className='fakeUserPaymentSelectionBar'>
          <button className='paymentButton mock'></button>
          <button className='paymentButton mock'></button>
          <button className='paymentButton apple' onClick={this.onButtonClick.bind(this)}>
            <svg width="50" height="50" xmlns="./img/Apple_Pay_Mark_RGB_041619.svg">       
              <image href={logo} height="50" width="50"></image>
            </svg>
          </button>
        </div>
        { this.state.modalOpen ? 
          <div className='modal'>
            <div className='modal-content'>
              <span className='close' onClick={e => this.onCloseButton(e)}>&times;</span>
              <PaymentFormContent onCloseModal={this.onCloseModal}/>
            </div>
          </div> :null }
      </div>
    );
  }
};

export default PaymentForm;
