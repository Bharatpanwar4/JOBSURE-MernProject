import UnAuthenticatedError from "../errors/unauthenticated.js";
import jwt from "jsonwebtoken";

const auth = async (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        throw new UnAuthenticatedError('Authentication Invalid')
    }
//     const authHeader = req.headers.authorization
    
//     console.log(authHeader);
// if(!authHeader || !authHeader.startsWith("Bearer")){
//     throw new UnAuthenticatedError('Authentication Invalid')
// }
// const token  =authHeader.split(' ')[1]
try {
    const payload = jwt.verify(token,process.env.JWT_SECRET)
const testUser = payload.userId === '64b650ef712af107487752ca';
req.user = {userId: payload.userId, testUser}

    next()

} catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid')
    
}
}
export default auth