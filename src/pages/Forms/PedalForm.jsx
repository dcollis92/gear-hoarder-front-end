// stylesheet
import '../../styles/Form.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Services
import { getOne } from '../../services/pedals'

// Components
import PedalInput from './PedalInput'

// Image Assets

const PedalForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ color: '#ff0000', isWorking: "false", onLoan: "false" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
        id: form.id,
        type: form.type,
        make: form.make,
        model: form.model,       
        color: form.color,
        year: form.year,
        description: form.description,
        is_working: form.isWorking === "true" ? false : true,
        on_loan: form.onLoan === "true" ? true : false,
    }
    id ? props.updatePedal(formData) : props.addPedal(formData)
    navigate('/pedals')
  }

  const handleChange = (e) => {
    if (e.target.name === "onLoan" || e.target.name === "isWorking") {
      e.target.value = form[e.target.name] === "true" ? "false" : "true"
    }
    console.log(e.target.value);
    setForm({...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const pedalData = await getOne(id)
      setForm({
        id: pedalData.id,
        type: pedalData.type,
        make: pedalData.make,
        model: pedalData.model,        
        color: pedalData.color,
        year: pedalData.year,
        description: pedalData.description,
        is_working: pedalData.is_working,
        on_loan: pedalData.on_loan,
      })
    }
    id ? fetchOne() : setForm({ color: '#ff0000', isWorking: false, onLoan: false })
    return () => setForm({})
  }, [id])

  return (
    <>
      <div className="page-header">
      {id
          ? <h1>Edit Pedal</h1>
          : <>
            <h1>Add Pedal</h1>
            {/* <img src={} alt="" /> */}
            </>
        }
      </div>
      
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <PedalInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default PedalForm