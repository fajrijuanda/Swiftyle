import { Module } from "@nestjs/common";
import { AddressesModule } from "./addresses/addresses.module";
import { PaymentsModule } from "./payments/payments.module";
import { OrderModule } from "./order/order.module";
import { GenreModule } from "./genre/genre.module";
import { ShippingModule } from "./shipping/shipping.module";
import { MessageModule } from "./message/message.module";
import { StyleModule } from "./style/style.module";
import { ShopModule } from "./shop/shop.module";
import { ChatModule } from "./chat/chat.module";
import { CartModule } from "./cart/cart.module";
import { AppCouponsModule } from "./appCoupons/appCoupons.module";
import { ReviewModule } from "./review/review.module";
import { PreferencesModule } from "./preferences/preferences.module";
import { RefundRequestModule } from "./refundRequest/refundRequest.module";
import { RefundModule } from "./refund/refund.module";
import { TransactionModule } from "./transaction/transaction.module";
import { CheckoutModule } from "./checkout/checkout.module";
import { OrderHistoryModule } from "./orderHistory/orderHistory.module";
import { MainCategoryModule } from "./mainCategory/mainCategory.module";
import { SubCategoryModule } from "./subCategory/subCategory.module";
import { ComplaintsModule } from "./complaints/complaints.module";
import { WishlistModule } from "./wishlist/wishlist.module";
import { ProductModule } from "./product/product.module";
import { ShopCouponsModule } from "./shopCoupons/shopCoupons.module";
import { CourierModule } from "./courier/courier.module";
import { CourierCategoryModule } from "./courierCategory/courierCategory.module";
import { PromotionsModule } from "./promotions/promotions.module";
import { UserModule } from "./user/user.module";
import { WishlistItemModule } from "./wishlistItem/wishlistItem.module";
import { ProductCategoryModule } from "./productCategory/productCategory.module";
import { CartItemModule } from "./cartItem/cartItem.module";
import { ProductPromotionModule } from "./productPromotion/productPromotion.module";
import { ProductStyleModule } from "./productStyle/productStyle.module";
import { ProductGenreModule } from "./productGenre/productGenre.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AddressesModule,
    PaymentsModule,
    OrderModule,
    GenreModule,
    ShippingModule,
    MessageModule,
    StyleModule,
    ShopModule,
    ChatModule,
    CartModule,
    AppCouponsModule,
    ReviewModule,
    PreferencesModule,
    RefundRequestModule,
    RefundModule,
    TransactionModule,
    CheckoutModule,
    OrderHistoryModule,
    MainCategoryModule,
    SubCategoryModule,
    ComplaintsModule,
    WishlistModule,
    ProductModule,
    ShopCouponsModule,
    CourierModule,
    CourierCategoryModule,
    PromotionsModule,
    UserModule,
    WishlistItemModule,
    ProductCategoryModule,
    CartItemModule,
    ProductPromotionModule,
    ProductStyleModule,
    ProductGenreModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
