/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloGCS = (event, context) => {
    console.log(`event:${JSON.stringify.apply(event)}`)
    console.log(`context:${JSON.stringify.apply(context)}`)
}