import styled from "styled-components";

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #292929;
  background-color: #fff;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: 600;
    margin: 0 6px 0;
    font-size: 22px;
    color: #252525;
    text-transform: uppercase;
  }

  p {
    font-style: italic;
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryitemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #292929;
  border-radius: 10px;
  margin: 0 8px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;
