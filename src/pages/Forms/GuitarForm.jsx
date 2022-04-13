// stylesheet

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
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateGuitar(form) : props.addGuitar(form)
    navigate('/guitars')
  }

  const handleChange = (e) => {
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
        is_working: guitarData.is_working,
        on_loan: guitarData.on_loan,
      })
    }
    id ? fetchOne() : setForm({ color: '#ff0000' })
    return () => setForm({})
  }, [id])

  return (
    <>
      <div className="page-header">
      {id
          ? <h1>Edit Guitar</h1>
          : <>
            <h1>Add Guitar</h1>
            {/* <img src={} alt="" /> */}
            </>
        }
      </div>
      
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <GuitarInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
    </>
  )
}

export default GuitarForm