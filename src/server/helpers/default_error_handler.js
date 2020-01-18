module.exports = function defaultErrorHandler(response) {
    return error => {
        console.error(error);
        const { response: { status = 500 } = {} } = error;
        response.status(status).send(error);
    }
}