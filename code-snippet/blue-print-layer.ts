switch(progress) {
  case 'payment':
    return (
      <section>
        <NotificationHost>{NotifySellerPleaseWaitForPayment}</NotificationHost>
        <SideLinkPanel>
          {LinkForGuide}
          {LinkFAQ}
        </SideLinkPanel>
        {SelectPaymentMethods}
      </section>
    );
  case 'delivery':
    return (
      <section>
        <NotificationHost>{NotifySellerPleaseShip}</NotificationHost>
        <SideLinkPanel>
          {LinkForDeliveryGuide}
        </SideLinkPanel>
        {ProgressBar}
        <CommentBox />
        {TransactionInformation}
      </section>
    );
    // ...
}