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
    navigate(`/amps`)
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.amp.id,
        type: data.amp.type,
        make: data.amp.make,
        model: data.amp.model,
        wattage: data.amp.wattage,
        speakerSize: data.amp.speaker_size,
        speakerAmount: data.amp.speaker_amount,
        powerType: data.amp.power_type,
        ohmRating: data.amp.ohm_rating,
        color: data.amp.color,
        year: data.amp.year,
        description: data.amp.description,
        isWorking: data.amp.is_working,
        onLoan: data.amp.on_loan
      })
    }
    id && fetchOne()
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