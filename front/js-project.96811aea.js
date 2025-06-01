function u(u,t){let e=0;for(let o of u)t.startsWith(o)&&e++;return e}function t(u){let t=String(u).toLowerCase().replace(/\s+/g,"");return t===t.split("").reverse().join("")}class e{constructor(u){this.parent=u}getHTML(e){var o;let r=[`\u{41D}\u{430}\u{437}\u{432}\u{430}\u{43D}\u{438}\u{435}: ${e.title}`,`\u{41E}\u{43F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{435}: ${e.text}`,`\u{42F}\u{432}\u{43B}\u{44F}\u{435}\u{442}\u{441}\u{44F} \u{43F}\u{430}\u{43B}\u{438}\u{43D}\u{434}\u{440}\u{43E}\u{43C}\u{43E}\u{43C}: ${t(e.title)?"Да ✓":"Нет ✗"}`];r.length>2&&function(u,t,e){if(t<0||t>=u.length||1>=u.length)return console.error("Некорректные индексы from или to");let o=u.splice(t,1)[0];u.splice(e,0,o)}(r,r.length-1,1);let i=u(e.text.split(" "),"abc");return`
            <div class="product-full ${t(e.title)?"palindrome-highlight":""}">
                <div class="product-header">
                    <div class="product-image-container">
                        <img src="${e.src}" alt="${e.title}" class="product-image">
                    </div>
                    <div class="product-title-area">
                        <h2>${e.title}</h2>
                        ${t(e.title)?'<div class="palindrome-tag">✨ Это палиндром!</div>':""}
                    </div>
                </div>
                
                <div class="product-body">
                    <div class="product-description">
                        <p>${e.text}</p>
                        ${i>0?`<p class="prefix-note">\u{412} \u{43E}\u{43F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{438} ${i} ${this.getWordForm(i)} \u{441} \u{43F}\u{440}\u{435}\u{444}\u{438}\u{43A}\u{441}\u{43E}\u{43C} "abc"</p>`:""}
                    </div>
                    
                    <div class="product-characteristics">
                        <h4>\u{425}\u{430}\u{440}\u{430}\u{43A}\u{442}\u{435}\u{440}\u{438}\u{441}\u{442}\u{438}\u{43A}\u{438}:</h4>
                        <ul>
                            ${r.map(u=>`<li>${u}</li>`).join("")}
                        </ul>
                    </div>
                    
                    <div class="product-extra-info">
                        <div class="info-box">
                            <h5>\u{418}\u{43D}\u{442}\u{435}\u{440}\u{435}\u{441}\u{43D}\u{44B}\u{439} \u{444}\u{430}\u{43A}\u{442}</h5>
                            <p>${o=["Знаете","ли","вы","что",e.title.length>5?"это длинное название":"это короткое название"],o.join(" ")}?</p>
                        </div>
                    </div>
                    
                    <div class="product-actions">
                        <button class="buy-button">
                            \u{41A}\u{443}\u{43F}\u{438}\u{442}\u{44C} \u{441}\u{435}\u{439}\u{447}\u{430}\u{441}
                        </button>
                        <div class="quantity-selector">
                            <button id="product-minus" class="quantity-btn">-</button>
                            <span id="product-count" class="quantity-count">1</span>
                            <button id="product-plus" class="quantity-btn">+</button>
                        </div>
                    </div>
                </div>
                
                <style>
                    .product-full {
                        padding: 20px;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    }
                    
                    .palindrome-highlight {
                        background: linear-gradient(to right, #fff9e6, #fff);
                        border: 2px solid gold;
                    }
                    
                    .product-header {
                        display: flex;
                        gap: 20px;
                        margin-bottom: 20px;
                    }
                    
                    .product-image-container {
                        width: 300px;
                        height: 300px;
                    }
                    
                    .product-image {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        border-radius: 8px;
                    }
                    
                    .product-title-area {
                        display: flex;
                        flex-direction: column;
                    }
                    
                    .palindrome-tag {
                        display: inline-block;
                        background-color: gold;
                        color: #333;
                        padding: 5px 10px;
                        border-radius: 15px;
                        font-weight: bold;
                        margin-top: 10px;
                    }
                    
                    .product-description {
                        margin-bottom: 20px;
                        line-height: 1.6;
                    }
                    
                    .prefix-note {
                        font-style: italic;
                        color: #666;
                    }
                    
                    .product-characteristics {
                        margin-bottom: 20px;
                        padding: 15px;
                        background: #f8f8f8;
                        border-radius: 8px;
                    }
                    
                    .product-characteristics ul {
                        padding-left: 20px;
                    }
                    
                    .product-characteristics li {
                        margin-bottom: 8px;
                    }
                    
                    .info-box {
                        padding: 15px;
                        background: #f0f7ff;
                        border-radius: 8px;
                        margin-bottom: 20px;
                    }
                    
                    .product-actions {
                        display: flex;
                        align-items: center;
                        margin-top: 20px;
                    }
                    
                    .buy-button {
                        padding: 12px 25px;
                        background-color: #FFDB4D;
                        border: none;
                        border-radius: 8px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.3s;
                    }
                    
                    .buy-button:hover {
                        background-color: #FFD11A;
                    }
                    
                    .quantity-selector {
                        display: flex;
                        align-items: center;
                        margin-left: 20px;
                    }
                    
                    .quantity-btn {
                        width: 40px;
                        height: 40px;
                        border: 2px solid #FFDB4D;
                        background: white;
                        border-radius: 8px;
                        font-size: 20px;
                        cursor: pointer;
                    }
                    
                    .quantity-count {
                        margin: 0 15px;
                        font-weight: bold;
                        font-size: 18px;
                    }
                </style>
            </div>
            `}getWordForm(u){return 1===u?"слово":u>=2&&u<=4?"слова":"слов"}render(u){this.parent.innerHTML="";let t=this.getHTML(u);this.parent.insertAdjacentHTML("beforeend",t);let e=1,o=document.getElementById("product-count"),r=document.getElementById("product-minus");r&&r.addEventListener("click",()=>{e>1&&(o.textContent=--e)});let i=document.getElementById("product-plus");i&&i.addEventListener("click",()=>{o.textContent=++e})}}const o=new class{get(u,t){let e=new XMLHttpRequest;e.open("GET",u),e.send(),e.onreadystatechange=()=>{4===e.readyState&&this._handleResponse(e,t)}}post(u,t,e){let o=new XMLHttpRequest;o.open("POST",u),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(t)),o.onreadystatechange=()=>{4===o.readyState&&this._handleResponse(o,e)}}patch(u,t,e){let o=new XMLHttpRequest;o.open("PATCH",u),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(t)),o.onreadystatechange=()=>{4===o.readyState&&this._handleResponse(o,e)}}delete(u,t){let e=new XMLHttpRequest;e.open("DELETE",u),e.send(),e.onreadystatechange=()=>{4===e.readyState&&this._handleResponse(e,t)}}_handleResponse(u,t){if(u.status>=200&&u.status<300)try{if(u.responseText){let e=JSON.parse(u.responseText);t(e,u.status)}else console.warn("Пустой ответ от сервера"),t(null,u.status,"Пустой ответ")}catch(e){console.error("Ошибка парсинга JSON:",e),console.error("Ответ от сервера:",u.responseText),t(null,u.status,"Ошибка парсинга JSON")}else console.error(`HTTP-\u{43E}\u{448}\u{438}\u{431}\u{43A}\u{430} ${u.status}: ${u.statusText}`),t(null,u.status,u.statusText)}},r=new class{constructor(){this.baseUrl="http://localhost:3000"}getProducts(){return`${this.baseUrl}/products`}getProductById(u){return`${this.baseUrl}/products/${u}`}searchProductsByTitle(u){return`${this.baseUrl}/products/filter?title=${u}`}createProduct(){return`${this.baseUrl}/products`}removeProductById(u){return`${this.baseUrl}/products/${u}`}updateProductById(u){return`${this.baseUrl}/products/${u}`}};class i{constructor(u,t,e,o){this.root=u,this.id=t,this.data=e,this.document=o}get pageRoot(){return this.document.getElementById("product-content")}getHTML(){return`
            <div class="product-page">
                <header class="product-header">
                    <button id="home-button" class="home-button">
                        <span class="home-icon">\u{1F3E0}</span> \u{414}\u{43E}\u{43C}\u{43E}\u{439}
                    </button>
                    <h2>\u{421}\u{442}\u{440}\u{430}\u{43D}\u{438}\u{446}\u{430} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}</h2>
                </header>
                <div id="product-content"></div>
            </div>
            <style>
                .product-page {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .product-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px;
                    background-color: #FFDB4D;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    position: relative;
                }
                
                .home-button {
                    display: flex;
                    align-items: center;
                    padding: 8px 16px;
                    background-color: #FFFFFF;
                    border: 2px solid #FFDB4D;
                    border-radius: 8px;
                    font-weight: 500;
                    font-family: 'YS Text', Arial, sans-serif;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .home-button:hover {
                    background-color: #F6F6F6;
                }
                
                .home-icon {
                    margin-right: 8px;
                    font-size: 18px;
                }
                
                h2 {
                    margin: 0;
                    color: #000;
                    font-weight: bold;
                }
            </style>
            `}goHome(){new x(this.root,this.document).render()}clickBack(){this.goHome()}render(){o.get(r.getProducts(),u=>console.log()),this.root.innerHTML="";let u=this.getHTML();this.root.insertAdjacentHTML("beforeend",u),this.document.getElementById("home-button").addEventListener("click",()=>this.goHome());let t=new e(this.pageRoot),i=+this.id;isNaN(i)&&(i=1);let n=this.data.find(u=>u.id===i);n||console.error("polundra!!!"),t.render(n)}}class n{constructor(u){this.parent=u}getHTML(e){let o=t(e.title),r=u(e.text.split(" "),"abc");return`
            <!-- \u{41E}\u{431}\u{435}\u{440}\u{43D}\u{443}\u{442}\u{44C} \u{432}\u{441}\u{435} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{438} \u{432} \u{43A}\u{43E}\u{43D}\u{442}\u{435}\u{439}\u{43D}\u{435}\u{440} -->
<div class="products-container">
  <div class="product-card ${o?"palindrome-card":""}" id="product-card-${e.id}">
    <img class="product-image" src="${e.src}" alt="${e.title}">
    <div class="product-details">
      <div class="title-container">
        <h5>${e.title}</h5>
        ${o?'<span class="palindrome-badge">Палиндром!</span>':""}
      </div>
      <p>
        ${e.text}
        ${r>0?`<span class="prefix-info">(${r} \u{441}\u{43B}\u{43E}\u{432} \u{43D}\u{430}\u{447}\u{438}\u{43D}\u{430}\u{44E}\u{442}\u{441}\u{44F} \u{441} "abc")</span>`:""}
      </p>
      <button class="btn btn-primary card-btn" id="click-card-${e.id}" data-id="${e.id}">
        Нажми на меня
      </button>
      <div class="card-actions">
        <button id="minus-${e.id}" class="control-button"><span>-</span></button>
        <span id="count-${e.id}">0</span>
        <button id="plus-${e.id}" class="control-button"><span>+</span></button>
      </div>
    </div>
  </div>
</div>

<style>
.products-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 5px;
  /* overflow-x: auto; /* \u{43E}\u{43F}\u{446}\u{438}\u{43E}\u{43D}\u{430}\u{43B}\u{44C}\u{43D}\u{43E}, \u{435}\u{441}\u{43B}\u{438} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{435}\u{43A} \u{431}\u{43E}\u{43B}\u{44C}\u{448}\u{435}, \u{447}\u{435}\u{43C} \u{432}\u{43B}\u{435}\u{437}\u{430}\u{435}\u{442} \u{43F}\u{43E} \u{448}\u{438}\u{440}\u{438}\u{43D}\u{435} */
}
.product-card {
  flex: 0 0 320px; /* \u{438}\u{43B}\u{438} \u{43D}\u{443}\u{436}\u{43D}\u{430}\u{44F} \u{432}\u{430}\u{43C} \u{448}\u{438}\u{440}\u{438}\u{43D}\u{430} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{438} */
  min-width: 320px;
  max-width: 320px;
  min-height: 420px;
  max-height: 420px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}
/* \u{43E}\u{441}\u{442}\u{430}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{441}\u{442}\u{438}\u{43B}\u{438} \u{43E}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{431}\u{435}\u{437} \u{438}\u{437}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{438}\u{439} */

.product-card:hover {
  transform: translateY(-5px);
}

/* \u{41F}\u{430}\u{43B}\u{438}\u{43D}\u{434}\u{440}\u{43E}\u{43C} */
.palindrome-card {
  border: 2px solid gold;
  box-shadow: 0 0 10px gold;
}

/* \u{418}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{435} */
.product-image {
  width: 100%;
  max-width: 100%;
  height: 170px;
  object-fit: contain;   /* <=! \u{441}\u{43E}\u{445}\u{440}\u{430}\u{43D}\u{44F}\u{435}\u{442} \u{43F}\u{440}\u{43E}\u{43F}\u{43E}\u{440}\u{446}\u{438}\u{438}, \u{43D}\u{435} \u{43E}\u{431}\u{440}\u{435}\u{437}\u{430}\u{435}\u{442}! */
  background: #f5f5f5;
  display: block;
}

/* \u{414}\u{435}\u{442}\u{430}\u{43B}\u{438} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{438} */
.product-details {
  flex: 1 1 auto;
  padding: 12px 14px 16px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.palindrome-badge {
  background-color: gold;
  color: #000;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 10px;
  font-weight: bold;
}
.prefix-info {
  color: #666;
  font-style: italic;
  margin-top: 5px;
  font-size: 13px;
}
.card-btn {
  width: 100%;
  margin: 8px 0;
  padding: 10px;
  background-color: #FFDB4D;
  color: #000;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}
.card-btn:hover {
  background-color: #FFCC00;
}
.card-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
}
.control-button {
  margin: 0 4px;
  width: 40px;
  height: 40px;
  background-color: #FFF;
  border: 2px solid #FFDB4D;
  border-radius: 8px;
  color: #000;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}
.control-button:hover {
  background-color: #FFDB4D;
}
.item-count {
  font-weight: bold;
  font-size: 18px;
  margin: 0 10px;
}

/* \u{410}\u{434}\u{430}\u{43F}\u{442}\u{438}\u{432}\u{43D}\u{43E}\u{441}\u{442}\u{44C} */
@media (max-width: 1080px) {
  .product-card {
    min-width: 45%;
    max-width: 48%;
    flex-basis: 48%;
  }
}
@media (max-width: 700px) {
  .product-card {
    min-width: 95%;
    max-width: 99%;
    flex-basis: 99%;
  }
  .products-container {
    gap: 10px;
  }
}
</style>

            `}deleteCard(u){document.getElementById(`product-card-${u.id}`).remove()}addListeners(u,t){document.getElementById(`click-card-${u.id}`).addEventListener("click",t);let e=0,o=document.getElementById(`count-${u.id}`);document.getElementById(`minus-${u.id}`).addEventListener("click",()=>{e>0&&(o.textContent=--e),0===e&&this.deleteCard(u)}),document.getElementById(`plus-${u.id}`).addEventListener("click",()=>{o.textContent=++e})}render(u,t){let e=this.getHTML(u);this.parent.insertAdjacentHTML("beforeend",e),this.addListeners(u,t)}}class a{constructor(u){this.parent=u}getHtml(){return`
            <style>
        /* \u{41E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{44B}\u{435} \u{441}\u{442}\u{438}\u{43B}\u{438} */
        :root {
            --primary: #FC3F1D;
            --primary-hover: #F33517;
            --yellow: #FFDD2D;
            --yellow-hover: #FCC521;
            --gray-lightest: #F5F5F5;
            --gray-light: #E5E5E5;
            --gray: #B3B3B3;
            --dark: #21201F;
            --blue: #3E77AA;
            --blue-light: #E5F0FF;
            --green: #34A853;
            --red: #F33;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'YS Text', 'Helvetica Neue', Arial, sans-serif;
        }

        body {
            background-color: #f9f9f9;
            color: var(--dark);
            line-height: 1.5;
            min-height: 100vh;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* \u{428}\u{430}\u{43F}\u{43A}\u{430} */
        .header {
            background: #fff;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            padding: 16px 0;
            margin-bottom: 30px;
        }

        .logo-container {
            display: flex;
            align-items: center;
        }

        .logo {
            display: inline-flex;
            color: var(--dark);
            font-weight: bold;
            font-size: 20px;
            text-decoration: none;
            align-items: center;
        }

        .logo-icon {
            color: var(--primary);
            margin-right: 8px;
            font-size: 22px;
        }

        /* \u{417}\u{430}\u{433}\u{43E}\u{43B}\u{43E}\u{432}\u{43E}\u{43A} \u{441}\u{442}\u{440}\u{430}\u{43D}\u{438}\u{446}\u{44B} */
        .page-title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .page-description {
            font-size: 16px;
            color: #666;
            margin-bottom: 24px;
        }

        /* \u{424}\u{43E}\u{440}\u{43C}\u{430} \u{434}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{44F} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} */
        .add-product-card {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
            padding: 30px;
            margin-bottom: 40px;
        }

        .form-header {
            margin-bottom: 24px;
        }

        .form-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .form-description {
            color: #666;
            font-size: 14px;
        }

        .form-group {
            margin-bottom: 22px;
        }

        .form-label {
            display: block;
            font-weight: 500;
            margin-bottom: 8px;
            font-size: 15px;
            color: #333;
        }

        .form-control {
            width: 100%;
            padding: 12px 14px;
            border: 1px solid var(--gray-light);
            border-radius: 4px;
            font-size: 15px;
            transition: all 0.2s;
        }

        .form-control:focus {
            border-color: var(--blue);
            outline: none;
            box-shadow: 0 0 0 2px rgba(62, 119, 170, 0.2);
        }

        .form-hint {
            display: block;
            margin-top: 6px;
            font-size: 13px;
            color: #888;
        }

        .has-error .form-control {
            border-color: var(--red);
        }

        .has-error .form-hint {
            color: var(--red);
        }

        textarea.form-control {
            min-height: 120px;
            resize: vertical;
        }

        /* \u{41F}\u{440}\u{435}\u{434}\u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{44F} */
        .image-preview {
            margin-top: 16px;
            background: var(--gray-lightest);
            border-radius: 6px;
            padding: 16px;
            text-align: center;
            min-height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .preview-placeholder {
            color: #666;
            font-size: 14px;
        }

        .preview-image {
            max-width: 100%;
            max-height: 200px;
            object-fit: contain;
        }

        /* \u{41A}\u{43D}\u{43E}\u{43F}\u{43A}\u{438} */
        .form-actions {
            margin-top: 30px;
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: flex-end;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            font-weight: 500;
            text-align: center;
            border: none;
            padding: 12px 24px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .btn-primary {
            background: var(--yellow);
            color: var(--dark);
        }

        .btn-primary:hover {
            background: var(--yellow-hover);
        }

        .btn-secondary {
            background: white;
            color: var(--dark);
            border: 1px solid var(--gray-light);
        }

        .btn-secondary:hover {
            background: var(--gray-lightest);
        }

        /* \u{418}\u{43D}\u{444}\u{43E}-\u{431}\u{43B}\u{43E}\u{43A} */
        .info-block {
            background-color: var(--blue-light);
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 24px;
            display: flex;
            align-items: flex-start;
        }

        .info-icon {
            font-size: 20px;
            margin-right: 12px;
            margin-top: 2px;
        }

        .info-text {
            font-size: 14px;
            color: #5a5a5a;
        }

        /* Footer */
        .footer {
            margin-top: 60px;
            padding: 24px 0;
            border-top: 1px solid var(--gray-light);
            font-size: 13px;
            color: #777;
            text-align: center;
        }

        /* \u{410}\u{434}\u{430}\u{43F}\u{442}\u{438}\u{432}\u{43D}\u{43E}\u{441}\u{442}\u{44C} */
        @media (max-width: 768px) {
            .form-actions {
                flex-direction: column-reverse;
                align-items: stretch;
            }
            
            .btn {
                width: 100%;
            }
            
            .add-product-card {
                padding: 20px;
            }
            
            .page-title {
                font-size: 24px;
            }
        }
    </style>

    <!-- \u{428}\u{430}\u{43F}\u{43A}\u{430} -->
    <header class="header">
        <div class="container">
            <div class="logo-container">
                <a href="#" class="logo">
                    <span class="logo-icon">\u{42F}</span>
                    \u{41C}\u{430}\u{440}\u{43A}\u{435}\u{442}
                </a>
            </div>
        </div>
    </header>

    <!-- \u{41E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{43E}\u{435} \u{441}\u{43E}\u{434}\u{435}\u{440}\u{436}\u{438}\u{43C}\u{43E}\u{435} -->
    <main class="container">
        <h1 class="page-title">\u{414}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}</h1>
        <p class="page-description">\u{414}\u{43E}\u{431}\u{430}\u{432}\u{44C}\u{442}\u{435} \u{43D}\u{43E}\u{432}\u{44B}\u{439} \u{442}\u{43E}\u{432}\u{430}\u{440} \u{432} \u{43A}\u{430}\u{442}\u{430}\u{43B}\u{43E}\u{433}</p>

        <!-- \u{418}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{43E}\u{43D}\u{43D}\u{44B}\u{439} \u{431}\u{43B}\u{43E}\u{43A} -->
        <div class="info-block">
            <div class="info-icon">\u{2139}\u{FE0F}</div>
            <div class="info-text">
                \u{417}\u{430}\u{43F}\u{43E}\u{43B}\u{43D}\u{438}\u{442}\u{435} \u{432}\u{441}\u{435} \u{43E}\u{431}\u{44F}\u{437}\u{430}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{43F}\u{43E}\u{43B}\u{44F}. \u{422}\u{43E}\u{432}\u{430}\u{440} \u{431}\u{443}\u{434}\u{435}\u{442} \u{43E}\u{43F}\u{443}\u{431}\u{43B}\u{438}\u{43A}\u{43E}\u{432}\u{430}\u{43D} \u{43F}\u{43E}\u{441}\u{43B}\u{435} \u{43F}\u{440}\u{43E}\u{432}\u{435}\u{440}\u{43A}\u{438} \u{43C}\u{43E}\u{434}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{43E}\u{43C}.
            </div>
        </div>

        <!-- \u{424}\u{43E}\u{440}\u{43C}\u{430} \u{434}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{44F} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} -->
        <div class="add-product-card">
            <div class="form-header">
                <h2 class="form-title">\u{418}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{44F} \u{43E} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{435}</h2>
                <p class="form-description">\u{417}\u{430}\u{43F}\u{43E}\u{43B}\u{43D}\u{438}\u{442}\u{435} \u{43E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{443}\u{44E} \u{438}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{44E} \u{43E} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{435}</p>
            </div>

            <form id="add-product-form">
                <!-- \u{418}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} -->
                <div class="form-group">
                    <label for="product-src" class="form-label">URL \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{44F} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} *</label>
                    <input 
                        type="url" 
                        class="form-control" 
                        id="product-src" 
                        name="src" 
                        placeholder="https://example.com/image.jpg" 
                        required 
                    >
                    <span class="form-hint">\u{423}\u{43A}\u{430}\u{436}\u{438}\u{442}\u{435} \u{43F}\u{440}\u{44F}\u{43C}\u{443}\u{44E} \u{441}\u{441}\u{44B}\u{43B}\u{43A}\u{443} \u{43D}\u{430} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}</span>
                    
                    <!-- \u{41F}\u{440}\u{435}\u{434}\u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{44F} -->
                    <div class="image-preview">
                        <div class="preview-placeholder">\u{417}\u{434}\u{435}\u{441}\u{44C} \u{431}\u{443}\u{434}\u{435}\u{442} \u{43E}\u{442}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{430}\u{442}\u{44C}\u{441}\u{44F} \u{43F}\u{440}\u{435}\u{434}\u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{44F}</div>
                        <!-- <img src="" alt="\u{41F}\u{440}\u{435}\u{434}\u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}" class="preview-image" style="display: none;"> -->
                    </div>
                </div>

                <!-- \u{41D}\u{430}\u{437}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} -->
                <div class="form-group">
                    <label for="product-title" class="form-label">\u{41D}\u{430}\u{437}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} *</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="product-title" 
                        name="title" 
                        placeholder="\u{41D}\u{430}\u{43F}\u{440}\u{438}\u{43C}\u{435}\u{440}: \u{421}\u{43C}\u{430}\u{440}\u{442}\u{444}\u{43E}\u{43D} Apple iPhone 15 Pro 256 \u{413}\u{411}" 
                        required 
                        maxlength="100"
                    >
                    <span class="form-hint">\u{414}\u{43E} 100 \u{441}\u{438}\u{43C}\u{432}\u{43E}\u{43B}\u{43E}\u{432}</span>
                </div>

                <!-- \u{41E}\u{43F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} -->
                <div class="form-group">
                    <label for="product-text" class="form-label">\u{41E}\u{43F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} *</label>
                    <textarea 
                        class="form-control" 
                        id="product-text" 
                        name="text" 
                        placeholder="\u{41F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{43E}\u{435} \u{43E}\u{43F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}" 
                        required 
                        maxlength="1000"
                    ></textarea>
                    <span class="form-hint">\u{41E}\u{43F}\u{438}\u{448}\u{438}\u{442}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440} \u{43F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{43E}, \u{443}\u{43A}\u{430}\u{437}\u{430}\u{432} \u{435}\u{433}\u{43E} \u{445}\u{430}\u{440}\u{430}\u{43A}\u{442}\u{435}\u{440}\u{438}\u{441}\u{442}\u{438}\u{43A}\u{438} \u{438} \u{43E}\u{441}\u{43E}\u{431}\u{435}\u{43D}\u{43D}\u{43E}\u{441}\u{442}\u{438}</span>
                </div>

                <!-- \u{41A}\u{43D}\u{43E}\u{43F}\u{43A}\u{438} \u{434}\u{435}\u{439}\u{441}\u{442}\u{432}\u{438}\u{439} -->
                <div class="form-actions">
                    <button id="exit" type="button" class="btn btn-secondary">\u{41E}\u{442}\u{43C}\u{435}\u{43D}\u{430}</button>
                    <button id="submit" type="submit" class="btn btn-primary">\u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{442}\u{43E}\u{432}\u{430}\u{440}</button>
                </div>
            </form>
        </div>
    </main>
        `}validateForm(){let u=document.getElementById("product-src"),t=u.value.trim();if(!t)return this.showError(u,"Укажите URL изображения"),!1;try{new URL(t)}catch(t){return this.showError(u,"Укажите корректный URL"),!1}let e=document.getElementById("product-title"),o=e.value.trim();if(!o)return this.showError(e,"Укажите название товара"),!1;if(o.length<3)return this.showError(e,"Название товара должно содержать не менее 3 символов"),!1;let r=document.getElementById("product-text"),i=r.value.trim();return i?i.length<10?(this.showError(r,"Описание товара должно содержать не менее 10 символов"),!1):(this.clearErrors(),!0):(this.showError(r,"Добавьте описание товара"),!1)}showError(u,t){let e=u.closest(".form-group");e.classList.add("has-error");let o=e.querySelector(".error-message");o||((o=document.createElement("span")).className="form-hint error-message",e.appendChild(o)),o.textContent=t,u.focus()}clearErrors(){document.querySelectorAll(".has-error").forEach(u=>{u.classList.remove("has-error")}),document.querySelectorAll(".error-message").forEach(u=>{u.remove()})}addProduct(u){if(!this.validateForm())return;u.preventDefault();let t=Object.fromEntries(new FormData(u.target));o.post(r.createProduct(),t,u=>console.log(u))}addListenerToSrcInput(){let u=document.getElementById("product-src"),t=document.querySelector(".image-preview"),e=document.querySelector(".preview-placeholder");u.addEventListener("input",function(){let u=this.value.trim();if(u){let o=t.querySelector(".preview-image");o&&o.remove();let r=document.createElement("img");r.className="preview-image",r.alt="Предпросмотр товара",r.onload=function(){e.style.display="none",t.appendChild(r)},r.onerror=function(){e.textContent="Ошибка загрузки изображения. Проверьте URL.",e.style.display="block"},r.src=u}else{e.textContent="Здесь будет отображаться предпросмотр изображения",e.style.display="block";let u=t.querySelector(".preview-image");u&&u.remove()}})}goToPage(u){u.render()}addListenerToCancel(){document.getElementById("exit").addEventListener("click",()=>this.goToPage(new x(document.getElementById("root"),document)))}render(){this.parent.innerHTML="";let u=this.getHtml();this.parent.insertAdjacentHTML("beforeend",u),document.getElementById("add-product-form").addEventListener("submit",this.addProduct.bind(this)),this.addListenerToSrcInput(),this.addListenerToCancel()}}class d{constructor(u,t){this.parent=u,this.data=t}getHtml(){return`
            <style>
        /* \u{41E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{44B}\u{435} \u{441}\u{442}\u{438}\u{43B}\u{438} */
        :root {
            --primary: #FC3F1D;
            --primary-hover: #F33517;
            --yellow: #FFDD2D;
            --yellow-hover: #FCC521;
            --gray-lightest: #F5F5F5;
            --gray-light: #E5E5E5;
            --gray: #B3B3B3;
            --dark: #21201F;
            --blue: #3E77AA;
            --blue-light: #E5F0FF;
            --green: #34A853;
            --red: #F33;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'YS Text', 'Helvetica Neue', Arial, sans-serif;
        }

        body {
            background-color: #f9f9f9;
            color: var(--dark);
            line-height: 1.5;
            min-height: 100vh;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* \u{428}\u{430}\u{43F}\u{43A}\u{430} */
        .header {
            background: #fff;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            padding: 16px 0;
            margin-bottom: 30px;
        }

        .logo-container {
            display: flex;
            align-items: center;
        }

        .logo {
            display: inline-flex;
            color: var(--dark);
            font-weight: bold;
            font-size: 20px;
            text-decoration: none;
            align-items: center;
        }

        .logo-icon {
            color: var(--primary);
            margin-right: 8px;
            font-size: 22px;
        }

        /* \u{417}\u{430}\u{433}\u{43E}\u{43B}\u{43E}\u{432}\u{43E}\u{43A} \u{441}\u{442}\u{440}\u{430}\u{43D}\u{438}\u{446}\u{44B} */
        .page-title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .page-description {
            font-size: 16px;
            color: #666;
            margin-bottom: 24px;
        }

        /* \u{424}\u{43E}\u{440}\u{43C}\u{430} \u{434}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{44F} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} */
        .add-product-card {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
            padding: 30px;
            margin-bottom: 40px;
        }

        .form-header {
            margin-bottom: 24px;
        }

        .form-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .form-description {
            color: #666;
            font-size: 14px;
        }

        .form-group {
            margin-bottom: 22px;
        }

        .form-label {
            display: block;
            font-weight: 500;
            margin-bottom: 8px;
            font-size: 15px;
            color: #333;
        }

        .form-control {
            width: 100%;
            padding: 12px 14px;
            border: 1px solid var(--gray-light);
            border-radius: 4px;
            font-size: 15px;
            transition: all 0.2s;
        }

        .form-control:focus {
            border-color: var(--blue);
            outline: none;
            box-shadow: 0 0 0 2px rgba(62, 119, 170, 0.2);
        }

        .form-hint {
            display: block;
            margin-top: 6px;
            font-size: 13px;
            color: #888;
        }

        .has-error .form-control {
            border-color: var(--red);
        }

        .has-error .form-hint {
            color: var(--red);
        }

        textarea.form-control {
            min-height: 120px;
            resize: vertical;
        }

        /* \u{41F}\u{440}\u{435}\u{434}\u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{44F} */
        .image-preview {
            margin-top: 16px;
            background: var(--gray-lightest);
            border-radius: 6px;
            padding: 16px;
            text-align: center;
            min-height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .preview-placeholder {
            color: #666;
            font-size: 14px;
        }

        .preview-image {
            max-width: 100%;
            max-height: 200px;
            object-fit: contain;
        }

        /* \u{41A}\u{43D}\u{43E}\u{43F}\u{43A}\u{438} */
        .form-actions {
            margin-top: 30px;
            display: flex;
            gap: 12px;
            align-items: center;
            justify-content: flex-end;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            font-weight: 500;
            text-align: center;
            border: none;
            padding: 12px 24px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .btn-primary {
            background: var(--yellow);
            color: var(--dark);
        }

        .btn-primary:hover {
            background: var(--yellow-hover);
        }

        .btn-secondary {
            background: white;
            color: var(--dark);
            border: 1px solid var(--gray-light);
        }

        .btn-secondary:hover {
            background: var(--gray-lightest);
        }

        /* \u{418}\u{43D}\u{444}\u{43E}-\u{431}\u{43B}\u{43E}\u{43A} */
        .info-block {
            background-color: var(--blue-light);
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 24px;
            display: flex;
            align-items: flex-start;
        }

        .info-icon {
            font-size: 20px;
            margin-right: 12px;
            margin-top: 2px;
        }

        .info-text {
            font-size: 14px;
            color: #5a5a5a;
        }

        /* Footer */
        .footer {
            margin-top: 60px;
            padding: 24px 0;
            border-top: 1px solid var(--gray-light);
            font-size: 13px;
            color: #777;
            text-align: center;
        }

        /* \u{410}\u{434}\u{430}\u{43F}\u{442}\u{438}\u{432}\u{43D}\u{43E}\u{441}\u{442}\u{44C} */
        @media (max-width: 768px) {
            .form-actions {
                flex-direction: column-reverse;
                align-items: stretch;
            }
            
            .btn {
                width: 100%;
            }
            
            .add-product-card {
                padding: 20px;
            }
            
            .page-title {
                font-size: 24px;
            }
        }
    </style>

    <!-- \u{428}\u{430}\u{43F}\u{43A}\u{430} -->
    <header class="header">
        <div class="container">
            <div class="logo-container">
                <a href="#" class="logo">
                    <span class="logo-icon">\u{42F}</span>
                    \u{41C}\u{430}\u{440}\u{43A}\u{435}\u{442}
                </a>
            </div>
        </div>
    </header>

    <!-- \u{41E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{43E}\u{435} \u{441}\u{43E}\u{434}\u{435}\u{440}\u{436}\u{438}\u{43C}\u{43E}\u{435} -->
    <main class="container">
        <h1 class="page-title">\u{420}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}</h1>
        <p class="page-description">\u{414}\u{43E}\u{431}\u{430}\u{432}\u{44C}\u{442}\u{435} \u{43D}\u{43E}\u{432}\u{44B}\u{439} \u{442}\u{43E}\u{432}\u{430}\u{440} \u{432} \u{43A}\u{430}\u{442}\u{430}\u{43B}\u{43E}\u{433}</p>

        <!-- \u{418}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{43E}\u{43D}\u{43D}\u{44B}\u{439} \u{431}\u{43B}\u{43E}\u{43A} -->
        <div class="info-block">
            <div class="info-icon">\u{2139}\u{FE0F}</div>
            <div class="info-text">
                \u{417}\u{430}\u{43F}\u{43E}\u{43B}\u{43D}\u{438}\u{442}\u{435} \u{432}\u{441}\u{435} \u{43E}\u{431}\u{44F}\u{437}\u{430}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{44B}\u{435} \u{43F}\u{43E}\u{43B}\u{44F}. \u{422}\u{43E}\u{432}\u{430}\u{440} \u{431}\u{443}\u{434}\u{435}\u{442} \u{43E}\u{43F}\u{443}\u{431}\u{43B}\u{438}\u{43A}\u{43E}\u{432}\u{430}\u{43D} \u{43F}\u{43E}\u{441}\u{43B}\u{435} \u{43F}\u{440}\u{43E}\u{432}\u{435}\u{440}\u{43A}\u{438} \u{43C}\u{43E}\u{434}\u{435}\u{440}\u{430}\u{442}\u{43E}\u{440}\u{43E}\u{43C}.
            </div>
        </div>

        <!-- \u{424}\u{43E}\u{440}\u{43C}\u{430} \u{434}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{44F} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} -->
        <div class="add-product-card">
            <div class="form-header">
                <h2 class="form-title">\u{418}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{44F} \u{43E} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{435}</h2>
                <p class="form-description">\u{417}\u{430}\u{43F}\u{43E}\u{43B}\u{43D}\u{438}\u{442}\u{435} \u{43E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{443}\u{44E} \u{438}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{44E} \u{43E} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{435}</p>
            </div>

            <form id="add-product-form">
                <!-- \u{418}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} -->
                <div class="form-group">
                    <label for="product-src" class="form-label">URL \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{44F} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} *</label>
                    <input 
                        type="url" 
                        class="form-control" 
                        id="product-src" 
                        name="src" 
                        placeholder=${this.data.src}
                        value=${this.data.src}
                    >
                    <span class="form-hint">\u{423}\u{43A}\u{430}\u{436}\u{438}\u{442}\u{435} \u{43F}\u{440}\u{44F}\u{43C}\u{443}\u{44E} \u{441}\u{441}\u{44B}\u{43B}\u{43A}\u{443} \u{43D}\u{430} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}</span>
                    
                    <!-- \u{41F}\u{440}\u{435}\u{434}\u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{44F} -->
                    <div class="image-preview">
                        <div class="preview-placeholder">\u{417}\u{434}\u{435}\u{441}\u{44C} \u{431}\u{443}\u{434}\u{435}\u{442} \u{43E}\u{442}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{430}\u{442}\u{44C}\u{441}\u{44F} \u{43F}\u{440}\u{435}\u{434}\u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440} \u{438}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{436}\u{435}\u{43D}\u{438}\u{44F}</div>
                        <!-- <img src="" alt="\u{41F}\u{440}\u{435}\u{434}\u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}" class="preview-image" style="display: none;"> -->
                    </div>
                </div>

                <!-- \u{41D}\u{430}\u{437}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} -->
                <div class="form-group">
                    <label for="product-title" class="form-label">\u{41D}\u{430}\u{437}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} *</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="product-title" 
                        name="title" 
                        placeholder=${this.data.title}
                        value=${this.data.title}
                        maxlength="100"
                    >
                    <span class="form-hint">\u{414}\u{43E} 100 \u{441}\u{438}\u{43C}\u{432}\u{43E}\u{43B}\u{43E}\u{432}</span>
                </div>

                <!-- \u{41E}\u{43F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} -->
                <div class="form-group">
                    <label for="product-text" class="form-label">\u{41E}\u{43F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} *</label>
                    <textarea 
                        class="form-control" 
                        id="product-text" 
                        name="text" 
                        placeholder=${this.data.text} 
                        value=${this.data.text}
                        maxlength="1000"
                    >${this.data.text}</textarea>
                    <span class="form-hint">\u{41E}\u{43F}\u{438}\u{448}\u{438}\u{442}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440} \u{43F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{43E}, \u{443}\u{43A}\u{430}\u{437}\u{430}\u{432} \u{435}\u{433}\u{43E} \u{445}\u{430}\u{440}\u{430}\u{43A}\u{442}\u{435}\u{440}\u{438}\u{441}\u{442}\u{438}\u{43A}\u{438} \u{438} \u{43E}\u{441}\u{43E}\u{431}\u{435}\u{43D}\u{43D}\u{43E}\u{441}\u{442}\u{438}</span>
                </div>

                <!-- \u{41A}\u{43D}\u{43E}\u{43F}\u{43A}\u{438} \u{434}\u{435}\u{439}\u{441}\u{442}\u{432}\u{438}\u{439} -->
                <div class="form-actions">
                    <button id="exit" type="button" class="btn btn-secondary">\u{41E}\u{442}\u{43C}\u{435}\u{43D}\u{430}</button>
                    <button id="submit" type="submit" class="btn btn-primary">\u{41E}\u{442}\u{440}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{442}\u{43E}\u{432}\u{430}\u{440}</button>
                </div>
            </form>
        </div>
    </main>
        `}validateForm(){let u=document.getElementById("product-src"),t=u.value.trim();if(!t)return this.showError(u,"Укажите URL изображения"),!1;try{new URL(t)}catch(t){return this.showError(u,"Укажите корректный URL"),!1}let e=document.getElementById("product-title"),o=e.value.trim();if(!o)return this.showError(e,"Укажите название товара"),!1;if(o.length<3)return this.showError(e,"Название товара должно содержать не менее 3 символов"),!1;let r=document.getElementById("product-text"),i=r.value.trim();return i?i.length<10?(this.showError(r,"Описание товара должно содержать не менее 10 символов"),!1):(this.clearErrors(),!0):(this.showError(r,"Добавьте описание товара"),!1)}showError(u,t){let e=u.closest(".form-group");e.classList.add("has-error");let o=e.querySelector(".error-message");o||((o=document.createElement("span")).className="form-hint error-message",e.appendChild(o)),o.textContent=t,u.focus()}clearErrors(){document.querySelectorAll(".has-error").forEach(u=>{u.classList.remove("has-error")}),document.querySelectorAll(".error-message").forEach(u=>{u.remove()})}addProduct(u){if(!this.validateForm())return;u.preventDefault();let t=Object.fromEntries(new FormData(u.target));o.patch(r.updateProductById(),t,u=>console.log(u))}addListenerToSrcInput(){let u=document.getElementById("product-src"),t=document.querySelector(".image-preview"),e=document.querySelector(".preview-placeholder");u.addEventListener("input",function(){let u=this.value.trim();if(u){let o=t.querySelector(".preview-image");o&&o.remove();let r=document.createElement("img");r.className="preview-image",r.alt="Предпросмотр товара",r.onload=function(){e.style.display="none",t.appendChild(r)},r.onerror=function(){e.textContent="Ошибка загрузки изображения. Проверьте URL.",e.style.display="block"},r.src=u}else{e.textContent="Здесь будет отображаться предпросмотр изображения",e.style.display="block";let u=t.querySelector(".preview-image");u&&u.remove()}})}goToPage(u){u.render()}addListenerToCancel(){document.getElementById("exit").addEventListener("click",()=>this.goToPage(new x(document.getElementById("root"),document)))}render(){this.parent.innerHTML="";let u=this.getHtml();this.parent.insertAdjacentHTML("beforeend",u),document.getElementById("add-product-form").addEventListener("submit",this.addProduct.bind(this)),this.addListenerToSrcInput(),this.addListenerToCancel()}}class s{constructor(u){this.parent=u}getHTML(u){return`
            <div id="product-card-${u.id}" class="product-card">
                <button id="remove-btn-${u.id}" class="card-delete">\u{270F}\u{FE0F}</button>
                <div class="card-image-container">
                    <img src=${u.src} alt="\u{422}\u{43E}\u{432}\u{430}\u{440}" class="card-image">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${u.title}</h3>
                </div>
            </div>
        `}editCard(u){new d(document.getElementById("root"),u).render()}addListeners(u){document.getElementById(`remove-btn-${u.id}`).addEventListener("click",()=>{this.editCard(u)})}render(u){let t=this.getHTML(u);this.parent.insertAdjacentHTML("beforeend",t),this.addListeners(u)}}class l{constructor(u,t){this.parent=u,this.data=t}get cardsContainer(){return document.getElementById("cards-container")}getHtml(){return`
            <style>
            /* \u{41E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{44B}\u{435} \u{441}\u{442}\u{438}\u{43B}\u{438} */
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'YS Text', 'Helvetica Neue', 'Arial', sans-serif;
            }
    
            body {
                background-color: #f9f9f9;
                color: #222;
                line-height: 1.5;
                padding-bottom: 40px;
            }
    
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }
    
            /* \u{428}\u{430}\u{43F}\u{43A}\u{430} */
            .header {
                background: #fff;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                padding: 16px 0;
                margin-bottom: 30px;
            }
    
            .logo-container {
                display: flex;
                align-items: center;
            }
    
            .logo {
                display: inline-flex;
                color: #222;
                font-weight: bold;
                font-size: 20px;
                text-decoration: none;
                align-items: center;
            }
    
            .logo-icon {
                color: #f33;
                margin-right: 8px;
                font-size: 22px;
            }
    
            /* \u{417}\u{430}\u{433}\u{43E}\u{43B}\u{43E}\u{432}\u{43E}\u{43A} \u{441}\u{442}\u{440}\u{430}\u{43D}\u{438}\u{446}\u{44B} */
            .page-title {
                font-size: 28px;
                font-weight: 600;
                margin-bottom: 16px;
            }
    
            .page-description {
                font-size: 16px;
                color: #666;
                margin-bottom: 24px;
            }
    
            /* \u{418}\u{43D}\u{444}\u{43E}-\u{431}\u{43B}\u{43E}\u{43A} */
            .info-block {
                background-color: #fff8e1;
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 24px;
                display: flex;
                align-items: flex-start;
            }
    
            .info-icon {
                font-size: 20px;
                margin-right: 12px;
                margin-top: 2px;
            }
    
            .info-text {
                font-size: 14px;
                color: #5a5a5a;
            }
    
            /* \u{421}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{435}\u{43A} */
            .cards-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 16px;
                margin-bottom: 32px;
            }
    
            /* \u{41A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{430} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} */
            .product-card {
                background: #fff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
                position: relative;
                transition: box-shadow 0.2s ease, transform 0.2s ease;
            }
    
            .product-card:hover {
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                transform: translateY(-2px);
            }
    
            .card-image-container {
                height: 160px;
                padding: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f6f6f6;
            }
    
            .card-image {
                max-height: 100%;
                max-width: 100%;
                object-fit: contain;
            }
    
            .card-content {
                padding: 16px;
            }
    
            .card-title {
                font-size: 15px;
                font-weight: 500;
                color: #222;
                margin-bottom: 8px;
                line-height: 1.4;
            }
    
            .card-delete {
                position: absolute;
                top: 8px;
                right: 8px;
                background: #fff;
                border: none;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                transition: background 0.2s ease;
                color: #f33;
                font-size: 15px;
                z-index: 2;
            }
    
            .card-delete:hover {
                background: #f33;
                color: #fff;
            }
    
            /* \u{41D}\u{438}\u{436}\u{43D}\u{44F}\u{44F} \u{43F}\u{430}\u{43D}\u{435}\u{43B}\u{44C} \u{434}\u{435}\u{439}\u{441}\u{442}\u{432}\u{438}\u{439} */
            .action-panel {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: #fff;
                box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
                padding: 16px 0;
                z-index: 100;
            }
    
            .action-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
    
            .action-info {
                font-size: 14px;
                color: #666;
            }
    
            .selected-count {
                font-weight: bold;
                color: #222;
            }
    
            .action-buttons {
                display: flex;
                gap: 10px;
            }
    
            .btn {
                border: none;
                border-radius: 4px;
                padding: 10px 16px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: background 0.2s ease;
            }
    
            .btn-secondary {
                background: #f2f2f2;
                color: #222;
            }
    
            .btn-secondary:hover {
                background: #e5e5e5;
            }
    
            .btn-danger {
                background: #f33;
                color: #fff;
            }
    
            .btn-danger:hover {
                background: #e62e2e;
            }
    
            /* Checkbox \u{434}\u{43B}\u{44F} \u{432}\u{44B}\u{431}\u{43E}\u{440}\u{430} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{435}\u{43A} */
            .card-checkbox {
                position: absolute;
                left: 8px;
                top: 8px;
                width: 20px;
                height: 20px;
                z-index: 2;
                accent-color: #fc0;
            }
    
            /* \u{41F}\u{443}\u{441}\u{442}\u{43E}\u{435} \u{441}\u{43E}\u{441}\u{442}\u{43E}\u{44F}\u{43D}\u{438}\u{435} */
            .empty-state {
                text-align: center;
                padding: 40px 0;
                background: #fff;
                border-radius: 8px;
                margin-bottom: 32px;
            }
    
            .empty-icon {
                font-size: 48px;
                color: #e0e0e0;
                margin-bottom: 16px;
            }
    
            .empty-title {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 8px;
                color: #333;
            }
    
            .empty-text {
                font-size: 14px;
                color: #666;
                max-width: 500px;
                margin: 0 auto;
            }
    
            /* \u{410}\u{434}\u{430}\u{43F}\u{442}\u{438}\u{432}\u{43D}\u{43E}\u{441}\u{442}\u{44C} */
            @media (max-width: 768px) {
                .cards-grid {
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                }
            }
    
            @media (max-width: 480px) {
                .cards-grid {
                    grid-template-columns: 1fr;
                }
            }
    
            .home-button {
                        display: flex;
                        align-items: center;
                        padding: 8px 16px;
                        background-color: #FFFFFF;
                        border: 2px solid #FFDB4D;
                        border-radius: 8px;
                        font-weight: 500;
                        font-family: 'YS Text', Arial, sans-serif;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    
                    .home-button:hover {
                        background-color: #F6F6F6;
                    }
                    
                    .home-icon {
                        margin-right: 8px;
                        font-size: 18px;
                    }
        </style>
        <!-- \u{428}\u{430}\u{43F}\u{43A}\u{430} -->
        <header class="header">
            <div class="container">
                <div class="logo-container">
                <button id="home-button" class="home-button">
                            <span class="home-icon">\u{1F3E0}</span> \u{414}\u{43E}\u{43C}\u{43E}\u{439}
                        </button>
                    <a href="#" class="logo">
                        <span class="logo-icon">\u{42F}</span>
                        \u{41C}\u{430}\u{440}\u{43A}\u{435}\u{442}
                    </a>
                </div>
            </div>
        </header>
                <div id="remove-page" class="container"> 
                <h1 class="page-title">\u{420}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432}</h1>
            <p class="page-description">\u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{44B}, \u{43A}\u{43E}\u{442}\u{43E}\u{440}\u{44B}\u{435} \u{445}\u{43E}\u{442}\u{438}\u{442}\u{435} \u{43E}\u{442}\u{440}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C}</p>
    
            <!-- \u{418}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{43E}\u{43D}\u{43D}\u{44B}\u{439} \u{431}\u{43B}\u{43E}\u{43A} -->
            <div class="info-block">
                <div class="info-icon">\u{2139}\u{FE0F}</div>
                <div class="info-text">
                    \u{434}\u{43B}\u{44F} \u{440}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F} \u{43F}\u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43D}\u{430} \u{43A}\u{43D}\u{43E}\u{43F}\u{43A}\u{443} \u{441}\u{43F}\u{440}\u{430}\u{432}\u{432}\u{430} \u{432}\u{432}\u{435}\u{440}\u{445}\u{443} \u{43D}\u{430} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{435} \u{43D}\u{443}\u{436}\u{43D}\u{43E}\u{433}\u{43E} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}.
                </div>
            </div>
                    <div id="cards-container" class="cards-grid"></div>
                </div>
            `}goToPage(u){u.render()}render(){this.parent.innerHTML="";let u=this.getHtml();this.parent.insertAdjacentHTML("beforeend",u),this.data.forEach(u=>{new s(this.cardsContainer).render(u)}),document.getElementById("home-button").addEventListener("click",()=>this.goToPage(new g(this.parent,this.data)))}}class c{constructor(u){this.parent=u}getHTML(u){return`
            <div id="product-card-${u.id}" class="product-card">
                <button id="remove-btn-${u.id}" class="card-delete">\u{2715}</button>
                <div class="card-image-container">
                    <img src=${u.src} alt="\u{422}\u{43E}\u{432}\u{430}\u{440}" class="card-image">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${u.title}</h3>
                </div>
            </div>
        `}deleteCard(u){document.getElementById(`product-card-${u.id}`).remove(),o.delete(r.removeProductById(u.id),u=>{console.log("nice delete")})}addListeners(u){document.getElementById(`remove-btn-${u.id}`).addEventListener("click",()=>{this.deleteCard(u)})}render(u){let t=this.getHTML(u);this.parent.insertAdjacentHTML("beforeend",t),this.addListeners(u)}}class p{constructor(u,t){this.parent=u,this.data=t}get cardsContainer(){return document.getElementById("cards-container")}getHtml(){return`
        <style>
        /* \u{41E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{44B}\u{435} \u{441}\u{442}\u{438}\u{43B}\u{438} */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'YS Text', 'Helvetica Neue', 'Arial', sans-serif;
        }

        body {
            background-color: #f9f9f9;
            color: #222;
            line-height: 1.5;
            padding-bottom: 40px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* \u{428}\u{430}\u{43F}\u{43A}\u{430} */
        .header {
            background: #fff;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            padding: 16px 0;
            margin-bottom: 30px;
        }

        .logo-container {
            display: flex;
            align-items: center;
        }

        .logo {
            display: inline-flex;
            color: #222;
            font-weight: bold;
            font-size: 20px;
            text-decoration: none;
            align-items: center;
        }

        .logo-icon {
            color: #f33;
            margin-right: 8px;
            font-size: 22px;
        }

        /* \u{417}\u{430}\u{433}\u{43E}\u{43B}\u{43E}\u{432}\u{43E}\u{43A} \u{441}\u{442}\u{440}\u{430}\u{43D}\u{438}\u{446}\u{44B} */
        .page-title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .page-description {
            font-size: 16px;
            color: #666;
            margin-bottom: 24px;
        }

        /* \u{418}\u{43D}\u{444}\u{43E}-\u{431}\u{43B}\u{43E}\u{43A} */
        .info-block {
            background-color: #fff8e1;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 24px;
            display: flex;
            align-items: flex-start;
        }

        .info-icon {
            font-size: 20px;
            margin-right: 12px;
            margin-top: 2px;
        }

        .info-text {
            font-size: 14px;
            color: #5a5a5a;
        }

        /* \u{421}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{435}\u{43A} */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 16px;
            margin-bottom: 32px;
        }

        /* \u{41A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{430} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} */
        .product-card {
            background: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            position: relative;
            transition: box-shadow 0.2s ease, transform 0.2s ease;
        }

        .product-card:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
        }

        .card-image-container {
            height: 160px;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f6f6f6;
        }

        .card-image {
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
        }

        .card-content {
            padding: 16px;
        }

        .card-title {
            font-size: 15px;
            font-weight: 500;
            color: #222;
            margin-bottom: 8px;
            line-height: 1.4;
        }

        .card-delete {
            position: absolute;
            top: 8px;
            right: 8px;
            background: #fff;
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            transition: background 0.2s ease;
            color: #f33;
            font-size: 15px;
            z-index: 2;
        }

        .card-delete:hover {
            background: #f33;
            color: #fff;
        }

        /* \u{41D}\u{438}\u{436}\u{43D}\u{44F}\u{44F} \u{43F}\u{430}\u{43D}\u{435}\u{43B}\u{44C} \u{434}\u{435}\u{439}\u{441}\u{442}\u{432}\u{438}\u{439} */
        .action-panel {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #fff;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
            padding: 16px 0;
            z-index: 100;
        }

        .action-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .action-info {
            font-size: 14px;
            color: #666;
        }

        .selected-count {
            font-weight: bold;
            color: #222;
        }

        .action-buttons {
            display: flex;
            gap: 10px;
        }

        .btn {
            border: none;
            border-radius: 4px;
            padding: 10px 16px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.2s ease;
        }

        .btn-secondary {
            background: #f2f2f2;
            color: #222;
        }

        .btn-secondary:hover {
            background: #e5e5e5;
        }

        .btn-danger {
            background: #f33;
            color: #fff;
        }

        .btn-danger:hover {
            background: #e62e2e;
        }

        /* Checkbox \u{434}\u{43B}\u{44F} \u{432}\u{44B}\u{431}\u{43E}\u{440}\u{430} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{435}\u{43A} */
        .card-checkbox {
            position: absolute;
            left: 8px;
            top: 8px;
            width: 20px;
            height: 20px;
            z-index: 2;
            accent-color: #fc0;
        }

        /* \u{41F}\u{443}\u{441}\u{442}\u{43E}\u{435} \u{441}\u{43E}\u{441}\u{442}\u{43E}\u{44F}\u{43D}\u{438}\u{435} */
        .empty-state {
            text-align: center;
            padding: 40px 0;
            background: #fff;
            border-radius: 8px;
            margin-bottom: 32px;
        }

        .empty-icon {
            font-size: 48px;
            color: #e0e0e0;
            margin-bottom: 16px;
        }

        .empty-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            color: #333;
        }

        .empty-text {
            font-size: 14px;
            color: #666;
            max-width: 500px;
            margin: 0 auto;
        }

        /* \u{410}\u{434}\u{430}\u{43F}\u{442}\u{438}\u{432}\u{43D}\u{43E}\u{441}\u{442}\u{44C} */
        @media (max-width: 768px) {
            .cards-grid {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
        }

        @media (max-width: 480px) {
            .cards-grid {
                grid-template-columns: 1fr;
            }
        }

        .home-button {
                    display: flex;
                    align-items: center;
                    padding: 8px 16px;
                    background-color: #FFFFFF;
                    border: 2px solid #FFDB4D;
                    border-radius: 8px;
                    font-weight: 500;
                    font-family: 'YS Text', Arial, sans-serif;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .home-button:hover {
                    background-color: #F6F6F6;
                }
                
                .home-icon {
                    margin-right: 8px;
                    font-size: 18px;
                }
    </style>
    <!-- \u{428}\u{430}\u{43F}\u{43A}\u{430} -->
    <header class="header">
        <div class="container">
            <div class="logo-container">
            <button id="home-button" class="home-button">
                        <span class="home-icon">\u{1F3E0}</span> \u{414}\u{43E}\u{43C}\u{43E}\u{439}
                    </button>
                <a href="#" class="logo">
                    <span class="logo-icon">\u{42F}</span>
                    \u{41C}\u{430}\u{440}\u{43A}\u{435}\u{442}
                </a>
            </div>
        </div>
    </header>
            <div id="remove-page" class="container"> 
            <h1 class="page-title">\u{423}\u{434}\u{430}\u{43B}\u{435}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432}</h1>
        <p class="page-description">\u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{44B}, \u{43A}\u{43E}\u{442}\u{43E}\u{440}\u{44B}\u{435} \u{445}\u{43E}\u{442}\u{438}\u{442}\u{435} \u{443}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C} \u{438}\u{437} \u{43A}\u{430}\u{442}\u{430}\u{43B}\u{43E}\u{433}\u{430}</p>

        <!-- \u{418}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{43E}\u{43D}\u{43D}\u{44B}\u{439} \u{431}\u{43B}\u{43E}\u{43A} -->
        <div class="info-block">
            <div class="info-icon">\u{2139}\u{FE0F}</div>
            <div class="info-text">
                \u{414}\u{43B}\u{44F} \u{443}\u{434}\u{430}\u{43B}\u{435}\u{43D}\u{438}\u{44F} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{43D}\u{430} \u{43A}\u{43D}\u{43E}\u{43F}\u{43A}\u{443} \u{441} \u{43A}\u{43E}\u{440}\u{437}\u{438}\u{43D}\u{43E}\u{439} \u{43D}\u{430} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{435} \u{438}\u{43B}\u{438} \u{432}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{43D}\u{435}\u{441}\u{43A}\u{43E}\u{43B}\u{44C}\u{43A}\u{43E} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432} \u{441} \u{43F}\u{43E}\u{43C}\u{43E}\u{449}\u{44C}\u{44E} \u{447}\u{435}\u{43A}\u{431}\u{43E}\u{43A}\u{441}\u{43E}\u{432} \u{438} \u{443}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{435} \u{438}\u{445} \u{43E}\u{434}\u{43D}\u{43E}\u{432}\u{440}\u{435}\u{43C}\u{435}\u{43D}\u{43D}\u{43E}.
            </div>
        </div>
                <div id="cards-container" class="cards-grid"></div>
            </div>
        `}goToPage(u){u.render()}render(){this.parent.innerHTML="";let u=this.getHtml();this.parent.insertAdjacentHTML("beforeend",u),this.data.forEach(u=>{new c(this.cardsContainer).render(u)}),document.getElementById("home-button").addEventListener("click",()=>this.goToPage(new g(this.parent,this.data)))}}class g{constructor(u,t){this.parent=u,this.data=t}getHTML(){return`
            <style>
    /* \u{41E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{44B}\u{435} \u{441}\u{442}\u{438}\u{43B}\u{438} */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'YS Text', 'Helvetica', 'Arial', sans-serif;
    }
    
    body {
      background-color: #f9f9f9;
      color: #222;
      line-height: 1.5;
      padding-bottom: 40px;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* \u{428}\u{430}\u{43F}\u{43A}\u{430} */
    .header {
      background: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      padding: 16px 0;
      margin-bottom: 30px;
    }
    
    .logo-container {
      display: flex;
      align-items: center;
    }
    
    .logo {
      display: inline-flex;
      color: #222;
      font-weight: bold;
      font-size: 20px;
      text-decoration: none;
      align-items: center;
    }
    
    .logo-icon {
      color: #f33;
      margin-right: 8px;
      font-size: 22px;
    }
    
    /* \u{417}\u{430}\u{433}\u{43E}\u{43B}\u{43E}\u{432}\u{43E}\u{43A} \u{441}\u{442}\u{440}\u{430}\u{43D}\u{438}\u{446}\u{44B} */
    .page-title {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 24px;
    }
    
    /* \u{41A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{430} \u{441} \u{43E}\u{43F}\u{435}\u{440}\u{430}\u{446}\u{438}\u{44F}\u{43C}\u{438} */
    .operations-card {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      padding: 24px;
      margin-bottom: 24px;
    }
    
    .operations-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #222;
    }
    
    .operations-description {
      color: #666;
      margin-bottom: 24px;
      font-size: 15px;
    }
    
    /* \u{41A}\u{43D}\u{43E}\u{43F}\u{43A}\u{438} \u{43E}\u{43F}\u{435}\u{440}\u{430}\u{446}\u{438}\u{439} */
    .operations-menu {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 16px;
    }
    
    .operation-item {
      background: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      padding: 20px;
      transition: all 0.2s ease;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    
    .operation-item:hover {
      border-color: #FFCC00;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
      transform: translateY(-2px);
    }
    
    .operation-icon {
      background: #FFDB4D;
      width: 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      margin-bottom: 16px;
    }
    
    .operation-item.delete .operation-icon {
      background: #ffebed;
      color: #f33;
    }
    
    .operation-item.edit .operation-icon {
      background: #e5f0ff;
      color: #1e88e5;
    }
    
    .operation-item.add .operation-icon {
      background: #e6ffed;
      color: #34a853;
    }
    
    .operation-title {
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .operation-desc {
      color: #666;
      font-size: 14px;
      flex-grow: 1;
    }
    
    .operation-button {
      background: #FFDB4D;
      border: none;
      border-radius: 4px;
      padding: 10px 16px;
      font-weight: 500;
      font-size: 15px;
      cursor: pointer;
      margin-top: 16px;
      transition: background 0.2s ease;
      color: #000;
      text-align: center;
    }
    
    .operation-button:hover {
      background: #FFCC00;
    }
    
    .operation-item.delete .operation-button {
      background: #fff;
      border: 1px solid #f33;
      color: #f33;
    }
    
    .operation-item.delete .operation-button:hover {
      background: #ffebed;
    }
    
    .operation-item.edit .operation-button {
      background: #f0f6ff;
      color: #1e88e5;
      border: 1px solid #1e88e5;
    }
    
    .operation-item.edit .operation-button:hover {
      background: #e5f0ff;
    }
      .home-button {
                    display: flex;
                    align-items: center;
                    padding: 8px 16px;
                    background-color: #FFFFFF;
                    border: 2px solid #FFDB4D;
                    border-radius: 8px;
                    font-weight: 500;
                    font-family: 'YS Text', Arial, sans-serif;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .home-button:hover {
                    background-color: #F6F6F6;
                }
                
                .home-icon {
                    margin-right: 8px;
                    font-size: 18px;
                }
    
    /* Footer */
    .footer {
      margin-top: 40px;
      color: #888;
      font-size: 13px;
      text-align: center;
    }
    
    /* Adaptive */
    @media (max-width: 768px) {
      .operations-menu {
        grid-template-columns: 1fr;
      }
      
      .page-title {
        font-size: 24px;
      }
    }
  </style>

            <!-- \u{428}\u{430}\u{43F}\u{43A}\u{430} -->
  <header class="header">
    <div class="container">
      <div class="logo-container">
      <button id="home-button" class="home-button">
                        <span class="home-icon">\u{1F3E0}</span> \u{414}\u{43E}\u{43C}\u{43E}\u{439}
                    </button>
        <a href="#" class="logo">
          <span class="logo-icon">\u{42F}</span>
          \u{41C}\u{430}\u{440}\u{43A}\u{435}\u{442} 
        </a>
      </div>
    </div>
  </header>

            <!-- \u{41E}\u{441}\u{43D}\u{43E}\u{432}\u{43D}\u{43E}\u{435} \u{441}\u{43E}\u{434}\u{435}\u{440}\u{436}\u{438}\u{43C}\u{43E}\u{435} -->
  <main class="container">
    <h1 class="page-title">\u{423}\u{43F}\u{440}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{435} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}\u{43C}\u{438}</h1>
    
    <div class="operations-card">
      <h2 class="operations-title">\u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{43E}\u{43F}\u{435}\u{440}\u{430}\u{446}\u{438}\u{44E}</h2>
      <p class="operations-description">
        \u{412}\u{44B}\u{431}\u{435}\u{440}\u{438}\u{442}\u{435} \u{43D}\u{435}\u{43E}\u{431}\u{445}\u{43E}\u{434}\u{438}\u{43C}\u{43E}\u{435} \u{434}\u{435}\u{439}\u{441}\u{442}\u{432}\u{438}\u{435} \u{434}\u{43B}\u{44F} \u{440}\u{430}\u{431}\u{43E}\u{442}\u{44B} \u{441} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}\u{43C}\u{438} \u{432} \u{43A}\u{430}\u{442}\u{430}\u{43B}\u{43E}\u{433}\u{435}
      </p>
      
      <div class="operations-menu">
        <!-- \u{41A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{430} \u{434}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{44F} -->
        <div class="operation-item add">
          <div class="operation-icon">+</div>
          <h3 class="operation-title">\u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{442}\u{43E}\u{432}\u{430}\u{440}</h3>
          <p class="operation-desc">
            \u{421}\u{43E}\u{437}\u{434}\u{430}\u{43D}\u{438}\u{435} \u{43D}\u{43E}\u{432}\u{43E}\u{433}\u{43E} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430} \u{432} \u{43A}\u{430}\u{442}\u{430}\u{43B}\u{43E}\u{433}\u{435} \u{441} \u{443}\u{43A}\u{430}\u{437}\u{430}\u{43D}\u{438}\u{435}\u{43C} \u{432}\u{441}\u{435}\u{439} \u{43D}\u{435}\u{43E}\u{431}\u{445}\u{43E}\u{434}\u{438}\u{43C}\u{43E}\u{439} \u{438}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{438}.
          </p>
          <button class="operation-button" id="add">\u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C}</button>
        </div>
        
        <!-- \u{41A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{430} \u{440}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{43D}\u{438}\u{44F} -->
        <div class="operation-item edit">
          <div class="operation-icon">\u{270F}\u{FE0F}</div>
          <h3 class="operation-title">\u{420}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C} \u{442}\u{43E}\u{432}\u{430}\u{440}</h3>
          <p class="operation-desc">
            \u{418}\u{437}\u{43C}\u{435}\u{43D}\u{435}\u{43D}\u{438}\u{435} \u{438}\u{43D}\u{444}\u{43E}\u{440}\u{43C}\u{430}\u{446}\u{438}\u{438} \u{43E} \u{441}\u{443}\u{449}\u{435}\u{441}\u{442}\u{432}\u{443}\u{44E}\u{449}\u{435}\u{43C} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{435} \u{432} \u{43A}\u{430}\u{442}\u{430}\u{43B}\u{43E}\u{433}\u{435}.
          </p>
          <button class="operation-button"  id="edit">\u{420}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C}</button>
        </div>
        
        <!-- \u{41A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{430} \u{443}\u{434}\u{430}\u{43B}\u{435}\u{43D}\u{438}\u{44F} -->
        <div class="operation-item delete">
          <div class="operation-icon">\u{1F5D1}\u{FE0F}</div>
          <h3 class="operation-title">\u{423}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C} \u{442}\u{43E}\u{432}\u{430}\u{440}</h3>
          <p class="operation-desc">
            \u{423}\u{434}\u{430}\u{43B}\u{435}\u{43D}\u{438}\u{435} \u{43E}\u{434}\u{43D}\u{43E}\u{433}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{435}\u{441}\u{43A}\u{43E}\u{43B}\u{44C}\u{43A}\u{438}\u{445} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432} \u{438}\u{437} \u{43A}\u{430}\u{442}\u{430}\u{43B}\u{43E}\u{433}\u{430}.
          </p>
          <button class="operation-button"  id="remove">\u{423}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{44C}</button>
        </div>
      </div>
    </div>
  </main>
            `}goToPage(u){u.render()}getListeners(){document.getElementById("add").addEventListener("click",()=>this.goToPage(new a(this.parent))),document.getElementById("edit").addEventListener("click",()=>this.goToPage(new l(this.parent,this.data))),document.getElementById("remove").addEventListener("click",()=>this.goToPage(new p(this.parent,this.data))),document.getElementById("home-button").addEventListener("click",()=>this.goToPage(new x(this.parent,document)))}render(){this.parent.innerHTML="";let u=this.getHTML();this.parent.insertAdjacentHTML("beforeend",u),this.getListeners()}}class m{constructor(u,t){this.parent=u,this.data=t}getHtml(){return`
            <div class="search-container">
                <div class="search-row">
                    <input type="text" id="search-input" class="search-input" placeholder="\u{41F}\u{43E}\u{438}\u{441}\u{43A} \u{43F}\u{43E} \u{43D}\u{430}\u{437}\u{432}\u{430}\u{43D}\u{438}\u{44E} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{430}...">
                </div>
                
                <div class="header-buttons">
                    <div class="search-buttons">
                        <button id="search-button" class="yandex-button">
                            \u{41D}\u{430}\u{439}\u{442}\u{438}
                        </button>
                        <button id="clear-search" class="yandex-button">
                            \u{41E}\u{447}\u{438}\u{441}\u{442}\u{438}\u{442}\u{44C}
                        </button>
                        <button id="operations" class="yandex-button">
                            \u{41E}\u{43F}\u{435}\u{440}\u{430}\u{446}\u{438}\u{438}
                        </button>
                    </div>
                    <div>
                        <button id="plus" class="yandex-button">
                            <span style="margin-right: 5px;">+</span> \u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{43A}\u{430}\u{440}\u{442}\u{43E}\u{447}\u{43A}\u{443}
                        </button>
                    </div>
                </div>
            </div>
            <style>
                .search-container {
                    background-color: #FFDB4D;
                    padding: 16px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                
                .search-input {
                    width: 100%;
                    padding: 12px 16px;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
                }
                
                .search-input:focus {
                    outline: none;
                    box-shadow: 0 0 0 2px #3390EC;
                }
                
                .header-buttons {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 16px;
                }
                
                .yandex-button {
                    background-color: #FFF;
                    border: 2px solid #FFDB4D;
                    border-radius: 8px;
                    padding: 8px 16px;
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                    font-family: 'YS Text', Arial, sans-serif;
                    transition: all 0.3s ease;
                    margin-right: 10px;
                    cursor: pointer;
                }
                
                .yandex-button:hover {
                    background-color: #F6F6F6;
                }
            </style>
            `}render(){let u=this.getHtml();this.parent.insertAdjacentHTML("beforeend",u),document.getElementById("search-button").addEventListener("click",()=>{let u=document.getElementById("search-input").value.toLowerCase().trim();if(!u)return void this.showAllCards();let t=document.querySelectorAll('[id^="card-trio-"]');o.get(r.getProducts(),u=>console.log()),t.forEach(t=>{let e=t.children,o=!1;Array.from(e).forEach(t=>{let e=t.querySelector("h5");e&&(e.textContent.toLowerCase().includes(u)?(t.style.display="",o=!0):t.style.display="none")}),t.style.display=o?"":"none"})}),document.getElementById("clear-search").addEventListener("click",()=>{document.getElementById("search-input").value="",this.showAllCards()}),document.getElementById("search-input").addEventListener("keypress",u=>{"Enter"===u.key&&document.getElementById("search-button").click()}),document.getElementById("operations").addEventListener("click",()=>{new g(document.getElementById("root"),this.data).render()})}showAllCards(){document.querySelectorAll('[id^="card-trio-"]').forEach(u=>{u.style.display="",Array.from(u.children).forEach(u=>{u.style.display=""})})}}class x{constructor(u,t){this.parent=u,this.document=t,this.i=1,this.data=null}get pageRoot(){return this.document.getElementById("main-page")}getHTML(){return`
            <div id="main-page">
                <!-- SearchComponent \u{431}\u{443}\u{434}\u{435}\u{442} \u{434}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D} \u{437}\u{434}\u{435}\u{441}\u{44C} -->
            </div>
            <div id="cards-container"></div>
            `}getData(){o.get(r.getProducts(),u=>this.renderData(u))}renderData(u){this.data=u,new m(this.pageRoot,this.data).render(),document.getElementById("plus").addEventListener("click",()=>this.addCard());let t=this.document.getElementById("cards-container");t.insertAdjacentHTML("beforeend",'<div id="card-trio-0" class="card-row"></div>'),u.forEach(u=>{new n(this.document.getElementById(`card-trio-${Math.floor((this.i-1)/3)}`)).render(u,this.clickCard.bind(this)),this.i%3==0&&t.insertAdjacentHTML("beforeend",`<div id="card-trio-${Math.floor(this.i/3)}" class="card-row"></div>`),this.i++})}addCard(){let u=this.data[0];this.document.getElementById(`card-trio-${Math.floor((this.i-1)/3)}`)||this.document.getElementById("cards-container").insertAdjacentHTML("beforeend",`<div id="card-trio-${Math.floor((this.i-1)/3)}" class="card-row"></div>`),new n(this.document.getElementById(`card-trio-${Math.floor((this.i-1)/3)}`)).render(u,this.clickCard.bind(this)),this.i%3==0&&this.document.getElementById("cards-container").insertAdjacentHTML("beforeend",`<div id="card-trio-${Math.floor(this.i/3)}" class="card-row"></div>`),this.i++}clickCard(u){let t=u.target.dataset.id;new i(this.parent,t,this.data,this.document).render()}render(){this.parent.innerHTML="";let u=this.getHTML();this.parent.insertAdjacentHTML("beforeend",u);let t=document.createElement("style");t.textContent=`
            .card-row {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                margin-bottom: 20px;
            }
        `,document.head.appendChild(t),this.getData()}}const h=document;new x(h.getElementById("root"),h).render();
//# sourceMappingURL=js-project.96811aea.js.map
