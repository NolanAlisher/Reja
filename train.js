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
function countLetter(harf, soz) {
  let sanoq = 0;
  for (let i = 0; i < soz.length; i++) {
    if (soz[i] === harf) {
      sanoq++; // sanoq = sanoq + 1;
    }
  }

  return sanoq;
}
console.log(countLetter("e", "engineer"));

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
