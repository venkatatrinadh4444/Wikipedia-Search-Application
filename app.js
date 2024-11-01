let searchInputEl=document.getElementById('searchInput')
let searchResults=document.getElementById('searchResults')
let spinnerEl=document.getElementById('spinner')

function containerPage(data){
    console.log(data)
    let containerEl=document.createElement('div')
    searchResults.appendChild(containerEl)

    let titleEl=document.createElement('a')
    titleEl.textContent=data.title;
    titleEl.classList.add('result-title')
    titleEl.href=data.link;
    containerEl.appendChild(titleEl)

    let breakEl=document.createElement('br')
    containerEl.appendChild(breakEl)

    let linkEl=document.createElement('a')
    linkEl.textContent=data.link;
    linkEl.classList.add('result-url')
    linkEl.href=data.link;
    containerEl.appendChild(linkEl)

    let breakEl2=document.createElement('br')
    containerEl.appendChild(breakEl2)

    let paragraphEl=document.createElement('p')
    paragraphEl.textContent=data.description
    paragraphEl.classList.add('link-description')
    containerEl.appendChild(paragraphEl)
}

function resultPage(data){
    for(let result of data)
        containerPage(result)
}

searchInputEl.addEventListener('keydown',(e)=>{
    if(e.key==="Enter"){
        searchResults.textContent=''
        let searchValue=searchInputEl.value
        let url='https://apis.ccbp.in/wiki-search?search='+searchValue;

        const options={
            method:"GET"
        }
        spinnerEl.classList.toggle('d-none')
        fetch(url,options)
        .then(response=>response.json())
        .then(jsonData=>{
            spinnerEl.classList.toggle('d-none')
            let searchResults=jsonData.search_results;
            resultPage(searchResults)
        })
    }
})