'use client'

import Input from '@/hooks/input/Input'
import { useState } from 'react'
import './indexComplaintsBook.css'
import Textarea from '@/hooks/textarea/Textarea'
import Image from 'next/image'
import axios from 'axios'
import Loading from '@/hooks/Loading'

interface Data {
  name: string
  order_of_service: string
  phone_number: string
  email: string
  description: string
  file?: File | null
}

export default function IndexComplaintsBook() {
  const [loading, setLoading] = useState<boolean>(false)
  const [sendMessage, setSendMessage] = useState<boolean>(false)

  const [dataForm, setDataForm] = useState<Data>({
    name: '',
    order_of_service: '',
    phone_number: '',
    email: '',
    description: '',
    file: null,
  })

  const handleInputChange = (name: keyof Data) => (value: string | File | null) => {
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  function viewMessage() {
    setSendMessage(true)
    setTimeout(() => {
      setSendMessage(false)
    }, 3000)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const url = `${process.env.NEXT_PUBLIC_URL_API}/form`

    // Crear un objeto FormData
    const formData = new FormData()
    formData.append('name', dataForm.name)
    formData.append('order_of_service', dataForm.order_of_service)
    formData.append('phone_number', dataForm.phone_number)
    formData.append('email', dataForm.email)
    formData.append('description', dataForm.description)

    // Verificar si se ha seleccionado un archivo
    if (dataForm.file) {
      formData.append('file', dataForm.file) // Agregar el archivo
    }

    axios
      .post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => viewMessage())
      .finally(() => setLoading(false))
  }

  return (
    <section className="indexComplaintsBook">
      {loading && <Loading />}
      <Image
        className="indexComplaintsBook-logo"
        src="/iso_logo_light.svg"
        alt="multinacional"
        width={500}
        height={500}
      />

      <h1 className="indexComplaintsBook-title title">Libro de Reclamaciones</h1>
      <article className="indexComplaintsBook_article">
        <h2 className="indexComplaintsBook_article-h2">Reclamo:</h2>
        <p>Disconformidad relacionada a los productos o servicios</p>
        <h2 className="indexComplaintsBook_article-h2">Queja:</h2>
        <p>
          Disconformidad no relacionada a los productos o servicios o malestar o descontento
          respecto a la atención al público <br />
          La formulación del reclamo no impide acudir a otras vías de solución de controversias ni
          es requisito previo para interponer una denuncia ante el INDECOPI. <br />
          El provedor deberá dar respuesta al reclamo en un plazo no mayor de treinta (30) días
          calendarios, pudiendo ampliar el plazo hasta por treinta (30) días más, previa
          comunicación al consumidor.
        </p>
      </article>
      <form className="indexComplaintsBook_form" onSubmit={handleSubmit}>
        <Input
          id="name"
          isRequired={true}
          label="Nombre"
          name="name"
          type="text"
          value={dataForm.name}
          onChange={handleInputChange('name')}
        />
        <Input
          id="order_of_service"
          isRequired={true}
          label="Orden de servicio/guía aérea"
          name="order_of_service"
          type="text"
          value={dataForm.order_of_service}
          onChange={handleInputChange('order_of_service')}
        />
        <Input
          id="phone_number"
          isRequired={true}
          label="Telefono"
          name="phone_number"
          type="text"
          value={dataForm.phone_number}
          onChange={handleInputChange('phone_number')}
          onInput={true}
          maxLength={9}
        />
        <Input
          id="email"
          isRequired={true}
          label="Correo"
          name="email"
          type="email"
          value={dataForm.email}
          onChange={handleInputChange('email')}
        />
        <Textarea
          id="description"
          isRequired={true}
          label="Descripción"
          name="description"
          value={dataForm.description}
          onChange={handleInputChange('description')}
        />
        <Input
          id="file"
          isRequired={false}
          label="Archivo"
          name="file"
          type="file"
          value=""
          onChange={handleInputChange('file')}
        />
        <button className="indexComplaintsBook_form-button button_animated" type="submit">
          <p>Enviar</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="currentColor">
            <path d="M7.5,16.5L14,10H0V8h14L7.5,1.5L9,0l9,9l-9,9L7.5,16.5z"></path>
          </svg>
          <div className="transition"></div>
        </button>{' '}
      </form>
      <div
        className={`indexComplaintsBook_message ${sendMessage ? 'indexComplaintsBook_message-view' : ''}`}
      >
        <p>¡Reclamo enviado correctamente! 🎉✅</p>
      </div>
    </section>
  )
}
