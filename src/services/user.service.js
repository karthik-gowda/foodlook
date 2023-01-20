import axios from "axios";

const API_URL = "https://foodlookbackend.onrender.com/api/test/";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + "all");
    }
}

export default new UserService();
