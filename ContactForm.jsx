import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addContact, updateContact } from '../store/contactsSlice.js'
import {
  Actions,
  Button,
  Form,
  FormGrid,
  FormTitle,
  Input,
  Label,
  SecondaryButton
} from '../styles/Form.styles.js'

const emptyForm = {
  fullName: '',
  email: '',
  phone: ''
}

function ContactForm({ contactToEdit, onFinishEditing }) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(emptyForm)

  const isEditing = Boolean(contactToEdit)

  useEffect(() => {
    if (contactToEdit) {
      setFormData({
        fullName: contactToEdit.fullName,
        email: contactToEdit.email,
        phone: contactToEdit.phone
      })
    }
  }, [contactToEdit])

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }))
  }

  function resetForm() {
    setFormData(emptyForm)
    onFinishEditing()
  }

  function handleSubmit(event) {
    event.preventDefault()

    const contact = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim()
    }

    if (isEditing) {
      dispatch(updateContact({ id: contactToEdit.id, ...contact }))
    } else {
      dispatch(addContact(contact))
    }

    resetForm()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>{isEditing ? 'Editar contato' : 'Novo contato'}</FormTitle>

      <FormGrid>
        <Label>
          Nome completo
          <Input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Ex.: Maria Oliveira"
            required
          />
        </Label>

        <Label>
          E-mail
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@exemplo.com"
            required
          />
        </Label>

        <Label>
          Telefone
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            required
          />
        </Label>
      </FormGrid>

      <Actions>
        {isEditing && (
          <SecondaryButton type="button" onClick={resetForm}>
            Cancelar
          </SecondaryButton>
        )}
        <Button type="submit">{isEditing ? 'Salvar alterações' : 'Adicionar'}</Button>
      </Actions>
    </Form>
  )
}

export default ContactForm
