<div data-bind="visible: status() === 'delivery' && shippingMethod() !== 'convenient_store'">

  <!-- ko if: role() === 'buyer' -->

    // render buyer views
    <!-- ko if: payment.method() === 'credit_card' -->
    // some other views
    <!-- /ko -->

  <!-- /ko-->

  <!-- ko if: role() === 'seller' -->
    // render seller views
  <!-- /ko-->

</div>

  // different status
  <div data-bind="visible: status() === 'payment' && ...other logic">
  // render seller views
  // ...
  // render buyer views
  </div>