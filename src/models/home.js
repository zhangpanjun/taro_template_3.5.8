
const home = {
  namespace: 'home',
  state: {
    status: false,
  },

  reducers: {
    changeStatus(state, { payload }) {
      return {
        ...state,
        status: payload,
      };
    },
  },
};

export default home;
