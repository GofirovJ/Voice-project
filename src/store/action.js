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