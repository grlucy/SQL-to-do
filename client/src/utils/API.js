import axios from "axios";

export default {
  getAllTodos: function () {
    return axios.get(`/api/list`);
  },

  deleteOneTodo: function (id) {
    return axios.delete(`/api/${id}`);
  },

  updateStatus: function (status, id) {
    return axios.put(`/api/status/${status}/id/${id}`);
  },
};
