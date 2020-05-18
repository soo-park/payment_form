export const type = {
  'First Name': { type: 'input' },
  'Last Name': {type: 'input' },
  'Payment Number':  { type: 'input' },
  'Line1':  { type: 'input' },
  'Line2':  { type: 'input' },
  'City':  { type: 'input' },
  'State':  { type: 'input' }, 
  'Zip':  { type: 'input' },
  'Country':  { type: 'input' },
  'EXPRESS SHIPPING': {type: 'radio'},
  'STANDARD SHIPPING':  {type: 'radio'},
}

export const paymentInfo = [
  'First Name',
  'Last Name',
  'Payment Number',
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