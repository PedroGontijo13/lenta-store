import { NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (request) => {
  const body = await request.json();

  if (body.lineItems.length === 0) {
    return new Response("Error", {
      status: 405,
    });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2022-11-15",
    });

    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/sucess",
      cancel_url: "http://localhost:3000/cancel",
      line_items: body.lineItems,
      mode: "subscription", // Update the mode to 'subscription' if using recurring prices, or 'payment' if using one-time prices
    });

    return NextResponse.json({ session });
  } catch (error) {
    console.log("BROKED");
    console.log(error);
    return new Response("Error", {
      status: 405,
    });
  }
};

export default POST;