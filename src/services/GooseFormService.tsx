import http from "../http-common";

const getGooseForm = () => {
    return http.get("/");
}

const getSingleComponent = (path: any) => {
    return http.get("/componenti/"+path);
}



const gooseFormService = {
    getGooseForm,
    getSingleComponent

};
export default gooseFormService;