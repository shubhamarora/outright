// convert UserName to user_name
export const snakeCase = (str) => {
    return str.replace(/(?:^|\.?)([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "");
}