const loadAiHub = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayAi(data.data.tools.slice(0,6));

}

const displayAi = aiHubs =>{
    const aiContainer = document.getElementById('ai-container');
   
    aiHubs.forEach(ai => {
        const aiDiv = document.createElement('div')
        aiDiv.classList.add('col');
        aiDiv.innerHTML = `
    <div class="card h-100 p-3">
      <img src="${ai.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Features</h5>
      
        <div>
        <ol class="list-group-numbered p-0">
  <li class="list-group-item">${ai.features[0]}</li>
  <li class="list-group-item">${ai.features[1]}</li>
  <li class="list-group-item">${ai.features[2]}</li>
</ol>
</div>

<hr class="border text-secondary opacity-50"> 

      <div class="d-flex justify-content-between">
      <div class=" ">
        <p class="fw-bolder">${ai.name}</p>
        <p class="fs-6 "><i class="fa-solid fa-calendar-days"></i> ${ai.published_in}</p>
      </div>
      <div>
      <button type="button" class="btn btn-outline-danger">More Info</button>
      </div>   
    </div>
    </div>
  </div>
        
        `;
        aiContainer.appendChild(aiDiv);

    });
}

loadAiHub();

// show all data
document.getElementById('btn-see-more').addEventListener('click', function(){
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(response=> response.json())
    .then(data=> displayAi(data.data.tools))
    const hideButton= document.getElementById("see-more");
hideButton.classList.add('d-none')

})

