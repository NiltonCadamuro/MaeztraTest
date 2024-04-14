import Slider from "../Slider";
import Title from "../Title";
import ProductSummary from "./ProductSummary";
import { Product } from "./ProductSummary/types";

const Shelf = () => {
    const products: Product[] = [
            {
              image: "/products/product-1.png",
              name: "Faux Suede Mini Skirt",
              description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
              price: 500,
              link: "/product-1",
              skus: [
                {
                  id: "laranja",
                  color: "#DEAC71",
                },
                {
                  id: "rosa",
                  color: "#D37164",
                },
                {
                  id: "azul",
                  color: "#6497D3",
                },
                {
                  id: "roxo",
                  color: "#3C3B79",
                }
              ],
            },
            {
                image: "/products/product-2.png",
                name: "Ruched Rose Print Mini Skirt",
                description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
                price: 320,
                link: "/product-2",
                skus: [
                  {
                    id: "preto",
                    color: "#1C1A19",
                  },
                  {
                    id: "vermelho",
                    color: "#D84E4B",
                  },
                  {
                    id: "cinza",
                    color: "#CFC9B0",
                  },
                  {
                    id: "branco",
                    color: "#EAE9E5",
                  }
                ],
              },
              {
                image: "/products/product-1.png",
                name: "Faux Suede Mini Skirt",
                description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
                price: 500,
                link: "/product-1",
                skus: [
                  {
                    id: "laranja",
                    color: "#DEAC71",
                  },
                  {
                    id: "rosa",
                    color: "#D37164",
                  },
                  {
                    id: "azul",
                    color: "#6497D3",
                  },
                  {
                    id: "roxo",
                    color: "#3C3B79",
                  }
                ],
              },
              {
                  image: "/products/product-2.png",
                  name: "Ruched Rose Print Mini Skirt",
                  description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
                  price: 320,
                  link: "/product-2",
                  skus: [
                    {
                      id: "preto",
                      color: "#1C1A19",
                    },
                    {
                      id: "vermelho",
                      color: "#D84E4B",
                    },
                    {
                      id: "cinza",
                      color: "#CFC9B0",
                    },
                    {
                      id: "branco",
                      color: "#EAE9E5",
                    }
                  ],
                },
                {
                    image: "/products/product-1.png",
                    name: "Faux Suede Mini Skirt",
                    description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
                    price: 500,
                    link: "/product-1",
                    skus: [
                      {
                        id: "laranja",
                        color: "#DEAC71",
                      },
                      {
                        id: "rosa",
                        color: "#D37164",
                      },
                      {
                        id: "azul",
                        color: "#6497D3",
                      },
                      {
                        id: "roxo",
                        color: "#3C3B79",
                      }
                    ],
                  },
                  {
                      image: "/products/product-2.png",
                      name: "Ruched Rose Print Mini Skirt",
                      description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
                      price: 320,
                      link: "/product-2",
                      skus: [
                        {
                          id: "preto",
                          color: "#1C1A19",
                        },
                        {
                          id: "vermelho",
                          color: "#D84E4B",
                        },
                        {
                          id: "cinza",
                          color: "#CFC9B0",
                        },
                        {
                          id: "branco",
                          color: "#EAE9E5",
                        }
                      ],
                    },
            ];

    return (
        <section className="w-full mx-auto max-w-[1600px]">
            <Title className="mb-4 lg:mb-6">As Mais Pedidas</Title>
            <div className="pl-4 lg:pl-0">
            <Slider
                sliderName='shelf'
                slidesPerView={1.12}
                spaceBetween={14}
                breakpoints={
                    {
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 16
                        }
                    }
                }
                dots={false}
                arrow >
                {products.map((product, index) => (
                    <ProductSummary
                        key={index}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        link={product.link}
                        skus={product.skus}
                    />
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default Shelf;