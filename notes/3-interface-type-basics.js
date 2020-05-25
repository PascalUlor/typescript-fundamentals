"use strict";
exports.__esModule = true;
var dummy = 8;
console.log('Alias >>>', dummy);
var obj = { name: "Clark Kent" };
console.log('Alias2 >>>', dummy);
var selfRef = [1, 3, [1, 3]];
console.log('Alias3 >>>', selfRef);
var dumInt = { countryCode: 'US', name: 'Haja', phone: 55555555 };
console.log('Interface1 >>>', dumInt);
var user = function (Dcontact, Dmessage) {
    /** ... */
};
console.log('>>>void>>>', user({ name: 'pas', email: 'pas' }, 'ppp'));
// // NOTE: we don't need type annotations for contact or message
var emailer = function (_contact, _message) {
    /** ... */
};
console.log(emailer({ name: 'jjj', email: '' }, 'lll'), '>>>>');
/**
 * (5) index signatures describe how a type will respond to property access
 */
/**
 * @example
 * {
 *    iPhone: { areaCode: 123, num: 4567890 },
 *    home:   { areaCode: 123, num: 8904567 },
 * }
 */
// interface PhoneNumberDict {
//   // arr[0],  foo['myProp']
//   [numberName: string]:
//     | undefined
//     | {
//         areaCode: number;
//         num: number;
//       };
// }
// const phoneDict: PhoneNumberDict = {
//   office: { areaCode: 321, num: 5551212 },
//   home: { areaCode: 321, num: 5550010 } // try editing me
// };
// at most, a type may have one string and one number index signature
/**
 * (6) they may be used in combination with other types
 */
// // augment the existing PhoneNumberDict
// // i.e., imported it from a library, adding stuff to it
// interface PhoneNumberDict {
//   home: {
//     /**
//      * (7) interfaces are "open", meaning any declarations of the
//      * -   same name are merged
//      */
//     areaCode: number;
//     num: number;
//   };
//   office: {
//     areaCode: number;
//     num: number;
//   };
// }
// phoneDict.home;   // definitely present
// phoneDict.office; // definitely present
// phoneDict.mobile; // MAYBE present
// == TYPE ALIASES vs INTERFACES == //
/**
 * (7) Type aliases are initialized synchronously, but
 * -   can reference themselves
 */
// type NumberVal = 1 | 2 | 3 | NumberVal[];
/**
 * (8) Interfaces are initialized lazily, so combining it
 * -   w/ a type alias allows for recursive types!
 */
// type StringVal = "a" | "b" | "c" | StringArr;
// // type StringArr = StringVal[];
// interface StringArr {
//   // arr[0]
//   [k: number]: "a" | "b" | "c" | StringVal[];
// }
// const x: StringVal = Math.random() > 0.5 ? "b" : ["a"]; // ✅ ok!
exports["default"] = {};
