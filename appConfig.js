export const PORT_DEFAULT_API   = 8888;
export const URL_BASE_LOCAL =`http://localhost:${PORT_DEFAULT_API}`
export const PATH_API_RELATIVE  = `/4537/termproject/api/v1`
export const PATH_API_ABSOLUTE  = `${URL_BASE_LOCAL}${PATH_API_RELATIVE}`

const appConfig = {
    PORT_DEFAULT_API,
    URL_BASE_LOCAL,
    PATH_API_RELATIVE,
    PATH_API_ABSOLUTE
};

export default appConfig