/**
 * Created by gssl on 15-12-10.
 */
requirejs.config({
    baseUrl: 'JS/lib',
    paths: {
        jquery: "jquery-1.11.3.min",
        animation: "MyAnimation"
    },
    urlArgs: "bust=" +  (new Date()).getTime()
});