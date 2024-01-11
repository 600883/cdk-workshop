exports.handler = async function(event) {
    console.log("request:" , JSON.stringify(event, undefined, 2));
    return {
        statuscode: 200,
        headers: { "Content-Type": "text/plain"},
        body: `Good night everyone, CDK! You have hit ${event.path}\n`
    
    };
};