const mostVisitedProducts = [
  {
    id: 1,
    name: `گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو ...`,
    price: `6264000`,
    image: `images/products/21.jpg`,
  },
  {
    id: 2,
    name: `گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو ...`,
    price: `6249000`,
    image: `images/products/22.jpg`,
  },
  {
    id: 3,
    name: `کیف هندزفری جانتا مدل 141مجموعه 3 عددی`,
    price: `89000`,
    image: `images/products/17.jpg`,
  },
  {
    id: 4,
    name: `گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌...`,
    price: `59000`,
    image: `images/products/19.jpg`,
  },
  {
    id: 5,
    name: `گوشی موبایل سامسونگ مدل Galaxy A21S SM-A217F/DS دو...`,
    price: `39000`,
    image: `images/products/20.jpg`,
  },
  {
    id: 6,
    name: `کیف رودوشی چرم جانتا مدل D078`,
    price: `39000`,
    image: `images/products/18.jpg`,
  },
  {
    id: 7,
    name: `گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو ...`,
    price: `39000`,
    image: `images/products/16.jpg`,
  },
  {
    id: 8,
    name: `گوشی موبایل شیائومی مدل POCO M3 PRO 5G M2103K19PG ...`,
    price: `39000`,
    image: `images/products/14.jpg`,
  },
  {
    id: 9,
    name: `مجموعه کتاب من پیش از تو، پس از تو، باز هم من`,
    price: `39000`,
    image: `images/products/10.jpg`,
  },
  {
    id: 10,
    name: `کتاب سلخ اثر غزاله شکوهی`,
    price: `39000`,
    image: `images/products/11.jpg`,
  },
  {
    id: 11,
    name: `کتاب تختخوابت را مرتب کن اثر ژنرال ویلیام مک ریون`,
    price: `39000`,
    image: `images/products/13.jpg`,
  },
  {
    id: 12,
    name: `دستگاه آبمیوه گیری دنویر با کد 1016`,
    price: `39,000`,
    image: `images/products/2.jpg`,
  },
  {
    id: 13,
    name: `کتاب اثر مرکب  دارن هاردی با کد 87`,
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
];

export const getMostVisitedProducts = () => {
  return mostVisitedProducts;
};

export const findVisited = (id) => {
  return mostVisitedProducts.find((product) => product.id === id);
};

// function commafy( num ) {
//   var str = num.toString().split('.');
//   if (str[0].length >= 5) {
//       str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
//   }
//   if (str[1] && str[1].length >= 5) {
//       str[1] = str[1].replace(/(\d{3})/g, '$1 ');
//   }
//   return str.join('.');
// }
