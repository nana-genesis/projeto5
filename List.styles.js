import styled from 'styled-components'

export const ListHeader = styled.h2`
  color: #253858;
  font-size: 1.25rem;
  margin: 0 0 16px;
`

export const List = styled.div`
  display: grid;
  gap: 14px;
`

export const Card = styled.article`
  align-items: center;
  background: #ffffff;
  border: 1px solid #dce4f0;
  border-radius: 8px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding: 18px;

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const ContactInfo = styled.div`
  min-width: 0;
`

export const Name = styled.h3`
  color: #1d2737;
  font-size: 1.1rem;
  margin: 0 0 8px;
`

export const MutedText = styled.p`
  color: #5f6f86;
  margin: 4px 0;
  overflow-wrap: anywhere;
`

export const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
`

export const SmallButton = styled.button`
  align-items: center;
  background: ${({ $danger }) => ($danger ? '#fff0f0' : '#edf6ff')};
  border: 1px solid ${({ $danger }) => ($danger ? '#ffc7c7' : '#bfddff')};
  border-radius: 6px;
  color: ${({ $danger }) => ($danger ? '#b42318' : '#1658b8')};
  display: inline-flex;
  font-weight: 700;
  gap: 6px;
  min-height: 36px;
  padding: 8px 12px;

  &:hover {
    background: ${({ $danger }) => ($danger ? '#ffe2e2' : '#dcebff')};
  }
`

export const Icon = styled.span`
  font-size: 1.05rem;
  line-height: 1;
`

export const EmptyMessage = styled.p`
  background: #ffffff;
  border: 1px dashed #b9c7da;
  border-radius: 8px;
  color: #5f6f86;
  margin: 0;
  padding: 28px;
  text-align: center;
`
