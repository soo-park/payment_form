export const formType = {
  'First Name': { type: 'input', width: 4 },
  'Last Name': {type: 'input', width: 4 },
  'Creditcard Number':  { type: 'input', width: 4 },
  'Security Code': {type: 'input', width: 4},
  'Line1':  { type: 'input', width: 8},
  'Line2':  { type: 'input', width: 8},
  'City':  { type: 'input', width: 4 },
  'State':  { type: 'input', width: 4 }, 
  'Zip':  { type: 'input', width: 4 },
  'Country':  { type: 'input', width: 4 },
  'EXPRESS SHIPPING': {type: 'radio', name: 'shipping', width: 4},
  'STANDARD SHIPPING':  {type: 'radio', name: 'shipping', width: 4 },
}

export const paymentInfo = [
  'First Name',
  'Last Name',
  'Creditcard Number',
  'Security Code',
];

export const address = [
  'Line1',
  'Line2',
  'City',
  'State', 
  'Zip',
  'Country'
];

export const shippingMethod = [
  'EXPRESS SHIPPING',
  'STANDARD SHIPPING'
];

export const paymentSelection = {
  'selectedPayment': {
    title: 'payment',
    line1: 'CHASE FREEDOM (****1234)',
    line2: '638 JEFFERSON STREET, TIBURON, MA, USA',
    detail: paymentInfo,
  },
  'shippingMethod': {
    title: 'Method',
    line1: 'EXPRESS SHIPPING',
    line2: '',
    detail: shippingMethod,
  },
  'merchantContact': {
    title: 'Contact',
    line1: 'J.APPLESEED@ICLOUD.COM',
    line2: '(408) 555-0198',
    detail: address,
  },
};


export const invoice = {
  subtotal: '$379.95',
  shipping: '$14.00',
  tax: '$35.15',
};