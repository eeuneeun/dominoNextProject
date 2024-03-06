declare module "redux-persist/lib/storage" {
  import { WebStorage } from "redux-persist/types/storage";

  const storage: WebStorage;

  export default storage;
}

declare module "redux-persist/integration/react" {
  export { PersistGate } from "redux-persist/types/integration/react";
}
// 컴포넌트
type IframeType = {
  iframeBox: React.MutableRefObject<HTMLDivElement | null>;
  iframe: React.MutableRefObject<HTMLIFrameElement | null>;
  url?: string;
};

type InputProps = {
  type: string;
  name: string;
  id?: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  defaultValue?: string;
  width?: string;
  disabled?: boolean;
  message?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

type CounterProps = {
  count: number;
  onclick: MouseEventHandler<HTMLButtonElement>;
  rounded?: string;
};

type ButtonProps = {
  linkTo: string;
  img: { url: string; position: string };
  title: string;
  text: string;
  color: string;
};

type ButtonStyleProps = {
  img: { url: string; position: string };
  color: string;
};

type TitleHeaderType = {
  title: string;
  tabs?: {
    label: string;
    linkTo: string;
  }[];
  nav?: {
    label: string;
    linkTo: string;
    disabled?: boolean;
  }[];
  border?: boolean;
};

// 메뉴상세
type ToppingType = {
  code: string;
  created: number[];
  description: string;
  idx: number;
  name: string;
  price: { L: { p: number }; M: { p: number } };
  type: string;
  updated: number[];
  viewOrder: number;
  image: string;
};

type DoughType = {
  code: string;
  created: number[];
  description: string;
  idx: number;
  name: string;
  price: { L: { p: number }; M: { p: number } };
  type: string;
  updated: number[];
  viewOrder: number;
};
type EdgeType = DoughType;

type PriceType = {
  L: number;
  M?: number | undefined;
};

// 주문페이지
type OrderInfo = {
  basketInfos: {
    id: string;
    goods: GoodsType[];
  }[];
  id: string;
  prices: number[];
  titles: string[];
  totalPrice: number;
};

type ReqDataType = {
  checkoutId: string | null;
  storeCode: string;
  memberId: string;
  title: string;
  payType: string;
  totalAmount: number;
  discountAmount: number;
  deliveryPayAmount: number;
  paymentAmount: number;
  couponIds: string[];
  promotionIds: string[];
  orderType: string;
  recipientName: string;
  recipientPhone: string;
};

type SignupData = {
  memberId: string;
  password: string;
  password2: string;
  name: string;
  email: string;
  birthDate: string;
  birthType: string;
  gender: string;
  tel: string;
  ci: string;
  provider: string;
  isIdConfirmed?: boolean;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  verifiedData: {
    birthDate: string;
    birthType: string;
    comId: string;
    gender: string;
    name: string;
    memberId: string;
    isIdConfirmed: boolean;
    tel: string;
    email: string;
    ci: string;
    provider: string;
  };
  memberInfo: {
    memberId: string;
    email: string;
    name: string;
    providerType: string;
    status: string;
    created: string;
    birthDate: string;
    gender: string;
    tel: string;
  };
};

type Sido = {
  sidoname: string;
  sidocode: string;
  sidoengname: string;
  lon: number;
  lat: Number;
  kx: number;
  ky: number;
};

type Sgg = {
  sggname: string;
  sggcode: string;
  sggengname: string;
  lon: number;
  lat: Number;
  kx: number;
  ky: number;
};

type AddressType = {
  idx: number;
  id: string;
  orderType: string;
  addrType: string;
  storeCode: string;
  storeName: string;
  addrName?: string;
  postCode?: string;
  combinedAddr: string;
  created: string;
  // address: {
  //   emd: string;
  //   sgg: string;
  //   sido: string;
  //   bdNum: string;
  //   jibun: string;
  //   bdName: string;
  //   roadName: string;
  //   detailAddr: string;
  // };
};

// 주문내역 목록 타입
type OrderListType = {
  created: string;
  orderId: string;
  orderType: string;
  status: string;
  storeAddress: string;
  storeCode: string;
  storeName: string;
  storeTel: string;
  title: string;
  totalAmount: number;
};

// 주문내역 상세 타입
type OrderDetailType = {
  created: string;
  deliveryPayAmount: number;
  discountAmount: number;
  goodsInfos: GoodsType[];
  orderId: string;
  orderType: string;
  payType: string;
  paymentAmount: number;
  promotionIds: [];
  recipientAddress: string;
  recipientName: string;
  recipientPhone: string;
  reserveDate?: string;
  reserveType: string;
  status: string;
  storeAddress: string;
  storeCode: string;
  storeName: string;
  storeTel: string;
  totalAmount: number;
};

type SelectedAddressType = {
  address: string;
  addressIdx: number;
  orderType: string;
  reserveType: string;
  reserveDate: string;
  storeCode: string;
  storeName: string;
  storeAddress: string;
  storeTel: string;
};

type SearchedAddressType = {
  bdName: string;
  bdNum: string;
  emd: string;
  jibun: string;
  postCode: string;
  roadName: string;
  sgg: string;
  sido: string;
};

type CouponType = {
  couponCode: string;
  couponEnd: string;
  couponStart: string;
  discountAmount: number;
  discountType: string;
  name: string;
  notice: string[];
  orderType: string;
  prmtCode: string;
  storeType: string;
  useYn: boolean;
};

// cart-slice
type CartState = {
  cartlist: {
    groupId: string;
    goods: GoodsType[];
  };
  tempCart: {
    code: string;
    name: string;
    size: { size: string; price: number };
    quantity: number;
    options: {
      dough: { code: string; name: string; price: number };
      edge: { code: string; name: string; price: number };
      toppings: { idx: number; code: string; name: string; price: number; quantity: number }[];
      option: { price: number };
    };
    totalPrice: number;
    toppingQuantity: number;
    sideDish: {
      idx: number;
      code: string;
      name: string;
      price: number;
      size: string;
      quantity: number;
      promoCode: string;
    }[];
    etc: {
      idx: number;
      code: string;
      name: string;
      price: number;
      size: string;
      quantity: number;
      promoCode: string;
    }[];
  };
  selectedGroups: string[];
  orderId: string | null;
};

type GoodsType = {
  code: string;
  image: string;
  name: string;
  size: string;
  price: number;
  totalPrice: number;
  quantity: number;
  options: {
    dough: { code: string; name: string; price: number };
    edge: { code: string; name: string; price: number };
    toppings: { code: string; name: string; price: number; quantity: number }[];
    option?: { price: number };
  };
  promoCode: string;
  sepId: string;
};

type CartListType = {
  groupId: string;
  goods: GoodsType[];
};

// goods-slice
// 메뉴 목록
type GoodsState = {
  code: string;
  contents: string;
  goodsTypeCode: string;
  idx: number;
  imageL: string;
  imageM: string;
  isNew: boolean;
  menuCode: string;
  menuName: string;
  name: string;
  price: { L: number; M: number };
};

// 메뉴 상세
type DetailState = {
  detail: {
    code: string;
    contents: string;
    goodsTypeCode: string;
    idx: number;
    imageL: string;
    imageM: string;
    isNew: boolean;
    menuCode: string;
    menuName: string;
    name: string;
    price: { L: number; M: number };
    releaseDate: number[];
    options: {
      DOWS: { d: string; o: string[] };
      EDGES: { d: string; o: string[] };
      TOPPINGS: string[];
    };
  };
  pizzaList?: detail[];
  options: (DoughType | ToppingType)[];
};

// 매장 정보
type branchType = {
  storeCode: string;
  storeName: string;
  sidoCode: string;
  sggCode: string;
  sidoName: string;
  sggName: string;
  tel: string;
  openingHours: { open: string; close: string };
  orderTime: { end: string; start: string };
  address: string;
  mapXy: { x: string; y: string };
  displayYn: boolean;
  location: string;
  parking: string;
  created: string;
  updated: string;
};

// payment-slice
type PaymentType = {
  payType: string;
  payData: {
    callbackUrl: string;
    paymentId: string;
    settlementMethod: string;
    branchCode: string;
    orderPrmtCode: string;
    totalPrice: number;
    user: {
      id: string;
      name: string;
      tel: string;
      email: string;
    };
    goods: {
      goodsCode: string;
      goodsName: string;
      goodsCount: number;
      goodsPrice: number;
      goodsPrmtCode: string;
    }[];

    dopay: {
      wpayToken: string;
      wpayUserKey: string;
      payMethod: string;
      bankCardCode: string;
    };
  };
};

// popup-slice
type PopupType = {
  isOpened: boolean;
  modalType: string;
  modalData: {
    cartGroupId: string;
    storeCode: string;
    orderType: string;
    addrType: string;
    reserveDate: string;
    enrollAddress: {
      sgg: string;
      sido: string;
      bdNum: string;
      jibun: string;
      postCode: string;
      bdName: string;
      emd: string;
      roadName: string;
    };
    orderInfo: {
      totalPrice: number;
      discountPrice: number;
      couponId: string;
      promotionId: string;
    };
    complete: {
      orderId: string;
      storeName: string;
      storeTel: string;
      storeAddress: string;
      orderType: string;
      paymentAmount: number;
      recipientAddress: string;
      reserveType: string;
      title: string;
    };
  };
};

type SocketType = {
  actions: {
    order: boolean;
  };
  data: {
    orderType: string;
    orderId: string;
    message: string;
    userId: string;
    status: string;
  };
};
