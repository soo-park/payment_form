(function (window) {
  class Payment {
    init(initialOptions) {
      this.components = { document: window.document };
      this._buildDom(this.components.document);
      this._setModalBehavior(this.components);
      this.initialOptions = initialOptions;
    }

    // helper functions. Usually would be separated into a file, but is in same file for simplicity
    _setMultipleAttributes = (el, attrs) => {
      for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    };

    // eslint disabled for enclosed variable definitions
    _throttle = (func, limit) => {
      let inThrottle; // eslint-disable-line
      return function() {
        if (!inthrottle) { // eslint-disable-line
          func.apply(this.arguments);
          inThrottle = true;
          setTimeout(()=> inthrottle = false, limit || 100 ); // eslint-disable-line
        }
      }
    }

    // DOM was js-built on user side to fit the SPEC (see README)
    /* 'buildDom' creates the following dom structure within payment-container
    <button type='submit' class='payment'> Apple Pay</button>
    <div class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>
          <iframe
            class='paymentIframe'
            src="http://localhost:3000/parent-component/clock-component"
            frameBorder='0'
          ></iframe>
        </p>
      </div>
    </div>
    */
    _buildDom = (document) => {
      let App = document.getElementById('payment-container');
      let btn = document.createElement('button');
      let buttonAttributes = {
        type: 'submit',
        class: 'payment',
      };
      this._setMultipleAttributes(btn, buttonAttributes);
      btn.innerHTML = 'Payment';
      App.appendChild(btn);

      let modal = document.createElement('div');
      modal.setAttribute('class', 'modal');
      modal.setAttribute('display', 'hidden');
      App.appendChild(modal);

      let modalContent = document.createElement('div');
      modalContent.setAttribute('class', 'modal-content')
      modal.appendChild(modalContent);

      let close = document.createElement('span');
      close.setAttribute('class', 'close');
      close.innerHTML = `&times;`
      modalContent.appendChild(close);

      let p = document.createElement('p');
      modalContent.appendChild(p);

      // it is possible to overcome CORS issue using broadcasting
      // using dom manipulation with React is anti-pattern, thus it is done on React side for this app
      let ifrm = document.createElement('iframe');
      let ifrmAttrs = {
        class: 'paymentIframe',
        src: "http://localhost:3000/payment",
        frameBorder: '0',
      };
      this._setMultipleAttributes(ifrm, ifrmAttrs);
      p.appendChild(ifrm);

      this.components.btn = btn;
      this.components.modal = modal;
      this.components.close = close;
    };

    // modal behavior to open up/close the payment service modal
    _setModalBehavior() {
      const self = this;
      const { btn, modal, close } = this.components;
      btn.onclick = function() {
        modal.style.display = "block";
        let local = window.localStorage;
        local['test'] = 'testing';
      };

      close.onclick = function(e, result) {
        e.preventDefault();
        self.initialOptions.callbacks['onPaymentCancel'](result || 'fakeErrorResponse');
        modal.style.display = "none";
      };

      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }

      // app side will save the result data into localStorage.paymentToken
      // also would clearn up local storage at some point
      window.addEventListener(
        'storage', 
        this._throttle(e => this.initialOptions.callbacks['onSuccess'](localStorage.paymentToken)),
        false
      );
    }
  }
  window.payment = new Payment();
})(window)
