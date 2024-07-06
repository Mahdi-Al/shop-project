import { contactUsImg } from "../../utils/data.JS";
// console.log(contactUs);
const parentImg = document.querySelector("#parent-img-header");
console.log(parentImg);
const createImg = document.createElement("img");

createImg.setAttribute("src", contactUsImg);
parentImg.append(createImg);
