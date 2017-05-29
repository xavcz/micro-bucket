// Packages
const { test, expect } = global;
const micro = require('micro');
const listen = require('test-listen');
const fetch = require('node-fetch');

test('endpoint', async () => {
  const endpoint = micro(require('../src'));

  const url = await listen(endpoint);

  const rawResponse = await fetch(url);

  const response = await rawResponse.json();

  expect(response).toMatchSnapshot();
});
