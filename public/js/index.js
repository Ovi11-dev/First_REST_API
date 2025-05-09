const request_btn = document.querySelector("#request-btn");

const response_text = document.querySelector("#response-text")


request_btn.onclick = async () => {
  
  
  
  const req = await fetch("http://localhost:5000/info")
  
  const data = await req.json()
  
  
  response_text.textContent = data.saludo
  

  
  
}