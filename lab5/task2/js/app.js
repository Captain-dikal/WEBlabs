var cashbox = {
  amount: 0,
  addPayment: function(payment) {
    if(payment.amount < 0) {
      console.error('amount not affected');
    } else {
      this.amount = this.amount + payment.amount;
      console.log('cashbox amount = ' + this.amount);
    }
  },
  refundPayment: function(refund) {
    if(this.amount >= refund.amount) {
      this.amount = this.amount - refund.amount;
      console.log('cashbox amount = ' + this.amount);
    } else {
      console.warn('cashbox amount not affected');
    }
  },
};

cashbox.addPayment({ amount: -10, info: 'Оплата штрафа'}); // show error (console), amount not affected
cashbox.addPayment({  amount: 10,  info: 'Оплата ЖКХ' }); // cashbox amount = 10

cashbox.refundPayment({  amount: 10,  info: 'Возврат клиенту' }); // cashbox amount = 0
cashbox.refundPayment({  amount: 10,  info: 'Возврат клиенту' }); // cashbox amount not affected (warning)

