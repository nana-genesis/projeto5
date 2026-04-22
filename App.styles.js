import styled from 'styled-components'

export const AppShell = styled.div`
  min-height: 100vh;
`

export const Header = styled.header`
  background: #253858;
  color: #ffffff;
  padding: 40px 20px;
`

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1040px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1;
  margin: 0;
`

export const Subtitle = styled.p`
  color: #d9e3f5;
  font-size: 1.05rem;
  margin: 12px 0 0;
`

export const Counter = styled.span`
  background: #fff3c4;
  border-radius: 999px;
  color: #5c4300;
  font-weight: 700;
  padding: 10px 16px;
  white-space: nowrap;
`

export const Main = styled.main`
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(280px, 360px) 1fr;
  margin: -28px auto 0;
  max-width: 1040px;
  padding: 0 20px 48px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

export const Panel = styled.section`
  align-self: start;
  background: #ffffff;
  border: 1px solid #dce4f0;
  border-radius: 8px;
  box-shadow: 0 16px 40px rgba(37, 56, 88, 0.12);
  padding: 24px;
`
