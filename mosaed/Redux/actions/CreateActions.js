import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../screens/Api";

// HomeScreen
export const HomeData = () => {
    return async dispatch => {
        const value = await AsyncStorage.getItem('token')
        console.log("tok", value)
        await fetch(`${api}home`, { method: "GET", headers: { authorization: value } }).then((response) => response.json()).then((data) => {
            console.log('Request succeeded with JSON response', data)
            console.log("response==", data.data)
            dispatch(
                {
                    type: 'Homedata',
                    data: data.data
                }
            )
        }
        )
            .catch((error) =>
                console.log('Request failed', error)
            )
    }
}

// WorkersScreen
export const Workers = () => {
    return async dispatch => {
        const value = await AsyncStorage.getItem('token')
        console.log("tok", value)
        await fetch(`${api}workers`, { method: "GET", headers: { authorization: value } }).then((response) => response.json()).then((data) => {
            console.log('Request succeeded with JSON response', data)
            console.log("response==", data.data)
            dispatch(
                {
                    type: "WorkersData",
                    workersdata: data.data
                }
            )
        }
        )
            .catch((error) =>
                console.log('Request failed', error)
            )
    }
}


// ComapnyScreen
export const Company = () => {
    return async dispatch => {
        const value = await AsyncStorage.getItem('token')
        console.log("tok", value)
        await fetch(`${api}companies`, { method: "get", headers: { authorization: value } }).then((response) => response.json()).then((data) => {
            console.log('Request succeeded with JSON response', data)
            dispatch(
                {
                    type: "company",
                    companyData: data.data

                }
            )
        }
        )
            .catch((error) =>
                console.log('Request failed', error)
            )
    }
}

// LoginScreen
export const register = (number) => {
    return dispatch => {
        fetch(`${api}sendotp`, { method: "post", body: JSON.stringify(number), headers: { "Content-type": "application/json" } }).then((response) => response.json()).then((data) => {
            console.log('Request succeeded with JSON response', data)
            dispatch(
                {
                    type: "Login",
                    logindata: data.data
                }
            )
        }
        )
            .catch((error) =>
                console.log('Request failed', error)
            )
    }
}

// verifyotp
export const verifydata = (sumbitotp) => {
    return dispatch => {
        fetch(`${api}verifyotp`, { method: "post", body: JSON.stringify(sumbitotp), headers: { "Content-type": "application/json" } }).then((response) => response.json())
            .then(async (data) => {
                await AsyncStorage.setItem('token', JSON.stringify(data.data.token))
                console.log('Request succeeded with JSON response', data)
                dispatch(
                    {
                        type: "Verify",
                        Verifydata: data.data
                    }
                )
            }
            )
            .catch((error) =>
                console.log('Request failed', error)
            )
    }
}

// SponsorshipScreen

export const Sponsorship = (store)=>{
    return dispatch =>{
        dispatch(
            {
                type:"details",
                detailsdata:store
            }
        )
    }

}

