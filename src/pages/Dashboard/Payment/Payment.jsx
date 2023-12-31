import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_publishableKey);

const Payment = () => {
	const { state } = useLocation();
	// console.log(state?.Class);

	return (
		<div className="w-1/2">
			<Elements stripe={stripePromise}>
				<CheckoutForm Class={state?.Class} />
			</Elements>
		</div>
	);
};

export default Payment;
