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



const gooseFormService = {
    getGooseForm,
    getSingleComponent,
    getSingleStandardControl

};
export default gooseFormService;