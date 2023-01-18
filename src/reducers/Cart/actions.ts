import { Coffee } from "../../components/CardItem";

export enum ActionType {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_UNIT = "REMOVE_PRODUCT_UNIT",
  REMOVE_PRODUCT_TO_CART = "REMOVE_PRODUCT_TO_CART",
  CLEAR_CART = "CLEAR_CART",
}

export function addProductToCartAction(coffee: Coffee) {
  return {
    type: ActionType.ADD_PRODUCT_TO_CART,
    payload: coffee,
  };
}

export function removeProductToCartAction(id: string) {
  return {
    type: ActionType.REMOVE_PRODUCT_TO_CART,
    payload: id,
  };
}

export function removeProductUnitAction(id: string) {
  return {
    type: ActionType.REMOVE_PRODUCT_UNIT,
    payload: id,
  };
}

export function clearCartAction() {
  return {
    type: ActionType.CLEAR_CART,
  };
}
