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

//tworzenie typu danych dla typescript
export type CartItemType = {
    id: number;
    category: string;
    description: string;
    img: string;
    price: number;
    title: string;
    amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
    // w hook useQuery wchodzi funkcja fetcha, czyli w naszym wypadku 'getProducts' które nazywamy 'products'
    const { data, isLoading, error } = useQuery<CartItemType[]>(
        `products`,
        getProducts
    );
    console.log(data);

    const getTotalItems = () => null;

    const handleAddToCart = () => null;

    const handleRemoveFromCart = () => null;

    if (isLoading) return <LinearProgress />;
    if (error) return <div>Something went wrong ...</div>;

    return <div className="App"></div>;
}

export default App;
