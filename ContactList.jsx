import { useDispatch } from 'react-redux'

import { removeContact } from '../store/contactsSlice.js'
import {
  Card,
  ContactInfo,
  EmptyMessage,
  Icon,
  List,
  ListHeader,
  MutedText,
  Name,
  SmallButton,
  Toolbar
} from '../styles/List.styles.js'

function ContactList({ contacts, onEdit }) {
  const dispatch = useDispatch()

  if (contacts.length === 0) {
    return <EmptyMessage>Nenhum contato cadastrado ainda.</EmptyMessage>
  }

  return (
    <section>
      <ListHeader>Contatos</ListHeader>

      <List>
        {contacts.map((contact) => (
          <Card key={contact.id}>
            <ContactInfo>
              <Name>{contact.fullName}</Name>
              <MutedText>{contact.email}</MutedText>
              <MutedText>{contact.phone}</MutedText>
            </ContactInfo>

            <Toolbar>
              <SmallButton type="button" onClick={() => onEdit(contact)}>
                <Icon aria-hidden="true">✎</Icon>
                Editar
              </SmallButton>
              <SmallButton
                type="button"
                $danger
                onClick={() => dispatch(removeContact(contact.id))}
              >
                <Icon aria-hidden="true">×</Icon>
                Remover
              </SmallButton>
            </Toolbar>
          </Card>
        ))}
      </List>
    </section>
  )
}

export default ContactList
