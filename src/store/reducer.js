export const ReducerStore = (
  state = {
    allUsers: [],
    code: "",
    verifiedUsers: [],
    projects: [],
    phoneNumber : "",
    notify: false,
    admins: []
  },
  action
) => {
  if (action.type === "GET_ALL_USERS") {
    return {
      ...state,
      ...action,
    };
  } else if (action.type === "CODE") {
    return {
      ...state,
      code: action.code,
    };
  } else if (action.type === "GET_VERIFIED_USERS") {
    return {
      ...state,
      verifiedUsers: action.verifiedUsers,
    };
  } else if (action.type === "GET_PAID_USERS") {
    return {
      ...state,
      paidUsers: action.paidUsers,
    };
  } else if (action.type === "GET_PROJECTS") {
    return {
      ...state,
      projects: action.projects,
    };
  } else if (action.type === "PHONE_NUMBER") {
    return {
      ...state,
      phoneNumber: action.phoneNumber,
    };
  }
  else if (action.type === "ID") {
    return {
      ...state,
      userId: action.userId,
    };
  }
  else if (action.type === "NOTIFY") {
    return {
      ...state,
      notify: action.notify,
    };
  }
  else if (action.type === "GET_ADMINS") {
    return {
      ...state,
      admins: action.admins,
    };
  }
};
