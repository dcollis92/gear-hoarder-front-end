import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ProfileDetails.css'

import { getOne } from '../../services/profileService'

const ProfileDetails = (props) => {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)
  

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setProfile(data.profile)
    }
    fetchOne()
  }, [id])

  return (
    profile &&
    <>
      <section className="profile-details-container">
        <div className="profile-details">
          <h1>Profile</h1>

        </div>
      </section>
    </>
  )
}

export default ProfileDetails