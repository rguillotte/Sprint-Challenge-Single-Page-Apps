import React from "react";
import styled from "styled-components";


export default function LocationCard({ name, type, dimension, residents }) {

  const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: center;
  border-radius: 8px;
  border: 1px solid black;
  width: 350px;
  height 135px;
  margin: 20px 30px;
  color: black;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;

`

const ListItems = styled.li`

  padding: 5px;
  text-align: left;

`
const Header = styled.h1`
  font-size: 20px;
  padding: 8px;
  margin-top: 0px;
  margin-bottom: -3px;
  

`
const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
const Footer = styled.div`  
padding-left: 10px;
padding-top: 8px;
margin-bottom: 0;

`
const Divider = styled.div`
border-bottom: 1px solid lightgray;
width: 100%;
`

  return (
    <Card>
      <Header>{name}</Header>
      <List>
        <ListItems>Type: {type}</ListItems>
        <ListItems>Dimension: {dimension}</ListItems>
      </List>
      <Divider></Divider>
      <Footer>Residents: {residents.length}</Footer>
    </Card>

  )
}
