import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import ContactForm from './components/ContactForm.jsx'
import ContactList from './components/ContactList.jsx'
import {
  AppShell,
  Counter,
  Header,
  HeaderContent,
  Main,
  Panel,
  Subtitle,
  Title
} from './styles/App.styles.js'

function App() {
  const contacts = useSelector((state) => state.contacts.items)
  const [editingContact, setEditingContact] = useState(null)

  const totalLabel = useMemo(() => {
    const total = contacts.length
    return total === 1 ? '1 contato cadastrado' : `${total} contatos cadastrados`
  }, [contacts.length])

  function handleFinishEditing() {
    setEditingContact(null)
  }

  return (
    <AppShell>
      <Header>
        <HeaderContent>
          <div>
            <Title>Lista de contatos</Title>
            <Subtitle>Gerencie nomes, e-mails e telefones em um só lugar.</Subtitle>
          </div>
          <Counter>{totalLabel}</Counter>
        </HeaderContent>
      </Header>

      <Main>
        <Panel>
          <ContactForm
            contactToEdit={editingContact}
            onFinishEditing={handleFinishEditing}
          />
        </Panel>

        <ContactList contacts={contacts} onEdit={setEditingContact} />
      </Main>
    </AppShell>
  )
}

export default App
