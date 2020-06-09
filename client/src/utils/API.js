import axios from "axios";

export default {
  getAllTodos: function () {
    return axios.get(`/api/list`);
  },

  deleteOneTodo: function (id) {
    return axios.delete(`/api/${id}`);
  },
};
