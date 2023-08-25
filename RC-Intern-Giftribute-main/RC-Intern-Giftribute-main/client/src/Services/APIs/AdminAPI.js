import { commonrequest }  from "../APIcall";
import { BACKEND_URL } from "../helper";


export const addProduct = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/admin/add-product`, data)
}

export const removeProduct = async(data) => {
    return await commonrequest("POST", `${BACKEND_URL}/admin/remove-product`, data)
}
