const {Users} = require('../models');
const RESPONSE_MESSAGES = require('../config/response-messages')
const user = {
   saveUserDetails: async (userData)=>{
    try{
         await Users.create(userData);
         return {
            status: RESPONSE_MESSAGES.SUB_ADMIN_SIGNUP.SUCCESS.STATUS_CODE,
            data: { msg: RESPONSE_MESSAGES.SUB_ADMIN_SIGNUP.SUCCESS.MSG },
        };
    }
    catch(err){
        throw err;
    }
}
}

module.exports = {
    user
}