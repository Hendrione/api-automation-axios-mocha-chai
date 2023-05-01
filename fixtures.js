import userControllerAPI from "./api/user-controller.js"

export async function mochaGlobalSetup() {
  let response = await userControllerAPI.deleteAlluser()
  if(response.status === 200){
    console.log("successfully remove data")
  }else{
    console.log("failed to remove data")
  }
}