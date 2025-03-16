const fetchPlanetDescription = (planet) =>{
    const fetchPromise = fetch("./starter-code/data.json");

    fetchPromise
    .then((response)=>{
        if(!response.ok){
            throw new Error(`Http error: ${response.status}`)
        }
        return response.json();
    })
    .then((data)=>{
        data["destinations"].forEach(item=>{
            if(planet == item.name){
                updatePlanet(item)
            }
        })
    })
}


function changePlanets(){
    let planets = document.querySelectorAll(".planets ul li");

    planets.forEach((planet)=>{
    planet.addEventListener("click", ()=>{
        fetchPlanetDescription(planet.textContent);
        })
    })
    
}



const updatePlanet = (planetDescription)=>{
    let section = document.createElement("section");
    section.classList.add("flex")
    section.classList.add("flex-col")
    section.classList.add("items-center")
    section.classList.add("justify-center")
    section.classList.add("gap-4")
    section.classList.add("lg:flex-row")
    section.classList.add("lg:gap-12")
    section.classList.add("animate-[fadeIn_1s_ease-in-out_forwards]")

    section.innerHTML =
    `<img src="${planetDescription.images["png"]}" alt="${planetDescription.name}" class="w-full p-6">
    <article class="text-gray-400 space-y-12 p-4">

      <div class="planets">
            <ul class="flex justify-center gap-4 uppercase lg:justify-start lg:gap-9">
              <li ><a href="#" onclick="changePlanets()">Moon</a></li>
              <li><a href="#" onclick="changePlanets()">Mars</a></li>
              <li><a href="#" onclick="changePlanets()">Europa</a></li>
              <li><a href="#" onclick="changePlanets()">Titan</a></li>
            </ul>
          </div>

      <div class="space-y-2">
        <h1 class="uppercase text-center text-2xl text-white lg:text-left lg:text-5xl">${planetDescription.name}</h1>
        <p class="text-sm text-center lg:text-left">${planetDescription.description}</p>
      </div>

      <div class="flex flex-col items-center border-t border-gray-700 pt-4 lg:flex-row lg:w-3/4 lg:gap-12">
          <p class="uppercase text-sm text-center lg:text-left">Avg. Distance<span class="text-gray-300 block text-center text-xl lg:text-left">${planetDescription.distance}</span></p>
          <p class="uppercase text-sm text-center lg:text-left">Est. Travel Time<span class="text-gray-300 block text-center text-xl lg:text-left">${planetDescription.travel}</span></p>
      </div>
    </article>`

    let oldChild = document.body.querySelector("main").children[1];

    document.body.querySelector("main").replaceChild(section, oldChild);

    let planets = document.querySelectorAll(".planets ul li");
    
    planets.forEach((planet)=>{
        if(planet.textContent == planetDescription.name){
            planets.forEach(item=>{
                item.classList.remove("active")
            })
            planet.classList.add("active")
        }
    })


}
