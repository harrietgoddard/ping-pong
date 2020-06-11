import axios from "axios";

export default axios.create({
    baseURL: "https://restful.training/api/ping-pong/games",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer 8D8uRNyDTUchSI3CeJi9WqAqFDZ5OCcrYtWh43VsmCYfVzd1CbOVNKZH8NfMNzBSGMjDJDMWBJsfQiGc",
    },
});