

declare module 'shopify-buy' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ShopifyBuy' {
		declare interface Image {
		id: string | number,
		created_at: string,
		position: number,
		updated_at: string,
		product_id: string,
		src: string,
		variant_ids: Array<string>
	}

	declare interface ImageVariant {
		name: string,
		dimensions: string,
		src: string
	}

	declare interface OptionValue {
		name: string,
		option_id: string | number,
		value: any
	}

	declare export function buildClient(configAttrs: Shopify.Config): Shopify.ShopClient

	declare class BaseModel  {
		constructor(attrs: any, metaAttrs: any): this;
		attrs: any;
		serializer: any;
		adapter: any;
		shopClient: any
	}

	
}

declare module 'Shopify' {
		declare interface Config {
		apiKey: string,
		appId: string,
		domain: string
	}

	declare interface CartModelItem {
		variant: Shopify.ProductVariantModel,
		quantity: number
	}

		declare class ShopClient  {
		constructor(config?: Config): this;
		createCart(): Promise<CartModel>;
		fetchAllCollections(): Promise<Array<any>>;
		fetchAllProducts(): Promise<Array<ProductModel>>;
		fetchCart(id: string): Promise<CartModel>;
		fetchCollection(id: string | number): Promise<any>;
		fetchProduct(id: string | number): Promise<ProductModel>;
		fetchQueryCollections(query?: any): Promise<Array<any>>;
		fetchQueryProducts(query?: any): Promise<Array<ProductModel>>;
		fetchRecentCart(): Promise<CartModel>
	}

	declare class ProductModel extends BaseModel {
		constructor(): this;
		description: string;
		id: string | number;
		images: Array<Image>;
		variants: Array<ProductVariantModel>;
		options: Array<ProductOptionModel>;
		selectedVariant: ProductVariantModel;
		selectedVariantImage: Image;
		selections: Array<string>;
		title: string
	}

	declare class ProductVariantModel extends BaseModel {
		constructor(): this;
		checkoutUrl(quantitiy: number): string;
		available: boolean;
		compareAtPrice: string;
		formattedPrice: string;
		grams: number;
		id: string | number;
		image: Image;
		imageVariant: Array<ImageVariant>;
		optionValues: Array<OptionValue>;
		price: string;
		productId: string | number;
		productTitle: string;
		title: string
	}

	declare class ProductOptionModel extends BaseModel {
		constructor(): this;
		name: string;
		selected: string;
		values: Array<any>
	}

	declare class CartModel extends BaseModel {
		constructor(): this;
		clearLineItems(): Promise<CartModel>;
		addVariants(item: CartModelItem, nextItem?: Array<CartModelItem>): Promise<CartModel>;
		createLineItemsFromVariants(...items: CartModelItem[]): Promise<CartModel>;
		removeLineItem(id: string | number): Promise<CartModel>;
		updateLineItem(id: string | number, quantitiy: number): Promise<CartModel>;
		updateModel(): Promise<CartModel>;
		checkoutUrl: string;
		id: string | number;
		lineItemCount: number;
		lineItems: Array<CartLineItemModel>;
		subtotal: string
	}

	declare class CartLineItemModel extends BaseModel {
		constructor(): this;
		compare_at_price: string;
		grams: number;
		id: string | number;
		image: Image;
		line_price: string;
		price: string;
		product_id: string | number;
		quantity: number;
		title: string;
		variant_id: string | number;
		variant_title: string
	}

	
}