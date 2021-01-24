/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateDomainName();
};

function generateDomainName() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".es"];

  let domain = "";
  let domains = [];

  for (let pronoun of pronouns) {
    //console.log(pronouns);
    for (let adj of adjs) {
      //	console.log(adj[b]);
      for (let noun of nouns) {
        for (let extension of extensions) {
          domain = domain.concat(pronoun, adj, noun, extension);
          domains.push(domain);
          domain = "";
        }
      }
    }
  }

  let finalName = domains.forEach(function(name) {
    let li = document.createElement("li");
    // li.classList.add("dropdown-item");
    var domainName = document.createTextNode(name);
    li.appendChild(domainName);
    document.getElementById("domainName").appendChild(li);
  });
  return finalName;
}
