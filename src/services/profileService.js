import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/profiles/`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

export { getAllProfiles }

// export const getAllProfiles = async () => {
//   try {
//     const res = await fetch (`${BASE_URL}`)
//     return await res.json()
//   } catch (error) {
//     throw error
//   }
// }