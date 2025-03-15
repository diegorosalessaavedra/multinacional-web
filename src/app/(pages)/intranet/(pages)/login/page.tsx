'use client'
import { useState } from 'react'
import './login.css'
import axios from 'axios'
import Loading from '@/hooks/Loading'
import Input from '@/hooks/input/Input'

interface Data {
  email: string
  password: string
}

export default function Login() {
  const [dataForm, setDataForm] = useState<Data>({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const handleInputChange = (name: keyof Data) => (value: string | File | null) => {
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    setLoading(true)
    const url = `${process.env.NEXT_PUBLIC_URL_API}/e-tracking/user/login`

    axios
      .post(url, dataForm)
      .then((res) => {
        document.cookie = `token=${res.data.token}; path=/; max-age=86400; Secure; SameSite=Strict`
        window.location.reload()
      })
      .catch((err) => setError(err.response.data.error))
      .finally(() => setLoading(false))
  }

  return (
    <section className="login">
      {loading && <Loading />}

      <form className="login_form" onSubmit={handleLogin}>
        <h2 className="login_form-title title_center">Iniciar Sesión</h2>
        <div className="login_form-div">
          <Input
            id="email"
            isRequired={true}
            label="Correo"
            name="email"
            type="email"
            value={dataForm.email}
            onChange={handleInputChange('email')}
          />
          {error?.includes('correo') && <span className="login_form-span">{error}</span>}
        </div>
        <div className="login_form-div">
          <Input
            id="password"
            isRequired={true}
            label="Contraseña"
            name="password"
            type="password"
            value={dataForm.password}
            onChange={handleInputChange('password')}
          />
          {error?.includes('contraseña') && <span className="login_form-span">{error}</span>}
        </div>
        <button className=" button_animated login_form-button" type="submit">
          <p>Ingresar</p>
        </button>
      </form>
    </section>
  )
}
