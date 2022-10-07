import React from "react";
import styled from "styled-components";
import { data } from "../data";

const Container = styled.div`
  height: 100vh;
`;

const MensFashion = async () => {
    const arr = []
    await data.products.map(product =>{
        if(product.department === "men"){
            arr.push(product)
        }
        return arr
    })

  return (
    <>
      <Container>
        {/* {arr.map((product) =>(
            <div key={product.sku}>
                <div>{product.name}</div>
                <div>{product.price}</div>
            </div>
        ))} */}
        {console.log(arr)}
      </Container>
    </>
  );
};

export default MensFashion;
