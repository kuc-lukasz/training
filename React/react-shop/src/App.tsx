import "./App.css";
import { useState } from "react";
import { useQuery } from "react-query";
// Components
// import Item from './Item/Item';
// import Cart from './Cart/Cart';
import Drawer from "@mui/material/Drawer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";
// Styles
import { Wrapper, StyledButton } from "./App.styles";
import { Item } from "./Item/Item";

// Types

export interface CartItemType {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    quantity: number;
}

const getProducts = async (): Promise<CartItemType[]> => {
    return await (await fetch("https://fakestoreapi.com/products")).json();
};

function App() {
    const { isLoading, error, data } = useQuery<CartItemType[]>(
        "products",
        getProducts
    ); //nazywa w nawiazach query key, w tym wypadku products. Musze zawsze nadać key
    console.log(data);

    const GetTotalItems = () => null;
    const handleAddToCart = (ClickedItem: CartItemType) => null;
    const handleRemoveFromCart = () => null;

    if (isLoading)
        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        );
    if (error) return <div>Something goes wrong! </div>;

    return (
        <>
            <Wrapper>
                <Grid container spacing={3}>
                    {data?.map((item) => {
                        return (
                            <>
                                <Item
                                    item={item}
                                    handleAddToCart={handleAddToCart}
                                />
                            </>
                        );
                    })}
                </Grid>
            </Wrapper>
        </>
    );
}

export default App;
