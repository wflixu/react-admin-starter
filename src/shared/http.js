import { HttpClient } from 'obfetch';

const http = new HttpClient({
    baseURL: 'http://127.0.0.1:8443'
});
  

export {
    http
}