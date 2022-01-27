import axios from "axios"

export const axiosCall = async (verb, url, params) => {
  try {
    const response = await axios[`${verb}`](url, params)
    return response
  } catch (error) {
    console.log(error, "there was an error while processing data with the api")
  }
}
