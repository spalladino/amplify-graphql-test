import React, { useState, useEffect } from 'react';
import './App.css';
import { Relayer } from './Model';
import { API, graphqlOperation } from 'aws-amplify';
import { listRelayers } from './graphql/queries';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  const [relayers, setRelayers] = useState<Relayer[]>([]);
  useEffect(() => { fetchRelayers() }, []);
  const fetchRelayers = async () => {
    const response = await API.graphql(graphqlOperation(listRelayers, { tenantId: "TENANT"})) as any; // sorrynotsorry
    setRelayers(response.data.listRelayers.items as Relayer[]);
  };

  return (
    <div className="App">
      <h1>Relayers</h1>
      { relayers.map(relayer => (
        <div key={relayer.id}>({relayer.id}) {relayer.name} of {relayer.tenantId}</div>
      ))}
    </div>
  );
}

export default withAuthenticator(App);
