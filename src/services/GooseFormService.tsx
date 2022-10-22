import http from "../http-common";

const getGooseForm = () => {
    return http.get("/");
}

const getSingleComponent = (path: any) => {
    return http.get("/componenti/"+path);
}

const getFormExample = (nomeComponente: any, tipoGenerale: any, tipoSpecifico: any) => {
    return http.get("/documentazione/"+nomeComponente+"/"+tipoGenerale+"/"+tipoSpecifico);
}

const getEsempio = (path: any) => {
    return http.get("/documentazione/"+path);
}



const gooseFormService = {
    getGooseForm,
    getSingleComponent,
    getFormExample,
    getEsempio

};
export default gooseFormService;