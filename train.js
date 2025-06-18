// E-TASK:

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"
function reverse(a) {
  const prep = a.split("").reverse().join("");
  return prep;
}

const result = reverse("hello");
console.log("result :", result);

//TASK D

// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.
// function checkContent(a, b) {
//   const A = a.split("").sort().join("");
//   const B = b.split("").sort().join("");

//   return A === B;
// }

// console.log(checkContent("mitgroup", "gmtiprou"));

// IZOH: parametrga kelayotgan qiymatni split qilib (yakkalab) keyin o'sha yakkalangan qiymatni sort() bosh methodi orqali alfabet boyicha tartiblab olindi va join() built-in methodi orqali uni yana jamlab stringga aylantirdim va qiymatlarni bir-biriga tenglab return qildim.

// TASK C
/*
Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
Hamda classning quyidagdek 3'ta metodi bo'lsin:

1) qoldiq
2) sotish
3) qabul

Har bir metod ishga tushgan vaqtda log qilinsin

MASALAN:
const shop = new Shop(4, 5, 2)

shop.qoldiq();
natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!
*/

/* 
const moment = require("moment");

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  vaqt() {
    return moment().format("HH:mm");
  }

  qoldiq() {
    console.log(
      `Hozir ${this.vaqt()}da ${this.non} ta non, ${this.lagmon} ta lag'mon, ${
        this.cola
      } ta cola mavjud`
    );
  }

  sotish(nomi, soni) {
    if (this[nomi] === undefined) {
      console.log(`Mahsulot nomi xato: ${nomi}`);
      return;
    }

    if (this[nomi] < soni) {
      console.log(`Yetarli ${nomi} yo'q!`);
      return;
    }

    this[nomi] -= soni;
    console.log(`${this.vaqt()}da ${soni} ta ${nomi} sotildi`);
  }

  qabul(nomi, soni) {
    if (this[nomi] === undefined) {
      console.log(`Mahsulot nomi xato: ${nomi}`);
      return;
    }

    this[nomi] += soni;
    console.log(`${this.vaqt()}da ${soni} ta ${nomi} qabul qilindi`);
  }
}

const shop1 = new Shop(4, 5, 2);

shop1.qoldiq();
shop1.sotish("non", 3);
shop1.qabul("cola", 4);
shop1.qoldiq();
*/

// // TASK B
// /*
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
//  */
// // MASHQ YECHIMI
// function countNums(a) {
//   const nums = a.split("").filter((char) => char >= "0" && char <= "9").length;
//   return nums;
// }
// const result = countNums("ad2a54y79wet0sfgb9");
// console.log("result:", result);
// // IZOH: split bilan yakkalab olyapman va filter bilan har bir yahlitlangan character'ni function'dagi ish harakatga solyapman yani 0 ga teng yoki katta va 9 teng yoki kichik bu bilan 0dan 9gacha bolgan hamma sonlarga solishtirish amalga oshadi va bizga hamma sonlani korsatadi hatto 3, 5, 100 honali son bolsa ham.

// Task A
/* 
Harf sifatida kiritilgan birinchi parametr, 
kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
Funktsiya tuzing

Masalan: countLetter("e", "engineer")
'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
3 sonini qaytaradi
*/
// Masalaning Yechimi!
// function countLetter(harf, soz) {
//   let sanoq = 0;
//   for (let i = 0; i < soz.length; i++) {
//     if (soz[i] === harf) {
//       sanoq++; // sanoq = sanoq + 1;
//     }
//   }

//   return sanoq;
// }
// console.log(countLetter("e", "engineer"));

// Izoh: For loopdan foydalandim. Bu yerda "countLetter" nomli function yaratdim, va function ichida sanoq nomli o'zgaruvchi 0 ga tengladim chunki har safar 0 dan boshla deyapman. Keyin for loop, "string" larni sanab olishni property'si bor ekan ' .length' bu bizga valueni sanab beradi array property'siga o'xshab ishlaydi, har safar bittaga oshir dedim. if'ni qo'lladim bu yerda soz[i] valueni index'larini olish yo'li bizga value qaytaradi va shu value berilgan harfga "strongly" tengladim va if part "true" bo'lsa sanoqni return qil.

//  CALLBACK FUNCTION /////////////////////////////
/* 
console.log("Jack Ma maslahatlari");
const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}
console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1");


// ASYNC FUNCTION //////////////////////////////

console.log("Jack Ma maslahatlari");
const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number", null);
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(list[5]);
      //   }, 5000);
      // });
      setInterval(() => {
        resolve(list[5]);
      }, 1000);
    });
    // setTimeout(function () {
    //   return list[5];
    // }, 5000);
  }
}

 call via then/catch ///////////////////////////
console.log("passed here 0");

maslahatBering(25)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });

console.log("passed here 1");

 call via async/await ///////////////////////////
async function run() {
  let javob = await maslahatBering(25);
  console.log(javob);
javob = await maslahatBering(70);
console.log(javob);
javob = await maslahatBering(41);
console.log(javob);
}
run();


// Callback again ///////////////////////////////

console.log("Jack Ma maslahatlari");
const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}
console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1");
*/
