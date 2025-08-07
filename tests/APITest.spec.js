const{test,expect} = require('@playwright/test');
const { request } = require('http');
let userid;

test('Get Users', async ({request})=>{
 const response= await  request.get('https://reqres.in/api/users?page=2');
 console.log( await response.json());
 expect(response.status()).toBe(200);
})



test("Create user", async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/users', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      name: 'Rajideepak',
      job: 'Tester'
    }
  });

  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();
  const res = await response.json();
  userid=res.id;
  console.log(userid);
});

test.only('Update user', async ({ request }) => {
  const userid = 10;
  const response = await request.put('https://jsonplaceholder.typicode.com/users/'+userid, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: JSON.stringify({
      name: 'Raji',
      job: 'Automation Tester'
    })
  });

  expect(response.status()).toBe(200);
  console.log(await response.json());
});

test('Delete user',async ({request})=>{
    const userid = 10;
     const response = await request.delete(`https://jsonplaceholder.typicode.com/users/${userid}`);
     expect(response.status()).toBe(204);
})
