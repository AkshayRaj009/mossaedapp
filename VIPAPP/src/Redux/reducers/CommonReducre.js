const initialState={
    detailsdata: [],
    service:[]
}
export default (state = initialState, action) => {
    switch (action.type) {
      case "detailsData":
        return {
            ...state,
            detailsdata:action.detailsdata
        }
        case "serviceData":
            return {
                ...state,
                service:action.service
            }
        default:
            return state;
      
    }
};