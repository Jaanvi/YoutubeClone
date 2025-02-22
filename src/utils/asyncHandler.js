const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
    }
}


export{asyncHandler}

// const asyncHandler=()=>{}
// const asyncHandler=(fun)=>()=>{}
// const asyncHandler=(fun)=>async()=>{}

/*by usind try catch
const asyncHandler=(fn)=>async(requestAnimationFrame,response,next)=>{
    try{
        await fn(requestAnimationFrame,response,next)
    }
    catch(error){
        response.status(error.code || 500).json({
            sucess:false,
           message:error.message
       })
    }
}  
*/    