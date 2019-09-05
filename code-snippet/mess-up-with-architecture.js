<div>
  {
    this.props.status === 'delivery' && this.props.shippingMethod !== 'convenient_store'
      ? this.props.role === 'buyer'
        ? this.props.payment.method === 'credit_card'
          ? <div>I'm Re-Architectured!🥰</div>
          : <div>I'm still pretty confusing</div>
        : <div>but why not</div>
      : this.props.role === 'seller'
        ? // render seller views
        : // some other views
  }
  {
    this.props.status === 'payment' && ...other logic
    ? // render seller views
    : // render buyer views
}
</div>