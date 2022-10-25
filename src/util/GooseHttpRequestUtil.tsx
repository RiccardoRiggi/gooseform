import axios from "axios";
import { GooseHttpRequest } from "../type/GooseHttpRequest";
import { GooseKeyValue } from "../type/GooseKeyValue";


export default async function GooseHttpRequestUtil(input: any) {

    let request: GooseHttpRequest = input;


    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.open(request.method, request.url, false); // false for synchronous request
    {
        request.headers.map((componente: GooseKeyValue) =>
            xmlHttp.setRequestHeader(componente.key, componente.value)
        )
    }
    xmlHttp.send(request.body);
    

    let risposta = xmlHttp.responseText;

    return risposta;


}