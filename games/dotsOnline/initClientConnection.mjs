function initClientConnection(host, port, model) {
  const client = new WebSocket(`ws://${host}:${port}/`, 'echo-protocol');

  client.onerror = () => {
    console.error('Connection Error');
  }
  client.onopen = () => {
    console.log('WebSocket Client Connected');
    model.addObserver(client);
  };

  client.onclose = () => {
    console.log('echo-protocol Client Closed');
    model.removeObserver(client);
  };

  client.onmessage = (e) => {
    if (typeof e.data === 'string') {
      try {
        const parsedUpdateData = JSON.parse(e.data);
        model.onWSData(parsedUpdateData);
      } catch (err) {
        console.error(err);
      }
    }
  };

  let sendUpdateTimeout;

  client.onModelUpdate = (partial) => {
    if (!partial) {
      return;
    }
    if (partial.type === 'remove') {
      return;
    }
    if (client.readyState === client.OPEN) {
      clearTimeout(sendUpdateTimeout);
      client.send(JSON.stringify(partial));
    } else {
      sendUpdateTimeout = setTimeout(client.onModelUpdate.bind(null, partial), 250);
    }
  }
}

export default initClientConnection;
