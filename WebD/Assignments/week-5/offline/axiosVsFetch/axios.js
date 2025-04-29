const axios = require("axios");

/*async function main(){

    const response = await axios.get("https://sum-server.100xdevs.com/todos");

    console.log(response.data.todos.length);
}
*/
async function main(){
const response = await axios(
    {
        url: "https://httpdump.app/dumps/dc58b238-0d8d-4c5c-987d-1cbab87aae18",
        method: "PUT",
        headers: {
            Authorization: "Bearer 123",
        },

        data: {
            username: "Gurnoor"
        }

    },
);
    console.log(response.headers);
}
main();