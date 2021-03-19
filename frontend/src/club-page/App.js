import React, { Component }  from 'react';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    ThemeProvider,
  CSSReset,
  theme,
} from '@chakra-ui/react';
import {useParams} from "react-router-dom";
import Body from './components/Body'
import Header from './components/Header'
import getData from './components/getData'
import getEvent from './components/getEvent'
import { useState, useEffect } from 'react';


export default function Club_Page(){
  
  var name = useParams().name;

  const [event, setevent] = useState({});
  const [general, setgeneral] = useState({});
  
  useEffect( () => {
  async function fetchData() {
  let eResponse_general  = await getData(name.slice(name.indexOf("@")+1,))
  setgeneral(eResponse_general.data)

  let eResponse_event  = await getEvent(name.slice(0,name.indexOf("@")))
  setevent(eResponse_event.data)
  }
  fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <CSSReset/>
    <Header Info={general}></Header>
    <Body Info_G={general} Info_E={event}></Body>
  </ThemeProvider>
  )
}
/*
class Club_Page extends React.Component {
  constructor() {
    super();
  }
  

  state = {
    name: '',
    event: {},
    general: {}
  };

  componentDidMount() {
    this.fetchData()
    
  }

  fetchData = async() => {
    this.state.name = useParams().name
    console.log(this.state.name);
    console.log(this.state.name.slice(0,this.state.name.indexOf("@")));
    console.log(this.state.name.slice(this.state.name.indexOf("@")+1,));

    let eResponse_general  = await getData(this.state.name.slice(this.state.name.indexOf("@")+1,))
    //console.log(eResponse_general);
    //general = eResponse_general.data;
    this.state.general = eResponse_general.data
    let eResponse_event  = await getEvent(this.state.name.slice(0,this.state.name.indexOf("@")))
    //console.log(eResponse_event);
    //event = eResponse_event.data;
    this.state.event=eResponse_event.data
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CSSReset/>
          <Header Info={this.state.event}></Header>
          <Body Info={this.state.general}></Body>
      </ThemeProvider>
    );
  }
}

export default Club_Page;
*/