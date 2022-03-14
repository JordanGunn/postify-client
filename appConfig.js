export const DEFAULT_PORT   = 8080;
export const URL_BASE_LOCAL =`http://localhost:${DEFAULT_PORT}`
export const PATH_API_RELATIVE  = `/4537/termproject/api/v1/`
export const PATH_API_ABSOLUTE  = `${URL_BASE_LOCAL}${PATH_API_RELATIVE}`

const appConfig = {
    DEFAULT_PORT,
    URL_BASE_LOCAL,
    PATH_API_RELATIVE,
    PATH_API_ABSOLUTE
};

export default appConfig