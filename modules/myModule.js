// We can create modules in nuxt.
export default function ExampleModule(moduleOptions) {
    console.log(moduleOptions.token);
    console.log(this.options.exampleMsg);

    this.nuxt.hook('ready', async nuxt => {
        console.log('Nuxt is ready.'); // When nuxt is ready print this statement inside console log.
    });
}

// module.exports.meta = require('./package.json');