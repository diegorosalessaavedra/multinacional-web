// utils/authUtils.ts

export const getToken = (): string => {
  return (
    document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1] || ''
  )
}

// Función que retorna los headers actualizados
export const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
})
