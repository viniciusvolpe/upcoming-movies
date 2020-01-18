module.exports = function defaultErrorHandler(response) {
    return error => {
        const { response: { status = 500 } = {} } = error;
        response.status(status).send(error);
    }
}