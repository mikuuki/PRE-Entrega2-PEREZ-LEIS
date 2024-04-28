const productos = [
    {id: 1, 
        nombre: "Taza con foto",
        descripcion: "Taza con foto familiar a color",
        stock: 3,
        precio:6000,
        categoria: "regalos",
        image: "https://mamushkapalma.es/2097-large_default/taza-fotos-familia.jpg"
    },
    {id: 2, 
        nombre: "Tarjeta de evento",
        descripcion: "Tarjetas de cumpleaños y eventos x50",
        stock: 6,
        precio: 6000,
        categoria: "tarjetas",
        image: "https://i.pinimg.com/736x/ca/3c/40/ca3c40098802381d88e3736b7d6baf58--misa-requiem.jpg"

    },
    {id: 3, 
        nombre: "Remera personalizada",
        descripcion: "Remeras personalizadas de tus cosas favoritas",
        stock: 10,
        precio: 12000,
        categoria: "indumentaria",
        image: "https://th.bing.com/th/id/OIP.J_LqP8gj9JuCbDI-DniziAHaJ-?rs=1&pid=ImgDetMain"
    },
    {id: 4, 
        nombre: "Sube personalizada",
        descripcion: "Tu tarjeta SUBE con diseño propio para regalar a tus seres queridos",
        stock: 3,
        precio:2000,
        categoria: "regalos",
        image: "https://http2.mlstatic.com/D_NQ_NP_965190-MLA32461566578_102019-O.webp"
    },
    {id: 5, 
        nombre: "Tarjeta presentacion",
        descripcion: "Tarjetas de tu empresa emprendimiento x100",
        stock: 6,
        precio: 6000,
        categoria: "tarjetas",
        image: "https://i.etsystatic.com/6109160/r/il/ee5cec/2328243526/il_570xN.2328243526_bpp2.jpg"

    },
    {id: 6, 
        nombre: "Stickers",
        descripcion: "Stickers de tus logos, dibujos y famosos",
        stock: 10,
        precio: 2000,
        categoria: "regalos",
        image: "https://th.bing.com/th/id/R.3ca12379d39471754b8a0d6d61a6ef69?rik=jI2EZAB6XjMHlA&riu=http%3a%2f%2flivedoor.blogimg.jp%2ftoys_stimpy%2fimgs%2f9%2fb%2f9b1d3813.jpg&ehk=cZDClZ4Y1EooXgrKcQW6iA0LtRhfOQXyplvRozrdVO0%3d&risl=&pid=ImgRaw&r=0"
    },
    {id: 7, 
        nombre: "Buzo Egresaditos",
        descripcion: "Pedi tu pack de buzos egresaditos hasta 30 pedidos",
        stock: 30,
        precio: 80000,
        categoria: "indumentaria",
        image: "https://th.bing.com/th/id/OIP.5rp6pcfSdV7y7wilbdBekQHaHa?rs=1&pid=ImgDetMain"
    },
    {id: 8, 
        nombre: "Llavero personalizado",
        descripcion: "Elegi el diseño y si te llevas 3, te regalamos 1 taza",
        stock: 6,
        precio: 2000,
        categoria: "regalos",
        image: "https://th.bing.com/th/id/OIP.rEAB3sPKm0Q8VMAuqMrMeAHaHa?rs=1&pid=ImgDetMain"
    }
]

const verProductos = new Promise ((resolve,reject)=>{


setTimeout (()=>{
    resolve (productos);
}, 3000);
});
export default verProductos