*Created by Ovi11*

# How to use my Basic API?

1. by terminal, run the following command in your terminal:

```bash

curl https://web/info
```

2. by Javascript or nodejs, run this code:

```Javascript

async function request() {

const req = await fetch(https://web/info)

const data = await req.json();

console.log(data);


}

request();

```

---

## additional information

This mini API uses only GET methods.

Also, to access the information you will make requests to the `/info` path



