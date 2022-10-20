import http from "../http-common";

const getGooseForm = () => {
    return http.get("/");
}

const getSingleComponent = (path: any) => {
    return http.get("/componenti/"+path);
}

const getSingleStandardControl = (path: any) => {
    return http.get("/controlli/standard/"+path);
}

const getSingleComplexControl = (path: any) => {
    return http.get("/controlli/complex/"+path);
}

const getFormExample = (nomeComponente: any, tipoGenerale: any, tipoSpecifico: any) => {
    return http.get("/"+nomeComponente+"/"+tipoGenerale+"/"+tipoSpecifico);
}



const gooseFormService = {
    getGooseForm,
    getSingleComponent,
    getSingleStandardControl,
    getSingleComplexControl,
    getFormExample

};
export default gooseFormService;