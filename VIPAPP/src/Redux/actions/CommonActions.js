

export const rent =(store)=>{
    return dispatch =>{
        dispatch(
            {
             type:"detailsData",
             detailsdata:store
            }
        )
    }
}

export const service=(store)=>{
    return dispatch =>{
        dispatch(
            {
                type:"servicedata",
                servicedata:store
            }
        )
    }
}