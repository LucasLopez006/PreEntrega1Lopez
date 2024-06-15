const products = [
    {
        id: 1,
        category: "Ropa Deportiva",
        title: "Medias Adidas",
        stock: 29,
        price: "10 U$D",
        description: "XL, L, M",
        image:
        "https://http2.mlstatic.com/D_NQ_NP_610368-MLU72582464075_102023-O.webp",
    },
    {
        id: 2,
        category: "Ropa Deportiva",
        title: "Tobilleras deportiva",
        stock: 7,
        price: "25 U$D",
        description: "XL, L, M",
        image:
        "https://http2.mlstatic.com/D_NQ_NP_973698-MLU70826059891_082023-O.webp",
    },
    {
        id: 3,
        category: "Ropa Deportiva",
        title: "Conjunto Topper",
        stock: 3,
        price: "50 U$D",
        description: "XL, L, M, S",
        image:
        "https://http2.mlstatic.com/D_NQ_NP_945785-MLU73180118936_122023-O.webp",
    },
    {
        id: 4,
        category: "Ropa Deportiva",
        title: "Remera térmica",
        stock: 6,
        price: "75 U$D",
        description: " L, M, S, XS",
        image:
        "https://http2.mlstatic.com/D_NQ_NP_792039-MLU44311325378_122020-O.webp",
    },

    {
        id: 5,
        category: "Remeras de Fútbol",
        title: "Conjunto Peñarol",
        stock: 16,
        price: "100 U$D",
        description: "XL, L, M, S, XS",
        image:
        "https://http2.mlstatic.com/D_NQ_NP_767201-MLU53007378707_122022-O.webp",
    },
    {
        id: 6,
        category: "Remeras de Fútbol",
        title: "Remera River Plate",
        stock: 26,
        price: "80 U$D",
        description: "XL, L, M, S, XS",
        image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e9e8fc0f42384bd68640166b32292473_9366/Camiseta_Titular_River_Plate_23-24_Blanco_GC0418_01_laydown.jpg",
    },
    {
        id: 7,
        category: "Remeras de Fútbol",
        title: "Remera Boca Juniors",
        stock: 23,
        price: "80 U$D",
        description: "XL, L, M, S, XS",
        image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/43b3d5dca79c4970ba7d510045536008_9366/Camiseta_Titular_Boca_Juniors_23-24_Azul_IV1922_01_laydown.jpg",
    },
    {
        id: 8,
        category: "Remeras de Fútbol",
        title: "Conjunto Madrid",
        stock: 7,
        price: "110 U$D",
        description: "XL, L, M, S, XS",
        image:
        "https://http2.mlstatic.com/D_NQ_NP_879093-MLU74366033797_022024-O.webp",
    },
    {
        id: 9,
        category: "Remeras de Fútbol",
        title: "Conjunto Barcelona",
        stock: 8,
        price: "110 U$D",
        description: "XL, L, M, S, XS",
        image:
        "https://http2.mlstatic.com/D_NQ_NP_870268-MLU74251586602_022024-O.webp",
    },
    {
        id: 10,
        category: "Remeras de Fútbol",
        title: "Conjunto Liverpool",
        stock: 13,
        price: "100 U$D",
        description: "L, M, S, XS",
        image:
        "https://http2.mlstatic.com/D_NQ_NP_899119-MLU73181081859_112023-O.webp",
    },
    {
        id: 11,
        category: "Remeras de Fútbol",
        title: "Conjunto Inter miami",
        stock: 5,
        price: "100 U$D",
        description: "XL, L, S, XS",
        image:
        "https://http2.mlstatic.com/D_NQ_NP_674817-MLU73933016934_012024-O.webp",
    },
    {
        id: 12,
        category: "Remeras de Fútbol",
        title: "Remera retro Mancheser United",
        stock: 8,
        price: "150 U$D",
        description: "XL, L, M",
        image:
        "https://http2.mlstatic.com/D_NQ_NP_914733-MLU74533479550_022024-O.webp",
    },
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const searchProducts = async (query) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const results = products.filter(product => 
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            resolve(results);
        }, 500); 
    });
};


