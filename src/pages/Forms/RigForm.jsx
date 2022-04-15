import '../../styles/Form.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Services
import { getOne } from '../../services/rigs'


// Components
import RigInput from './RigInput'

// Image Assets

const RigForm = (props) => {
  const { id } = useParams()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateRig(form) : props.addRig(form)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.rig.id,
        name: data.rig.name,
        description: data.rig.description,
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    <>
      <div className="page-header">
        {id ? 
        <>
          <h1>Edit Rig</h1>
        </>
        : 
        <>
          <h1>Add A Rig</h1>
        </>
        }
      </div>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <RigInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Create Rig</button>
        </form>
      </section>
    </>
  )
}

export default RigForm
