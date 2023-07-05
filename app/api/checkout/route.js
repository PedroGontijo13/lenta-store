import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const POST = async (request) => {
  const body = await request.json();

  if (body.lineItems.length === 0) {
    return NextResponse.json({ error: 'No line items provided' }, { status: 400 });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
      apiVersion: '2022-11-15',
    });

    const session = await stripe.checkout.sessions.create({
      success_url: 'https://lenta-store.vercel.app/sucess',
      cancel_url: 'https://lenta-store.vercel.app/cancel',
      line_items: body.lineItems,
      mode: 'payment', // Switch to subscription mode
    });

    return NextResponse.json({ session });
  } catch (error) {
    console.log('Error:', error);
    return NextResponse.json({ error: 'Failed to create Stripe checkout session' }, { status: 500 });
  }
};

export default { POST };
