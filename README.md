#### Project Description
Create an html page that has a div. The div is a checkout container. It will make call to backend upon init, and the init will open up a modal. The user will interact with the modla and submit to comeback to the main window. When comeing back, the close action will be calling onSuccess function. 


#### Required file

  * checkout.html
```
<body>
<div id="payment-container"></div>
</body>
```

#### SPECS
- What: payment widget 
- How: open the widget in a modal
  * [       [payment form]] /// not this case
  * [] ---> pop up a modal -> [payment form] /// this is the case that we want

 * functionality description (Psudo code)

```
<script>  
  var initOptions = {
      containerId: ‘payment-container', // mandatory
      callbacks: {//mandatory
          onSuccess: function (result) { //mandatory
              console.log(‘Payment successful.', result);
              // result will be token (hard code the token)
          }
          onPaymentCancel : function (result) { //mandatory
              console.log(‘Payment cancel.', result);
          }
      }
  };
  window.payment.init(initOptions);    
</script>
```

- Frontend Details
  * widget will have a form
  * the form will have an init function
  * init will be executed in the containter div
  * inside init, return the function that is returned from callback
  * payment widget will have a submit button
  * upon success, close the modal and display something to the main window
  * upon failure, it will just cancel payment, display the failure somehow
  * When someone close modal without submit, it will do "on cancel"
     - what on cancel does is not important
  * make sure to have it "design friendly"
     - payment UI team -> two backend, two frontend -> lack 1-2 ppl for "pixel perfect UI"
  
- Backend Details
  * simulate backend for my app so that backend will return the string ID
  * hardcode backend responses (the success, failure)
  * app calls backend, backend gives you success/failure responses
  * when success, it will return from the caller the token

- Other
  * hardcode as much as possible as long as it can show ui and JS skills
  * for interactoins, both JS and CSS are acceptable as long as they look good
  * It is OK to use frameworks like React
  
#### How to showcase the end result
  * deadline: till Monday or Tuesday quick demo
  * 5 -10 mins demo, screen shot needed
  * email --- amuaydh@apple.com  --- to set up a meeting
  * soo's email --- sparkstacks@gmail.com


#### Available Scripts
In the project directory, you can run:

##### `make clean-start`
One-stop command to delete all build files, rebuild avoiding known bugs, and start the app

##### `make stop-app`
Kills application server

Also, clean, build, avoid-error, and start available. See Makefile for description on each.

#### Resources
  * https://www.apple.com/apple-pay/
  * https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/introduction/
  * https://developer.apple.com/documentation/businesschatapi/messages_sent/interactive_messages/apple_pay_in_business_chat/sending_an_apple_pay_payment_request
  * https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/requesting_an_apple_pay_payment_session
