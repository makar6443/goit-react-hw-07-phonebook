import { ThreeCircles } from 'react-loader-spinner';

import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <ThreeCircles
        height="30"
        width="30"
        color="#cc2d2d"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </Container>
  );
};

export default Loader;
