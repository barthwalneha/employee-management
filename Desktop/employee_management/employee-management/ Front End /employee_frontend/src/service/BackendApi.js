
import axiosInstance from "./Service"
class BackendApi{

   async save(emp){
      return await axiosInstance.post("/add",emp)
    }

    async get(id){
       return await axiosInstance.get(`${id}`)
    }

    async delete(id){
      return  await axiosInstance.delete(`/delete/${id}`)
    }

    async findEmployeeById(id){
       return await axiosInstance.findEmployeeById(`${id}`)
    }

    async getAllEmployeeList(){
      return await axiosInstance.get("getAll")
    }
      
}

export default new BackendApi()