import {
  Body,
  BackgroundImage,
  DirecoryItemContainer,
} from "./directory-item.styles";

import { useNavigate } from "react-router";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavgatveHandler = () => navigate(route);

  return (
    <DirecoryItemContainer onClick={onNavgatveHandler}>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirecoryItemContainer>
  );
};

export default DirectoryItem;
