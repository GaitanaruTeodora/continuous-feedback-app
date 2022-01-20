import styled from "styled-components";
import React from "react";

const UserHome = (props) => {
  const ContentWrapper = styled.div`
    width: 100%;
  `;

  return (
    <div>
      <ContentWrapper>
        <div className="d-flex justify-content-center">
          <div className="mt-5">
            <h1 className="mt-4 text-dark">
              TL<span className="text-warning">CODE</span> LEARNING
            </h1>
            <br></br>
            <h1>Bine ai venit, {props.nume}</h1>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default UserHome;
