console.log('hello');
export default function (ctx, inject) {
    const api = {
        path: '...',
        call() {
            console.log('blablabla');
        }
    }
    ctx.$myCustomPlugin = api;
    inject('m÷yCustomPlugin', api); // we can inject our plugin with our api object
}