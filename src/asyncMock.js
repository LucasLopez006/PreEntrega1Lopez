const products = [
    {
        id: 1,
        category: "Ropa Deportiva",
        title: "Medias Adidas",
        stock: 10,
        price: "10U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "/Ropas",
    },
    {
        id: 2,
        category: "Ropa Deportiva",
        title: "Tobilleras deportiva",
        stock: 7,
        price: "25|U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
    },
    {
        id: 3,
        category: "Ropa Deportiva",
        title: "Conjunto Topper",
        stock: 3,
        price: "50U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
    },
    {
        id: 4,
        category: "Ropa Deportiva",
        title: "Remera térmica",
        stock: 6,
        price: "75U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
    },

    {
        id: 5,
        category: "Remeras de Fútbol",
        title: "Conjunto Peñarol",
        stock: 16,
        price: "100U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
    },
    {
        id: 6,
        category: "Remeras de Fútbol",
        title: "Remera River Plate",
        stock: 8,
        price: "80U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
    },
    {
        id: 7,
        category: "Remeras de Fútbol",
        title: "Remera Boca Juniors",
        stock: 10,
        price: "80U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
    },
    {
        id: 8,
        category: "Remeras de Fútbol",
        title: "Conjunto Madrid",
        stock: 10,
        price: "110U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
    },
    {
        id: 9,
        category: "Remeras de Fútbol",
        title: "Conjunto Barcelona",
        stock: 10,
        price: "110U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
    },
    {
        id: 10,
        category: "Remeras de Fútbol",
        title: "Conjunto Liverpool",
        stock: 10,
        price: "100U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
    },
    {
        id: 11,
        category: "Remeras de Fútbol",
        title: "Conjunto Inter miami",
        stock: 10,
        price: "100U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
    },
    {
        id: 12,
        category: "Remeras de Fútbol",
        title: "Remera retro Mancheser United",
        stock: 10,
        price: "150U$D",
        description: "Tallas: XL, L, M, S, XS",
        image:
        "",
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
    return products.find((prod)=> prod.id == id);
}