export const get_all_user = (allUsers) => {
    return {
       type: "GET_ALL_USERS",
       allUsers,
    }; 
 };
export const code_of_user = (code) => {
    return {
       type: "CODE",
       code,
    }; 
};
export const get_verified_user = (verifiedUsers) => {
   return {
      type: "GET_VERIFIED_USERS",
      verifiedUsers,
   }; 
};
export const get_paid_user = (paidUsers) => {
   return {
      type: "GET_PAID_USERS",
      paidUsers,
   }; 
};
export const get_projects = (projects) => {
   return {
      type: "GET_PROJECTS",
      projects,
   }; 
};
export const phone_of_user = (phoneNumber) => {
   return {
      type: "PHONE_NUMBER",
      phoneNumber,
   }; 
};
export const id_of_user = (userId) => {
   return {
      type: "ID",
      userId,
   }; 
};
export const notify = (notify) => {
   return {
      type: "NOTIFY",
      notify,
   }; 
};
export const get_admins = (admins) => {
   return {
      type: "GET_ADMINS",
      admins,
   }; 
};