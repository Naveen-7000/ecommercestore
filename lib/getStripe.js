import {loadStripe} from '@stripe/stripe-js';

let stripPromise;

const getStripe = () => {
    if(!stripPromise){
        stripPromise = loadStripe(`${process.env.NEXT_STRIPE_PUBLISH_KEY}`);
    }
    return stripPromise;
}

export default getStripe;