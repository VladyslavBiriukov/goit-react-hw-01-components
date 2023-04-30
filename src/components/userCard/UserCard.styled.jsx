import styled from '@emotion/styled'
import randomHexColor from '../utils/randomHexColor';

export const Card = styled.div`
  margin: 0 auto;
  width: 300px;
  background-color: #d5e3d1;
  border-radius: 10px;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;

  transition: scale 200ms ease-in-out, box-shadow 200ms ease-in-out;


    &:hover {
    scale: 1.01;
    box-shadow: 0px 3px 2px rgba(10, 38, 1), 0px 4px 4px rgba(208, 214, 206);
    cursor: pointer;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border: 2px solid green;
  border-radius: 40%;
  background-color: #edf2eb;
  transition:  box-shadow 200ms ease-in-out;

  &:hover {
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
`;

export const UserName = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: gray;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  background-color: ${randomHexColor};
  :not(:last-child) {
    border-right: 1px solid #e1e1e1;
  }
`;

export const Label = styled.span`
  color: gray;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
