# Network Requests - Exercise 3
Implementare il codice necessario per eseguire una richiesta HTTP che si occupa di creare un nuovo post. Per creare un nuovo post utilizzare il seguente url: https://jsonplaceholder.typicode.com/posts (metodo: POST). Il corpo della richiesta deve contenere un oggetto post con le seguenti informazioni: `title` e flag `completed`. I dati del post dovranno essere trasmessi in seguito alla compilazione di un form.


  // function submit() {
  //   return new Promise( (resolve, reject) => {
  //     const info = {
  //     title: title.value,
  //     completed: completed.checked,
  //     }
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: 'POST',
  //     body: JSON.stringify(info),
  //   })
  //   .then();
  //   })
  // }

  async function submit() {
    const info = {
      title: title.value,
      completed: completed.checked,
      }
    const sub = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      body: JSON.stringify(info),
    });
    console.log('ciao', sub)
  }

  form.addEventListener("submit", submit);