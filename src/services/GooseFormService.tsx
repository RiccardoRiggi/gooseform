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



const gooseFormService = {
    getGooseForm,
    getSingleComponent,
    getSingleStandardControl,
    getSingleComplexControl

};
export default gooseFormService;