const loadAiHub = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayAi(data.data.tools);

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
      </div>
      <div class="card-footer">
        <p class="fw-bolder">${ai.name}</p>
        <p class="fs-6">${ai.published_in}</p>
      </div>
    </div>
  </div>
        
        `;
        aiContainer.appendChild(aiDiv);

    });
}


loadAiHub();