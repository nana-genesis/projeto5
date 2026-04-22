import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FormTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0;
`

export const FormGrid = styled.div`
  display: grid;
  gap: 16px;
`

export const Label = styled.label`
  color: #34445c;
  display: grid;
  font-size: 0.9rem;
  font-weight: 700;
  gap: 8px;
`

export const Input = styled.input`
  border: 1px solid #c9d5e6;
  border-radius: 6px;
  color: #1d2737;
  min-height: 44px;
  padding: 10px 12px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: #2e7dff;
    box-shadow: 0 0 0 3px rgba(46, 125, 255, 0.16);
    outline: none;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
`

export const Button = styled.button`
  background: #2e7dff;
  border: 0;
  border-radius: 6px;
  color: #ffffff;
  font-weight: 700;
  min-height: 42px;
  padding: 10px 18px;

  &:hover {
    background: #1d67dd;
  }
`

export const SecondaryButton = styled(Button)`
  background: #edf2f8;
  color: #253858;

  &:hover {
    background: #dce6f2;
  }
`
