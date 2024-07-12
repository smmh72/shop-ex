const suggestedProducts = [
  {
    id: 12,
    name: `دستگاه آبمیوه گیری دنویر با کد 1016`,
    price: `39,000`,
    image: `images/products/2.jpg`,
  },
  {
    id: 13,
    name: `کتاب اٍر مرکب اثر دارن هاردی با کد 87`,
    price: `39,000`,
    image: `images/products/1.jpg`,
  },
  {
    id: 14,
    name: `پکیج آموزش خطاطی و خوشنویسی با کد 624`,
    price: `39,000`,
    image: `images/products/3.jpg`,
  },
  {
    id: 15,
    name: `مجموعه داستان های هزار و یک شب`,
    price: `39,000`,
    image: `images/products/4.jpg`,
  },
  {
    id: 16,
    name: `کتاب اطلاعات عمومی انتشارات فارابی با کد 3087`,
    price: `39,000`,
    image: `images/products/5.jpg`,
  },
  {
    id: 17,
    name: `کتاب شیوه گرگ اثر جردن بلفورت`,
    price: `39,000`,
    image: `images/products/6.jpg`,
  },
  {
    id: 18,
    name: `مجموعه داستان های قصه های مشهور جهان`,
    price: `39,000`,
    image: `images/products/7.jpg`,
  },
  {
    id: 19,
    name: `کتاب برای سفر خودآموز مکالمات انگلیسی`,
    price: `39,000`,
    image: `images/products/8.jpg`,
  },
  {
    id: 20,
    name: `کتاب آدم های سمی اثر لیلیان گلاس`,
    price: `39,000`,
    image: `images/products/9.jpg`,
  },
  {
    id: 21,
    name: `مجموعه کتاب من پیش از تو، پس از تو، باز هم من`,
    price: `39,000`,
    image: `images/products/10.jpg`,
  },
  {
    id: 22,
    name: `کتاب سلخ اثر غزاله شکوهی`,
    price: `39,000`,
    image: `images/products/11.jpg`,
  },
  {
    id: 23,
    name: `کتاب بیشعوری اثر جردن بلفورت`,
    price: `39,000`,
    image: `images/products/12.jpg`,
  },
  {
    id: 24,
    name: `کتاب تختخوابت را مرتب کن اثر ژنرال ویلیام مک ریون`,
    price: `39,000`,
    image: `images/products/13.jpg`,
  },
];

export const getSuggestedProducts = () => {
  return suggestedProducts;
};

export const findSuggested = (id) => {
  return suggestedProducts.find((product) => product.id === id);
};
