// stylesheet
import '../../styles/Form.css'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Services
import { getOne } from '../../services/guitars'

// Components
import GuitarInput from './GuitarInput'

// Image Assets

const GuitarForm = (props) => {
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
    id ? props.updateGuitar(formData) : props.addGuitar(formData)
    navigate('/guitars')
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
      const guitarData = await getOne(id)
      setForm({
        id: guitarData.id,
        type: guitarData.type,
        make: guitarData.make,
        model: guitarData.model,       
        color: guitarData.color,
        year: guitarData.year,
        description: guitarData.description,
        isWorking: guitarData.is_working ? true : false,
        onLoan: guitarData.on_loan ? true : false,
      })
    }
    id ? fetchOne() : setForm({ color: '#ff0000', isWorking: false, onLoan: false })
    return () => setForm({})
  }, [id])

  return (
    <>
      <div className="page-header">
      {id
          ? <h1>Edit Guitar</h1>
          : <>
            <h1>Add Guitar</h1>
            {/* <img src= {} alt="" /> */}
            </>
        }
      </div>
      
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <GuitarInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default GuitarForm