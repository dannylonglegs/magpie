import { PayPalButton } from "react-paypal-button-v2";

export default function PayButton() {
  return (
    <PayPalButton
      amount="0.01"
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      createOrder={function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              description:
                "Enroll for our 6-week term. Enrollment gives you 40 minutes of class time and 20 minutes of private tutoring per week",
              amount: { currency_code: "TWD", value: 6000 },
            },
          ],
        });
      }}
      onSuccess={(details, data) => {
        alert("Transaction completed by " + details.payer.name.given_name);

        // OPTIONAL: Call your server to save the transaction
        return fetch("/paypal-transaction-complete", {
          method: "post",
          body: JSON.stringify({
            orderID: data.orderID,
          }),
        });
      }}
    />
  );
}
