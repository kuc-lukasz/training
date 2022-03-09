import { useState } from "react";
import { useQuery } from "react-query";

// components
import { Drawer } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons";
import { Badge } from "@material-ui/core";

//styles
import { Wrapper } from "./App.styles";
import { Item } from "./item/item";

//tworzenie typu danych dla typescript
export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);

    // w hook useQuery wchodzi funkcja fetcha, czyli w naszym wypadku 'getProducts' które nazywamy 'products'
    const { data, isLoading, error } = useQuery<CartItemType[]>(
        `products`,
        getProducts
    );
    console.log(data);

    const getTotalItems = () => null;

    const handleAddToCart = (clickedItem: CartItemType) => null;

    const handleRemoveFromCart = () => null;

    //warunki jeśli jest ładowanie lub progres
    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong ...</div>;

    return (
        <Wrapper>
            <Grid container spacing={3}>
                {data?.map((item) => (
                    <Grid item key={item.id} xs={12} sm={4}>
                        <Item
                            item={item}
                            handleAddToCart={handleAddToCart}
                        ></Item>
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
}

export default App;
