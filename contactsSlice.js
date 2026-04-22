import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: nanoid(),
      fullName: 'Ana Martins',
      email: 'ana.martins@email.com',
      phone: '(11) 99999-1234'
    },
    {
      id: nanoid(),
      fullName: 'Carlos Souza',
      email: 'carlos.souza@email.com',
      phone: '(21) 98888-4321'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.unshift(action.payload)
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact
          }
        }
      }
    },
    removeContact(state, action) {
      state.items = state.items.filter((contact) => contact.id !== action.payload)
    },
    updateContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (index >= 0) {
        state.items[index] = action.payload
      }
    }
  }
})

export const { addContact, removeContact, updateContact } = contactsSlice.actions
export default contactsSlice.reducer
