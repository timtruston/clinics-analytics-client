import React from 'react';
import styled from 'styled-components'

interface Props {
  height?: string;
  filled: string;
}

const LineGraph: React.FC<Props> = (props) => {

  return (
    <Styled style={{ height: props.height }}>
      <Line>
        <Filled style={{ width: props.filled }} />
      </Line>
    </Styled>
  );
};

export default LineGraph;

const Styled = styled.div`
  width: 100%;
  background-color: #fff;
  display: inline-block;
`
const Line = styled.div`
  height: 5px;
  background-color: #ede7fc;
  margin-top: 10px;
`
const Filled = styled.div`
  height: 100%;
  background-color: #4e1ed4;
`
