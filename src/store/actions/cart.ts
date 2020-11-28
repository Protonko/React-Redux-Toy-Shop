// types
import {
  IAddToCart,
  IRemoveFromCart,
  IToggleSelectProduct,
  IDeleteSelected,
  IAddToCartFromLocalStorage
} from 'models/store/actions/cart';
import {IProduct} from 'models/interfaces';
import {TAppThunk} from 'models/store';
import keyMirror from 'utils/keyMirror';
import CartStorage from 'classes/LocalStorage/CartStorage';

interface IItemsFromLocalStorage {
  [key: string]: IProduct,
}

const PREFIX = '[CART]';

export const ACTIONS = keyMirror(
  [
    'ADD_TO_CART',
    'REMOVE_FROM_CART',
    'TOGGLE_SELECT_PRODUCT',
    'DELETE_SELECTED',
    'ADD_TO_CART_FROM_LOCAL_STORAGE',
  ],
  PREFIX,
);

const addToCartReducer = (payload: IProduct): IAddToCart =>
  ({type: ACTIONS.ADD_TO_CART, payload});

const addToCartFromLocalStorage = (payload: Array<IProduct>):
  IAddToCartFromLocalStorage =>
    ({type: ACTIONS.ADD_TO_CART_FROM_LOCAL_STORAGE, payload});

export const removeFromCartReducer = (payload: IProduct): IRemoveFromCart =>
  ({type: ACTIONS.REMOVE_FROM_CART, payload});

export const toggleSelectProduct = (payload: number | string): IToggleSelectProduct =>
  ({type: ACTIONS.TOGGLE_SELECT_PRODUCT, payload});

export const deleteSelected = (): IDeleteSelected => ({type: ACTIONS.DELETE_SELECTED});

export const getSelectedItems = (): TAppThunk =>
  dispatch => {
    const selectedItems: IItemsFromLocalStorage = CartStorage.getData();
    const selectedItemsArray = Object.values(selectedItems);
    dispatch(addToCartFromLocalStorage(selectedItemsArray));
  }

export const addToCart = (product: IProduct): TAppThunk =>
  dispatch => {
    CartStorage.setValue(product.id.toString(), product);
    dispatch(addToCartReducer(product));
  }

export const removeFromCart = (product: IProduct): TAppThunk =>
  dispatch => {
    CartStorage.removeValue(product.id.toString());
    dispatch(removeFromCartReducer(product));
  }
