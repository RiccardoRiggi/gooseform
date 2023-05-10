import http from "../http-common";
import httpDynamic from "../http-dynamic";

import { GooseHttpRequest } from "../type/GooseHttpRequest";

const getGooseForm = () => {
    return http.get("/");
}

const getSingleComponent = (path: any) => {
    return http.get("/documentazione/componenti/" + path);
}

const getFormExample = (nomeComponente: any, tipoGenerale: any, tipoSpecifico: any) => {
    return http.get("/documentazione/" + nomeComponente + "/" + tipoGenerale + "/" + tipoSpecifico);
}

const getEsempio = (path: any) => {
    return http.get("/documentazione/" + path);
}

const eseguiChiamataGet = (chiamataHttpTmp: GooseHttpRequest) => {

    let headersTmp: any = {};

    for (let c = 0; c < chiamataHttpTmp.headers.length; c++) {
        headersTmp[chiamataHttpTmp.headers[c].key] = chiamataHttpTmp.headers[c].value;
    }

    let settings = {
        headers: headersTmp
    }
    return httpDynamic.get(chiamataHttpTmp.url, settings);
}

const eseguiChiamataPost = (chiamataHttpTmp: GooseHttpRequest, jsonBody: any) => {

    let headersTmp: any = {};

    for (let c = 0; c < chiamataHttpTmp.headers.length; c++) {
        headersTmp[chiamataHttpTmp.headers[c].key] = chiamataHttpTmp.headers[c].value;
    }

    let settings = {
        headers: headersTmp
    }
    return httpDynamic.post(chiamataHttpTmp.url, jsonBody, settings);
}

const eseguiChiamataPut = (chiamataHttpTmp: GooseHttpRequest, jsonBody: any) => {

    let headersTmp: any = {};

    for (let c = 0; c < chiamataHttpTmp.headers.length; c++) {
        headersTmp[chiamataHttpTmp.headers[c].key] = chiamataHttpTmp.headers[c].value;
    }

    let settings = {
        headers: headersTmp
    }
    return httpDynamic.put(chiamataHttpTmp.url, jsonBody, settings);
}

const gooseFormService = {
    getGooseForm,
    getSingleComponent,
    getFormExample,
    getEsempio,
    eseguiChiamataGet,
    eseguiChiamataPost,
    eseguiChiamataPut

};
export default gooseFormService;