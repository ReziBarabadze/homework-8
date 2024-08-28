  // დავალება - 1 - xml http request

  let request = new XMLHttpRequest();

  request.open('GET', 'https://reqres.in/api/unknown');

  request.addEventListener('load', function() {
    // console.log(this.responseText);
    let response =this.responseText;
    let responseJs = JSON.parse(response);
    console.log(responseJs);

    let ulEl = document.createElement('ul');
    responseJs.data.forEach( item => {
      let  li = document.createElement('li');
      li.textContent = `${item.name} ${item.color}`;
      
      li.style.backgroundColor = item.color; //აქ გახდება ის ფერი რაც წერია ფერის კოდში
      li.style.marginBottom = '10px';
      li.style.textAlign = 'center';
      li.style.width = '500px'
      li.style.padding = '5px'
      

      ulEl.appendChild(li);
    })
    document.getElementById('api_users').appendChild(ulEl);
    

  })
  request.send(); 




  request.addEventListener('error', function() {
    let pDescr = document.createElement('p');
    pDescr.textContent = 'Server Error';

    document.getElementById('api_users').appendChild(pDescr);
  })











  






  //დავალება - 2 - fetch


  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  })
.then(function (response) {
  return response.json();
})

.then(function (responseData) {
  console.log(responseData);
  let ul = document.createElement('ul');
  responseData.forEach( item => {
    let li = document.createElement('li');
    li.textContent = `${item.company.name}`;
    ul.appendChild(li);
    li.style.marginBottom = "5px"

  })
  document.getElementById('api_new').appendChild(ul);

})

.catch(function (error) {
  console.log(error);
  
})