import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AddressesList } from "./addresses/AddressesList";
import { AddressesCreate } from "./addresses/AddressesCreate";
import { AddressesEdit } from "./addresses/AddressesEdit";
import { AddressesShow } from "./addresses/AddressesShow";
import { PaymentsList } from "./payments/PaymentsList";
import { PaymentsCreate } from "./payments/PaymentsCreate";
import { PaymentsEdit } from "./payments/PaymentsEdit";
import { PaymentsShow } from "./payments/PaymentsShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { GenreList } from "./genre/GenreList";
import { GenreCreate } from "./genre/GenreCreate";
import { GenreEdit } from "./genre/GenreEdit";
import { GenreShow } from "./genre/GenreShow";
import { ShippingList } from "./shipping/ShippingList";
import { ShippingCreate } from "./shipping/ShippingCreate";
import { ShippingEdit } from "./shipping/ShippingEdit";
import { ShippingShow } from "./shipping/ShippingShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { StyleList } from "./style/StyleList";
import { StyleCreate } from "./style/StyleCreate";
import { StyleEdit } from "./style/StyleEdit";
import { StyleShow } from "./style/StyleShow";
import { ShopList } from "./shop/ShopList";
import { ShopCreate } from "./shop/ShopCreate";
import { ShopEdit } from "./shop/ShopEdit";
import { ShopShow } from "./shop/ShopShow";
import { ChatList } from "./chat/ChatList";
import { ChatCreate } from "./chat/ChatCreate";
import { ChatEdit } from "./chat/ChatEdit";
import { ChatShow } from "./chat/ChatShow";
import { CartList } from "./cart/CartList";
import { CartCreate } from "./cart/CartCreate";
import { CartEdit } from "./cart/CartEdit";
import { CartShow } from "./cart/CartShow";
import { AppCouponsList } from "./appCoupons/AppCouponsList";
import { AppCouponsCreate } from "./appCoupons/AppCouponsCreate";
import { AppCouponsEdit } from "./appCoupons/AppCouponsEdit";
import { AppCouponsShow } from "./appCoupons/AppCouponsShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { PreferencesList } from "./preferences/PreferencesList";
import { PreferencesCreate } from "./preferences/PreferencesCreate";
import { PreferencesEdit } from "./preferences/PreferencesEdit";
import { PreferencesShow } from "./preferences/PreferencesShow";
import { RefundRequestList } from "./refundRequest/RefundRequestList";
import { RefundRequestCreate } from "./refundRequest/RefundRequestCreate";
import { RefundRequestEdit } from "./refundRequest/RefundRequestEdit";
import { RefundRequestShow } from "./refundRequest/RefundRequestShow";
import { RefundList } from "./refund/RefundList";
import { RefundCreate } from "./refund/RefundCreate";
import { RefundEdit } from "./refund/RefundEdit";
import { RefundShow } from "./refund/RefundShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { CheckoutList } from "./checkout/CheckoutList";
import { CheckoutCreate } from "./checkout/CheckoutCreate";
import { CheckoutEdit } from "./checkout/CheckoutEdit";
import { CheckoutShow } from "./checkout/CheckoutShow";
import { OrderHistoryList } from "./orderHistory/OrderHistoryList";
import { OrderHistoryCreate } from "./orderHistory/OrderHistoryCreate";
import { OrderHistoryEdit } from "./orderHistory/OrderHistoryEdit";
import { OrderHistoryShow } from "./orderHistory/OrderHistoryShow";
import { MainCategoryList } from "./mainCategory/MainCategoryList";
import { MainCategoryCreate } from "./mainCategory/MainCategoryCreate";
import { MainCategoryEdit } from "./mainCategory/MainCategoryEdit";
import { MainCategoryShow } from "./mainCategory/MainCategoryShow";
import { SubCategoryList } from "./subCategory/SubCategoryList";
import { SubCategoryCreate } from "./subCategory/SubCategoryCreate";
import { SubCategoryEdit } from "./subCategory/SubCategoryEdit";
import { SubCategoryShow } from "./subCategory/SubCategoryShow";
import { ComplaintsList } from "./complaints/ComplaintsList";
import { ComplaintsCreate } from "./complaints/ComplaintsCreate";
import { ComplaintsEdit } from "./complaints/ComplaintsEdit";
import { ComplaintsShow } from "./complaints/ComplaintsShow";
import { WishlistList } from "./wishlist/WishlistList";
import { WishlistCreate } from "./wishlist/WishlistCreate";
import { WishlistEdit } from "./wishlist/WishlistEdit";
import { WishlistShow } from "./wishlist/WishlistShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ShopCouponsList } from "./shopCoupons/ShopCouponsList";
import { ShopCouponsCreate } from "./shopCoupons/ShopCouponsCreate";
import { ShopCouponsEdit } from "./shopCoupons/ShopCouponsEdit";
import { ShopCouponsShow } from "./shopCoupons/ShopCouponsShow";
import { CourierList } from "./courier/CourierList";
import { CourierCreate } from "./courier/CourierCreate";
import { CourierEdit } from "./courier/CourierEdit";
import { CourierShow } from "./courier/CourierShow";
import { CourierCategoryList } from "./courierCategory/CourierCategoryList";
import { CourierCategoryCreate } from "./courierCategory/CourierCategoryCreate";
import { CourierCategoryEdit } from "./courierCategory/CourierCategoryEdit";
import { CourierCategoryShow } from "./courierCategory/CourierCategoryShow";
import { PromotionsList } from "./promotions/PromotionsList";
import { PromotionsCreate } from "./promotions/PromotionsCreate";
import { PromotionsEdit } from "./promotions/PromotionsEdit";
import { PromotionsShow } from "./promotions/PromotionsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { WishlistItemList } from "./wishlistItem/WishlistItemList";
import { WishlistItemCreate } from "./wishlistItem/WishlistItemCreate";
import { WishlistItemEdit } from "./wishlistItem/WishlistItemEdit";
import { WishlistItemShow } from "./wishlistItem/WishlistItemShow";
import { ProductCategoryList } from "./productCategory/ProductCategoryList";
import { ProductCategoryCreate } from "./productCategory/ProductCategoryCreate";
import { ProductCategoryEdit } from "./productCategory/ProductCategoryEdit";
import { ProductCategoryShow } from "./productCategory/ProductCategoryShow";
import { CartItemList } from "./cartItem/CartItemList";
import { CartItemCreate } from "./cartItem/CartItemCreate";
import { CartItemEdit } from "./cartItem/CartItemEdit";
import { CartItemShow } from "./cartItem/CartItemShow";
import { ProductPromotionList } from "./productPromotion/ProductPromotionList";
import { ProductPromotionCreate } from "./productPromotion/ProductPromotionCreate";
import { ProductPromotionEdit } from "./productPromotion/ProductPromotionEdit";
import { ProductPromotionShow } from "./productPromotion/ProductPromotionShow";
import { ProductStyleList } from "./productStyle/ProductStyleList";
import { ProductStyleCreate } from "./productStyle/ProductStyleCreate";
import { ProductStyleEdit } from "./productStyle/ProductStyleEdit";
import { ProductStyleShow } from "./productStyle/ProductStyleShow";
import { ProductGenreList } from "./productGenre/ProductGenreList";
import { ProductGenreCreate } from "./productGenre/ProductGenreCreate";
import { ProductGenreEdit } from "./productGenre/ProductGenreEdit";
import { ProductGenreShow } from "./productGenre/ProductGenreShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FashionEcommerce"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Addresses"
          list={AddressesList}
          edit={AddressesEdit}
          create={AddressesCreate}
          show={AddressesShow}
        />
        <Resource
          name="Payments"
          list={PaymentsList}
          edit={PaymentsEdit}
          create={PaymentsCreate}
          show={PaymentsShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Genre"
          list={GenreList}
          edit={GenreEdit}
          create={GenreCreate}
          show={GenreShow}
        />
        <Resource
          name="Shipping"
          list={ShippingList}
          edit={ShippingEdit}
          create={ShippingCreate}
          show={ShippingShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Style"
          list={StyleList}
          edit={StyleEdit}
          create={StyleCreate}
          show={StyleShow}
        />
        <Resource
          name="Shop"
          list={ShopList}
          edit={ShopEdit}
          create={ShopCreate}
          show={ShopShow}
        />
        <Resource
          name="Chat"
          list={ChatList}
          edit={ChatEdit}
          create={ChatCreate}
          show={ChatShow}
        />
        <Resource
          name="Cart"
          list={CartList}
          edit={CartEdit}
          create={CartCreate}
          show={CartShow}
        />
        <Resource
          name="AppCoupons"
          list={AppCouponsList}
          edit={AppCouponsEdit}
          create={AppCouponsCreate}
          show={AppCouponsShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="Preferences"
          list={PreferencesList}
          edit={PreferencesEdit}
          create={PreferencesCreate}
          show={PreferencesShow}
        />
        <Resource
          name="RefundRequest"
          list={RefundRequestList}
          edit={RefundRequestEdit}
          create={RefundRequestCreate}
          show={RefundRequestShow}
        />
        <Resource
          name="Refund"
          list={RefundList}
          edit={RefundEdit}
          create={RefundCreate}
          show={RefundShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Checkout"
          list={CheckoutList}
          edit={CheckoutEdit}
          create={CheckoutCreate}
          show={CheckoutShow}
        />
        <Resource
          name="OrderHistory"
          list={OrderHistoryList}
          edit={OrderHistoryEdit}
          create={OrderHistoryCreate}
          show={OrderHistoryShow}
        />
        <Resource
          name="MainCategory"
          list={MainCategoryList}
          edit={MainCategoryEdit}
          create={MainCategoryCreate}
          show={MainCategoryShow}
        />
        <Resource
          name="SubCategory"
          list={SubCategoryList}
          edit={SubCategoryEdit}
          create={SubCategoryCreate}
          show={SubCategoryShow}
        />
        <Resource
          name="Complaints"
          list={ComplaintsList}
          edit={ComplaintsEdit}
          create={ComplaintsCreate}
          show={ComplaintsShow}
        />
        <Resource
          name="Wishlist"
          list={WishlistList}
          edit={WishlistEdit}
          create={WishlistCreate}
          show={WishlistShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="ShopCoupons"
          list={ShopCouponsList}
          edit={ShopCouponsEdit}
          create={ShopCouponsCreate}
          show={ShopCouponsShow}
        />
        <Resource
          name="Courier"
          list={CourierList}
          edit={CourierEdit}
          create={CourierCreate}
          show={CourierShow}
        />
        <Resource
          name="CourierCategory"
          list={CourierCategoryList}
          edit={CourierCategoryEdit}
          create={CourierCategoryCreate}
          show={CourierCategoryShow}
        />
        <Resource
          name="Promotions"
          list={PromotionsList}
          edit={PromotionsEdit}
          create={PromotionsCreate}
          show={PromotionsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="WishlistItem"
          list={WishlistItemList}
          edit={WishlistItemEdit}
          create={WishlistItemCreate}
          show={WishlistItemShow}
        />
        <Resource
          name="ProductCategory"
          list={ProductCategoryList}
          edit={ProductCategoryEdit}
          create={ProductCategoryCreate}
          show={ProductCategoryShow}
        />
        <Resource
          name="CartItem"
          list={CartItemList}
          edit={CartItemEdit}
          create={CartItemCreate}
          show={CartItemShow}
        />
        <Resource
          name="ProductPromotion"
          list={ProductPromotionList}
          edit={ProductPromotionEdit}
          create={ProductPromotionCreate}
          show={ProductPromotionShow}
        />
        <Resource
          name="ProductStyle"
          list={ProductStyleList}
          edit={ProductStyleEdit}
          create={ProductStyleCreate}
          show={ProductStyleShow}
        />
        <Resource
          name="ProductGenre"
          list={ProductGenreList}
          edit={ProductGenreEdit}
          create={ProductGenreCreate}
          show={ProductGenreShow}
        />
      </Admin>
    </div>
  );
};

export default App;
