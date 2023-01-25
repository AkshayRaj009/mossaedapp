const initialState = {
  data: [],
  workersdata: [],
  companyData: [],
  Verifydata: [],
  detailsdata: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "Homedata":
      return {
        ...state,
        data: action.data
      }

    case "WorkersData":
      return {
        ...state,
        workersdata: action.workersdata
      }

    case "company":
      return {
        ...state,
        companyData: action.companyData
      }

    case "Verify":
      return {
        ...state,
        Verifydata: action.Verifydata
      }
    case "details":
      return {
        ...state,
        detailsdata: action.detailsdata
      }

    default:
      return state;

  }
};