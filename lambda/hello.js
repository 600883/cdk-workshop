exports.handler = async function(event) {
    console.log("request:" , JSON.stringify(event, undefined, 2));
    return {
        statuscode: 200,
        headers: { "Content-Type": "text/plain"},
        body: `Good Afternoon, CDK! You have hit ${event.path}\n`
    
    };
};