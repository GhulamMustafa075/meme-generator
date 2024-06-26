import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 3rem;
  padding: 2rem 8rem 3rem 8rem;

  h1 {
    text-align: center;
    color: var(--black);
    font-weight: 800;
    margin-bottom: 2rem;
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 18px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 3rem;
`;

export const Template = styled.div`
  a {
    text-decoration: none;
  }

  .imgWrapper {
    height: 100%;
    display: flex;
    padding: 0 0.5rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 2px solid var(--black);
    border-radius: 10px;

    img {
      width: 100%;
      max-width: 300px;
      object-fit: contain;
    }

    @media screen and (max-width: 992px) {
      border: 2px solid var(--black);
    }
  }

  .memeName {
    width: 100%;
    height: 100%;
    max-height: 25px;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h4 {
      font-size: 14px;
      color: var(--black);
      font-weight: 700;
      text-align: center;
    }
  }
`;
