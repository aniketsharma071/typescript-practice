type ApiResponse<T = string> = {
    data: T
    success: boolean
}

let response: ApiResponse<number> = {
    data: 42,
    success: true
}
console.log(response);

let defaultResponse: ApiResponse = {
    data: "Default data",
    success: true
}
console.log(defaultResponse);