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
      <button onclick="showAiDetailModal('${ai.id}')"  type="button"  class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#aiInfoModal">More Info</button>
      </div>   
    </div>
    </div>
  </div>
        
        `;
        aiContainer.appendChild(aiDiv);

    });
    toggleSpinner(false);
}




// show all data
document.getElementById('btn-see-more').addEventListener('click', function(){
  
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(response=> response.json())
    .then(data=> displayAi(data.data.tools))
    const hideButton= document.getElementById("see-more");
hideButton.classList.add('d-none')
toggleSpinner(true);
})


const toggleSpinner = isLoading =>{
const loaderSection = document.getElementById('loader');
if(isLoading){
  loaderSection.classList.remove('d-none')
}
else{
  loaderSection.classList.add('d-none')
}
}



const showAiDetailModal= id =>{
  const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
  .then(response=> response.json())
  .then(data=> modalDetail(data.data))
}


const modalDetail= modalDetail =>{
  const aiModalDescription = document.getElementById("modal-description");
  aiModalDescription.innerText = modalDetail.description ? modalDetail.description : 'No data found';

  const planDetailField = document.getElementById("plan-detail");
  planDetailField.innerText = modalDetail.pricing[0].plan ? modalDetail.pricing[0].plan : 'Cost/Basic';

  const priceDetailField = document.getElementById("price-detail");
  priceDetailField.innerText = modalDetail.pricing[0].price ? modalDetail.pricing[0].price : 'Free of Cost' ;

  const planDetailField1 = document.getElementById("plan1-detail");
  planDetailField1.innerText = modalDetail.pricing[1].plan ? modalDetail.pricing[1].plan : 'Cost/Pro' ;

  const priceDetailField1 = document.getElementById("price1-detail");
  priceDetailField1.innerText = modalDetail.pricing[1].price ?  modalDetail.pricing[1].price : 'Free of Cost';

  const planDetailField2 = document.getElementById("plan2-detail");
  planDetailField2.innerText = modalDetail.pricing[2].plan ? modalDetail.pricing[2].plan : 'Cost/Enterprise';

  const priceDetailField2 = document.getElementById("price2-detail");
  priceDetailField2.innerText = modalDetail.pricing[2].price ?  modalDetail.pricing[2].price: 'Free of Cost';


  // for feature
  const aiHubFeatureTitle= document.getElementById('ai-hub-feature1')
  aiHubFeatureTitle.innerText= modalDetail.features['1'].feature_name

  const aiHubFeatureTitle2= document.getElementById('ai-hub-feature2')
  aiHubFeatureTitle2.innerText= modalDetail.features['2'].feature_name

  const aiHubFeatureTitle3= document.getElementById('ai-hub-feature3')
  aiHubFeatureTitle3.innerText= modalDetail.features['3'].feature_name


  // for integration
  const aiHubIntegrationsTitle1= document.getElementById('ai-hub-Integrations1')
  aiHubIntegrationsTitle1.innerText= modalDetail.integrations[0]

  const aiHubIntegrationsTitle2= document.getElementById('ai-hub-Integrations2')
  aiHubIntegrationsTitle2.innerText= modalDetail.integrations[1]
  const aiHubIntegrationsTitle3= document.getElementById('ai-hub-Integrations3')
  aiHubIntegrationsTitle3.innerText= modalDetail.integrations[2]


// card-2 image and feature
const imageBody= document.getElementById('image-body')
imageBody.innerHTML=`
<img src="${modalDetail.image_link[0]}" class="card-img" alt="...">`

const btnAccurecy= document.getElementById('btn-accuracy')
btnAccurecy.innerText= modalDetail.accuracy.score ? modalDetail.accuracy.score * 100 : 'no'

const imageText= document.getElementById('image-text')
imageText.innerText= modalDetail.input_output_examples[0].input ? modalDetail.input_output_examples[0].input : 'no data found'

const imageText2= document.getElementById('image-text2')
imageText2.innerText= modalDetail.accuracy.description ? modalDetail.accuracy.description : 'no data found'


  
}

loadAiHub();














