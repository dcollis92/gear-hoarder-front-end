// stylesheet

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Services
import { getOne } from '../../services/amps'

// Components
import AmpInput from './AmpInput'

// Image Assets

const AmpForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateAmp(form) : props.addAmp(form)
    navigate('/amps')
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const ampData = await getOne(id)
      setForm({
        id: ampData.id,
        type: ampData.type,
        make: ampData.make,
        model: ampData.model,
        wattage: ampData.wattage,
        speaker_size: ampData.speaker_size,
        speaker_amount: ampData.speaker_amount,
        power_type: ampData.power_type,
        ohm_rating: ampData.ohm_rating,
        color: ampData.color,
        year: ampData.year,
        description: ampData.description,
        is_working: ampData.is_working,
        on_loan: ampData.on_loan,
      })
    }
    id ? fetchOne() : setForm({ color: '#ff0000' })
    return () => setForm({})
  }, [id])

  return (
    <>
      <div className="page-header">
      {id
          ? <h1>Edit Amp</h1>
          : <>
            <h1>Add Amp</h1>
            {/* <img src={} alt="" /> */}
            </>
        }
      </div>
      
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <AmpInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
    </>
  )
}

export default AmpForm