import axios from "axios";

export default {
  getAllTodos: function () {
    return axios.get(`/api/list`);
  },
};
