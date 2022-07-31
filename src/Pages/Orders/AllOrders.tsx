import styled from 'styled-components';
import image from '../../Images/pic1.jpg';
function AllOrders() {
  return (
    <DivOrderCrads>
      <DivOrderCard>
        <OrderImageDiv className="order-image-div">
          <img src={image} alt="food" />
        </OrderImageDiv>
        <OrderContentDiv className="order-content-div">
          <OrderTitleDiv className="order-title-div">
            <p>Melted Omelette with Spicy Chilli</p>
          </OrderTitleDiv>
          <OrderInfoDiv className="order-info-div">
            <p>$5.8</p>
            <p>x2</p>
            <p>
              <span>$11.6</span>
            </p>
          </OrderInfoDiv>
        </OrderContentDiv>
      </DivOrderCard>
      <DivOrderCard>
        <OrderImageDiv className="order-image-div">
          <img src={image} alt="food" />
        </OrderImageDiv>
        <OrderContentDiv className="order-content-div">
          <OrderTitleDiv className="order-title-div">
            <p>Melted Omelette with Spicy Chilli</p>
          </OrderTitleDiv>
          <OrderInfoDiv className="order-info-div">
            <p>$5.8</p>
            <p>x2</p>
            <p>
              <span>$11.6</span>
            </p>
          </OrderInfoDiv>
        </OrderContentDiv>
      </DivOrderCard>
      <DivOrderCard>
        <OrderImageDiv className="order-image-div">
          <img src={image} alt="food" />
        </OrderImageDiv>
        <OrderContentDiv className="order-content-div">
          <OrderTitleDiv className="order-title-div">
            <p>Melted Omelette with Spicy Chilli</p>
          </OrderTitleDiv>
          <OrderInfoDiv className="order-info-div">
            <p>$5.8</p>
            <p>x2</p>
            <p>
              <span>$11.6</span>
            </p>
          </OrderInfoDiv>
        </OrderContentDiv>
      </DivOrderCard>
      <DivOrderCard>
        <OrderImageDiv className="order-image-div">
          <img src={image} alt="food" />
        </OrderImageDiv>
        <OrderContentDiv className="order-content-div">
          <OrderTitleDiv className="order-title-div">
            <p>Melted Omelette with Spicy Chilli</p>
          </OrderTitleDiv>
          <OrderInfoDiv className="order-info-div">
            <p>$5.8</p>
            <p>x2</p>
            <p>
              <span>$11.6</span>
            </p>
          </OrderInfoDiv>
        </OrderContentDiv>
      </DivOrderCard>
      <DivOrderCard>
        <OrderImageDiv className="order-image-div">
          <img src={image} alt="food" />
        </OrderImageDiv>
        <OrderContentDiv className="order-content-div">
          <OrderTitleDiv className="order-title-div">
            <p>Melted Omelette with Spicy Chilli</p>
          </OrderTitleDiv>
          <OrderInfoDiv className="order-info-div">
            <p>$5.8</p>
            <p>x2</p>
            <p>
              <span>$11.6</span>
            </p>
          </OrderInfoDiv>
        </OrderContentDiv>
      </DivOrderCard>
    </DivOrderCrads>
  );
}

const DivOrderCrads = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const DivOrderCard = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  padding: 1rem 0rem 0rem 0rem;
  cursor: pointer;
`;
// ---------
const OrderImageDiv = styled.div`
  width: 10rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90%;
    border-radius: 1rem;
  }
`;
const OrderContentDiv = styled.div`
  width: 83%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const OrderTitleDiv = styled.div``;
const OrderInfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 18px;
    font-weight: 600;
    margin: 0 10px;
    color: #777777;
  }
  span {
    color: #309f5f;
  }
`;

export default AllOrders;
