import React, { useState, useEffect } from "react";
import logo from './logo.svg';

import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  Image,
  View,
  Card,
  withAuthenticator
} from "@aws-amplify/ui-react";


function App({signOut}) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo"/>
        <Heading level={1}>We have now Authentation</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  )
}

export default withAuthenticator(App);
