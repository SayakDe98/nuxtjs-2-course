// If we want something to happen before of my application
// Then use a middleware.

export default function({ redirect, next }) { // we can use ctx everywhere in nuxt
    console.log("I don't want you to enter this page.");
    next(); // go to the next page using the next function.
    // redirect('/'); // go to main page if we enter here
}