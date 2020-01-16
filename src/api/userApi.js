import 'whatwg-fetch'; 
import getBaseURL from './baseURL';

const baseURL = getBaseURL(); 


export function getUsers() {
    return get('users');
}

export function deleteUsers(id) {
    return del('Users/${id}');
}

function get(url){
    return fetch(baseUrl + url).then(onSuccess, onError);
}
// Can't call func delete since reserved word.
function del(url){
    const request = new Request(baseURL + url, {
        method: 'DELETE'
    });
    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}
