import React from "react";
import styled from "styled-components";



export default function CharacterCard(props) {
  console.log(props);

  const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    justify-items: center;
    border-radius: 8px;
    border: 1px solid black;
    width: 350px;
    height 525px;
    margin: 20px 30px;
    // background: #00001a;
    color: black;
    font-family: 'Roboto', sans-serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;

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
  padding-bottom: 8px;
`
const Divider = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
`

  return (
    <Card className="characterCard">
    <Image src={props.img} alt={props.name} />
    <Header>{props.name}</Header>
    <List>
    <ListItems>{props.species} {props.status}</ListItems>
    <ListItems>Location: {props.location}</ListItems>
    <ListItems>Origin: {props.origin}</ListItems>
    </List>
    <Divider></Divider>
    <Footer>Episodes: {props.episodes.length}</Footer>
</Card> 
  ) 
    
}
  

