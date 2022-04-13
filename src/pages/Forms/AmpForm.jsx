// stylesheet
import '../../styles/Form.css'
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
    const formData = {
      id: form.id,
      type: form.type,
      make: form.make,
      model: form.model,
      wattage: form.wattage,
      speaker_size: form.speakerSize,
      speaker_amount: form.speakerAmount,
      power_type: form.powerType,
      ohm_rating: form.ohmRating,
      color: form.color,
      year: form.year,
      description: form.description,
      is_working: form.isWorking,
      on_loan: form.onLoan

    }
    id ? props.updateAmp(formData) : props.addAmp(formData)
    navigate(`/amps`)
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
        speakerSize: ampData.speaker_size,
        speakerAmount: ampData.speaker_amount,
        powerType: ampData.power_type,
        ohmRating: ampData.ohm_rating,
        color: ampData.color,
        year: ampData.year,
        description: ampData.description,
        isWorking: ampData.is_working,
        onLoan: ampData.on_loan
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