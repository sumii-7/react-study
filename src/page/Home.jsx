import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <ul>
      <Link to="/one">
        <StLi>state 기초</StLi>
      </Link>
      <Link to="/two">
        <StLi>state 심화</StLi>
      </Link>
    </ul>
  );
};

const StLi = styled.li`
  color: #000;
`;

export default Home;
