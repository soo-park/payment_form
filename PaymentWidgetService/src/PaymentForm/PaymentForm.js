import React from 'react';
import PaymentFormContent from '../PaymentFormContent/PaymentFormContent';

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
      <div>
        <button onClick={this.onButtonClick.bind(this)}> Payment </button>
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
