export default function buildURL(url, options) {
    let link = [url + '?'];
    let parameters = [];

    Object.keys(options).forEach((el) => {
        parameters.push(el + '=' + options[el]);
    });

    return link.concat(parameters.join('&')).join('');
}
