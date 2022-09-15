import {useAppDispatch} from "../../store/hooks";
import {removeProductAction} from "../../store/productsSlice";
import {deleteProductApi} from "../../api/api-client";
import React from "react";
import {ButtonStyled} from "../../styles/Button.styled";

interface DeleteProductProps {
    productId: number;
}

export const DeleteProduct: React.FC<DeleteProductProps> = (props) => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        deleteProductApi({productId: props.productId}).then(() => {
            dispatch(removeProductAction(props.productId))
        })
    };

    return (

        <ButtonStyled bg={"#c32626"} onClick={handleDelete}>
            Delete
        </ButtonStyled>
    );
};
