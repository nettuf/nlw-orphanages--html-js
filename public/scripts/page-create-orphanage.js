const map = L.map('mapid').setView([-21.779248,-45.9697181], 20);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    const icon = L.icon({
        iconUrl: "/images/map-marker.svg",
        iconSize: [58,68],
        iconAnchor: [29,88]
    })

    let marker;

    map.on('click', (event)=> {
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;

        document.querySelector('[name=lat]').value = lat;
        document.querySelector('[name=lng]').value = lng

        marker && map.removeLayer(marker)

        marker = L.marker([lat,lng],{icon})
        .addTo(map)
    })

    // photos

    function addPhotoField(){
       // pegar o container de fotos
      const container = document.querySelector('#images')
        // pegar o container e duplicar
        const fieldsContainer = document.querySelectorAll('.new-upload')
        // realizar clone da ultima images
        const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)
        //verificar
        const input =  newFieldContainer.children[0]
        if(input.value == ""){
            return
        }
        //limpar
       input.value=""
        // adicionar o clone ao container
        container.appendChild(newFieldContainer)


    }

    function deleteField(event){
        const span = event.currentTarget
        const fieldsContainer = document.querySelectorAll('.new-upload')
        if(fieldsContainer.length <= 1){
            span.parentNode.children[0].value=""
            return
        }
        //deletar
        span.parentNode.remove();
    }

    //botao troca sim nao

    function toggleSelect(event){
         // retirar .active
         document.querySelectorAll('.button-select button')
         .forEach(function(button){
             button.classList.remove('active')
         })
         //colocar .active
         const button = event.currentTarget
         button.classList.add('active')
         // atualizar o input hidden
         const input = document.querySelector('[name="open_on_weekends]')
        //pegar o botao clicado
       input.value = button.dataset.value
        


    }