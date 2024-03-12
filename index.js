// TEMPORADA

let carrito = []

let shoestem = [
    {
        imagen: "./zapatos/pato1.webp",
        nombre: "Adidas Performance",
        descripcion: "Tenis Running Negro-Rojo adidas Performance Response Runner",
        precio: 192.900
    },
    {
        imagen: "./zapatos/pato2.webp",
        nombre: "Royal County Of Berkshire Polo Club",
        descripcion: "Tenis Lifestyle Blanco-Miel-Dorado Royal County of Berkshire Polo Club",
        precio: 109.900
    },
    {
        imagen: "./zapatos/pato3.webp",
        nombre: "Adidas Performance",
        descripcion: "Tenis Running Azul Raf-Coral-Negro adidas Performance",
        precio: 210.900
    },
    {
        imagen: "./zapatos/pato4.webp",
        nombre: "Adidas Performance",
        descripcion: "Tenis Running Azul Grisáceo-Verde Neón-Negro adidas Performance",
        precio: 189.900
    },
    {
        imagen: "./zapatos/pato5.webp",
        nombre: "Adidas Performance",
        descripcion: "Tenis Running Azul-Turquesa-Rosa adidas Performance Galaxy 6",
        precio: 264.900
    },
    {
        imagen: "./zapatos/pato6.webp",
        nombre: "Adidas Performance",
        descripcion: "Tenis Running Negro-Coral-Gris adidas Performance Galaxy 6",
        precio: 213.900
    },
    {
        imagen: "./zapatos/pato7.webp",
        nombre: "Royal County Of Berkshire Polo Club",
        descripcion: "Tenis Blanco Royal County of Berkshire Polo Club",
        precio: 94.900
    },
    {
        imagen: "./zapatos/pato8.webp",
        nombre: "Royal County Of Berkshire Polo Club",
        descripcion: "Tenis Lifestyle Blanco-Oro Rosa Royal County of Berkshire Polo Club",
        precio: 109.900
    },
    {
        imagen: "./zapatos/pato9.webp",
        nombre: "Royal County Of Berkshire Polo Club",
        descripcion: "Tenis Lifestyle Marfil-Oro Rosa Royal County of Berkshire Polo Club",
        precio: 109.900
    },
    {
        imagen: "./zapatos/pato11.webp",
        nombre: "adidas Performance",
        descripcion: "Tenis Running Malva-Blanco adidas Performance Runfalcon 3.0",
        precio: 230.900
    },
    {
        imagen: "./zapatos/pato12.webp",
        nombre: "Royal County Of Berkshire Polo Club",
        descripcion: "Tenis Blanco-Rosa Royal County of Berkshire Polo Club",
        precio: 109.900
    },
    {
        imagen: "./zapatos/pato13.webp",
        nombre: "adidas Performance",
        descripcion: "Tenis Running Negro adidas Performance Response Runner",
        precio: 193.900
    },
    {
        imagen: "./zapatos/pato15.webp",
        nombre: "Royal County Of Berkshire Polo Club",
        descripcion: "Tenis Lifestyle Blanco-Negro Royal County of Berkshire Polo Club",
        precio: 109.900
    },
    {
        imagen: "./zapatos/pato16.webp",
        nombre: "adidas Performance",
        descripcion: "Tenis Running Negro-Blanco-Rojo adidas Performance Duramo SL",
        precio: 261.900
    },
    {
        imagen: "./zapatos/pato17.webp",
        nombre: "adidas Performance",
        descripcion: "Tenis Running Negro-Blanco adidas Performance Duramo SL",
        precio: 257.900
    },
]

function aparecer() {
    let totalizar = 0
    let contador = 1
    let cant = 1
    shoestem.forEach((item) => {
        let fila = document.createElement("tr");
        fila.id = "fila"
        let celda = document.createElement("td");

        let ul = document.createElement("ul")
        let li = document.createElement("li")
        li.textContent = item.imagen + ", " + item.nombre + ", " + item.descripcion + ", " + item.precio
        ul.appendChild(li)
        celda = document.createElement("td");
        let ima = document.createElement("img")
        ima.src = item.imagen
        celda.appendChild(ima)
        fila.appendChild(celda)

        celda = document.createElement("td");
        celda.id = "nombre-zap"
        celda.textContent = item.nombre
        fila.appendChild(celda)

        celda = document.createElement("td");
        celda.textContent = item.descripcion
        fila.appendChild(celda)

        celda = document.createElement("td");
        celda.id = "precio"
        celda.textContent = item.precio.toFixed(3)
        fila.appendChild(celda)
        celda = document.createElement("td");
        let anadir = document.createElement("button")
        anadir.textContent = "añadir ➕"
        anadir.id="anadir"
        anadir.addEventListener("click", () => {
            const index = carrito.findIndex((element) => element.descripcion === item.descripcion);

            if (index !== -1) {
                carrito[index].cantidad += 1;
            } else {
                item.cantidad = 1;
                carrito.push(item);
            }
            let tableBody = document.getElementById("modal-body");
            while (tableBody.firstChild) {
                tableBody.removeChild(tableBody.firstChild);
            }

            document.getElementById("contadorr").textContent = contador++
            carrito.forEach((item) => {
                let fila = document.createElement("tr");
                fila.id = "fila2"
                let celda = document.createElement("td");
                let ul = document.createElement("ul")
                let li = document.createElement("li")
                li.textContent = item.imagen + ", " + item.nombre + ", " + item.descripcion + ", " + item.precio
                ul.appendChild(li)
                celda = document.createElement("td");
                celda.id = "img-carrito"
                let ima = document.createElement("img")
                ima.src = item.imagen
                celda.appendChild(ima)
                fila.appendChild(celda)

                celda = document.createElement("td");
                celda.id = "nombre-zap"
                celda.textContent = item.nombre
                fila.appendChild(celda)

                celda = document.createElement("td");
                celda.id = "precio"
                celda.textContent = item.precio.toFixed(3)
                fila.appendChild(celda)

                celda = document.createElement("button")
                celda.id = "eliminar"
                celda.textContent = "❌"
                celda.addEventListener("click", () => {
                    const index = carrito.indexOf(item);
                    if (index > -1) {
                        contador = contador - 1;
                        totalizar = totalizar - item.precio;
                        document.getElementById('contadorr').textContent = contador - 1;
                        document.getElementById("totalpagar").textContent = `Total:${totalizar.toFixed(3)}`
                        document.getElementById("cantidad" + item.descripcion).textContent= `cantidad: ${item.cantidad-=1}` 
                        const filaAEliminar = celda.closest('tr');
                        if (filaAEliminar) {
                            if(item.cantidad < 1){
                                carrito.splice(index, 1);
                                filaAEliminar.remove();
                            }
                            
                        }
                    }
                })

                fila.appendChild(celda)

                celda = document.createElement("td");
                celda.id = "cantidad" + item.descripcion
                celda.textContent = `cantidad: ${item.cantidad}`
                fila.appendChild(celda)

                document.getElementById("modal-body").appendChild(fila)
            })
            totalizar = totalizar += item.precio
            document.getElementById("totalpagar").textContent = `Total:${totalizar.toFixed(3)}`
        })
        celda.appendChild(anadir)
        fila.appendChild(celda)
        document.getElementById("zapatos").appendChild(fila)
    })
}
console.log(carrito);
