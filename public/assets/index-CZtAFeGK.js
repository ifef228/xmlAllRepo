(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();function h(a,t){return a.join(t)}function b(a,t,e){if(t<0||t>=a.length||e<0||e>=a.length)return console.error("Некорректные индексы from или to"),a;const o=a.splice(t,1)[0];return a.splice(e,0,o),a}function f(a,t){let e=0;for(const o of a)t.startsWith(o)&&e++;return e}function p(a){const t=String(a).toLowerCase().replace(/\s+/g,"");return t===t.split("").reverse().join("")}class v{constructor(t){this.parent=t}getHTML(t){const e=[`Название: ${t.title}`,`Описание: ${t.text}`,`Является палиндромом: ${p(t.title)?"Да ✓":"Нет ✗"}`];e.length>2&&b(e,e.length-1,1);const o=t.text.split(" "),r=f(o,"abc");return`
            <div class="product-full ${p(t.title)?"palindrome-highlight":""}">
                <div class="product-header">
                    <div class="product-image-container">
                        <img src="${t.src}" alt="${t.title}" class="product-image">
                    </div>
                    <div class="product-title-area">
                        <h2>${t.title}</h2>
                        ${p(t.title)?'<div class="palindrome-tag">✨ Это палиндром!</div>':""}
                    </div>
                </div>
                
                <div class="product-body">
                    <div class="product-description">
                        <p>${t.text}</p>
                        ${r>0?`<p class="prefix-note">В описании ${r} ${this.getWordForm(r)} с префиксом "abc"</p>`:""}
                    </div>
                    
                    <div class="product-characteristics">
                        <h4>Характеристики:</h4>
                        <ul>
                            ${e.map(n=>`<li>${n}</li>`).join("")}
                        </ul>
                    </div>
                    
                    <div class="product-extra-info">
                        <div class="info-box">
                            <h5>Интересный факт</h5>
                            <p>${h(["Знаете","ли","вы","что",t.title.length>5?"это длинное название":"это короткое название"]," ")}?</p>
                        </div>
                    </div>
                    
                    <div class="product-actions">
                        <button class="buy-button">
                            Купить сейчас
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
            `}getWordForm(t){return t===1?"слово":t>=2&&t<=4?"слова":"слов"}render(t){this.parent.innerHTML="";const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e);let o=1;const r=document.getElementById("product-count"),n=document.getElementById("product-minus");n&&n.addEventListener("click",()=>{o>1&&(o--,r.textContent=o)});const i=document.getElementById("product-plus");i&&i.addEventListener("click",()=>{o++,r.textContent=o})}}class y{get(t,e){const o=new XMLHttpRequest;o.open("GET",t),o.send(),o.onreadystatechange=()=>{o.readyState===4&&this._handleResponse(o,e)}}post(t,e,o){const r=new XMLHttpRequest;r.open("POST",t),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify(e)),r.onreadystatechange=()=>{r.readyState===4&&this._handleResponse(r,o)}}patch(t,e,o){const r=new XMLHttpRequest;r.open("PATCH",t),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify(e)),r.onreadystatechange=()=>{r.readyState===4&&this._handleResponse(r,o)}}delete(t,e){const o=new XMLHttpRequest;o.open("DELETE",t),o.send(),o.onreadystatechange=()=>{o.readyState===4&&this._handleResponse(o,e)}}_handleResponse(t,e){if(t.status>=200&&t.status<300)try{if(t.responseText){const r=JSON.parse(t.responseText);e(r,t.status)}else console.warn("Пустой ответ от сервера"),e(null,t.status,"Пустой ответ")}catch(r){console.error("Ошибка парсинга JSON:",r),console.error("Ответ от сервера:",t.responseText),e(null,t.status,"Ошибка парсинга JSON")}else console.error(`HTTP-ошибка ${t.status}: ${t.statusText}`),e(null,t.status,t.statusText)}}const s=new y;class w{constructor(){this.baseUrl="http://localhost:3000"}getProducts(){return`${this.baseUrl}/products`}getProductById(t){return`${this.baseUrl}/products/${t}`}searchProductsByTitle(t){return`${this.baseUrl}/products/filter?title=${t}`}createProduct(){return`${this.baseUrl}/products`}removeProductById(t){return`${this.baseUrl}/products/${t}`}updateProductById(t){return`${this.baseUrl}/products/${t}`}}const d=new w;class k{constructor(t,e,o,r){this.root=t,this.id=e,this.data=o,this.document=r}get pageRoot(){return this.document.getElementById("product-content")}getHTML(){return`
            <div class="product-page">
                <header class="product-header">
                    <button id="home-button" class="home-button">
                        <span class="home-icon">🏠</span> Домой
                    </button>
                    <h2>Страница товара</h2>
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
            `}goHome(){new l(this.root,this.document).render()}clickBack(){this.goHome()}render(){s.get(d.getProducts(),n=>console.log()),this.root.innerHTML="";const t=this.getHTML();this.root.insertAdjacentHTML("beforeend",t),this.document.getElementById("home-button").addEventListener("click",()=>this.goHome());const e=new v(this.pageRoot);let o=+this.id;isNaN(o)&&(o=1);const r=this.data.find(n=>n.id===o);r||console.error("polundra!!!"),e.render(r)}}class u{constructor(t){this.parent=t}getHTML(t){const e=p(t.title),o=f(t.text.split(" "),"abc");return`
            <!-- Обернуть все карточки в контейнер -->
<div class="products-container">
  <div class="product-card ${e?"palindrome-card":""}" id="product-card-${t.id}">
    <img class="product-image" src="${t.src}" alt="${t.title}">
    <div class="product-details">
      <div class="title-container">
        <h5>${t.title}</h5>
        ${e?'<span class="palindrome-badge">Палиндром!</span>':""}
      </div>
      <p>
        ${t.text}
        ${o>0?`<span class="prefix-info">(${o} слов начинаются с "abc")</span>`:""}
      </p>
      <button class="btn btn-primary card-btn" id="click-card-${t.id}" data-id="${t.id}">
        ${h(["Нажми","на","меня"]," ")}
      </button>
      <div class="card-actions">
        <button id="minus-${t.id}" class="control-button"><span>-</span></button>
        <span id="count-${t.id}">0</span>
        <button id="plus-${t.id}" class="control-button"><span>+</span></button>
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
  /* overflow-x: auto; /* опционально, если карточек больше, чем влезает по ширине */
}
.product-card {
  flex: 0 0 320px; /* или нужная вам ширина карточки */
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
/* остальные стили оставить без изменений */

.product-card:hover {
  transform: translateY(-5px);
}

/* Палиндром */
.palindrome-card {
  border: 2px solid gold;
  box-shadow: 0 0 10px gold;
}

/* Изображение */
.product-image {
  width: 100%;
  max-width: 100%;
  height: 170px;
  object-fit: contain;   /* <=! сохраняет пропорции, не обрезает! */
  background: #f5f5f5;
  display: block;
}

/* Детали карточки */
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

/* Адаптивность */
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

            `}deleteCard(t){document.getElementById(`product-card-${t.id}`).remove()}addListeners(t,e){document.getElementById(`click-card-${t.id}`).addEventListener("click",e);let o=0;const r=document.getElementById(`count-${t.id}`);document.getElementById(`minus-${t.id}`).addEventListener("click",()=>{o>0&&(o--,r.textContent=o),o===0&&this.deleteCard(t)}),document.getElementById(`plus-${t.id}`).addEventListener("click",()=>{o++,r.textContent=o})}render(t,e){const o=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",o),this.addListeners(t,e)}}class E{constructor(t){this.parent=t}getHtml(){return`
            <style>
        /* Основные стили */
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

        /* Шапка */
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

        /* Заголовок страницы */
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

        /* Форма добавления товара */
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

        /* Предпросмотр изображения */
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

        /* Кнопки */
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

        /* Инфо-блок */
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

        /* Адаптивность */
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

    <!-- Шапка -->
    <header class="header">
        <div class="container">
            <div class="logo-container">
                <a href="#" class="logo">
                    <span class="logo-icon">Я</span>
                    Маркет
                </a>
            </div>
        </div>
    </header>

    <!-- Основное содержимое -->
    <main class="container">
        <h1 class="page-title">Добавление товара</h1>
        <p class="page-description">Добавьте новый товар в каталог</p>

        <!-- Информационный блок -->
        <div class="info-block">
            <div class="info-icon">ℹ️</div>
            <div class="info-text">
                Заполните все обязательные поля. Товар будет опубликован после проверки модератором.
            </div>
        </div>

        <!-- Форма добавления товара -->
        <div class="add-product-card">
            <div class="form-header">
                <h2 class="form-title">Информация о товаре</h2>
                <p class="form-description">Заполните основную информацию о товаре</p>
            </div>

            <form id="add-product-form">
                <!-- Изображение товара -->
                <div class="form-group">
                    <label for="product-src" class="form-label">URL изображения товара *</label>
                    <input 
                        type="url" 
                        class="form-control" 
                        id="product-src" 
                        name="src" 
                        placeholder="https://example.com/image.jpg" 
                        required 
                    >
                    <span class="form-hint">Укажите прямую ссылку на изображение товара</span>
                    
                    <!-- Предпросмотр изображения -->
                    <div class="image-preview">
                        <div class="preview-placeholder">Здесь будет отображаться предпросмотр изображения</div>
                        <!-- <img src="" alt="Предпросмотр товара" class="preview-image" style="display: none;"> -->
                    </div>
                </div>

                <!-- Название товара -->
                <div class="form-group">
                    <label for="product-title" class="form-label">Название товара *</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="product-title" 
                        name="title" 
                        placeholder="Например: Смартфон Apple iPhone 15 Pro 256 ГБ" 
                        required 
                        maxlength="100"
                    >
                    <span class="form-hint">До 100 символов</span>
                </div>

                <!-- Описание товара -->
                <div class="form-group">
                    <label for="product-text" class="form-label">Описание товара *</label>
                    <textarea 
                        class="form-control" 
                        id="product-text" 
                        name="text" 
                        placeholder="Подробное описание товара" 
                        required 
                        maxlength="1000"
                    ></textarea>
                    <span class="form-hint">Опишите товар подробно, указав его характеристики и особенности</span>
                </div>

                <!-- Кнопки действий -->
                <div class="form-actions">
                    <button id="exit" type="button" class="btn btn-secondary">Отмена</button>
                    <button id="submit" type="submit" class="btn btn-primary">Добавить товар</button>
                </div>
            </form>
        </div>
    </main>
        `}validateForm(){const t=document.getElementById("product-src"),e=t.value.trim();if(!e)return this.showError(t,"Укажите URL изображения"),!1;try{new URL(e)}catch{return this.showError(t,"Укажите корректный URL"),!1}const o=document.getElementById("product-title"),r=o.value.trim();if(!r)return this.showError(o,"Укажите название товара"),!1;if(r.length<3)return this.showError(o,"Название товара должно содержать не менее 3 символов"),!1;const n=document.getElementById("product-text"),i=n.value.trim();return i?i.length<10?(this.showError(n,"Описание товара должно содержать не менее 10 символов"),!1):(this.clearErrors(),!0):(this.showError(n,"Добавьте описание товара"),!1)}showError(t,e){const o=t.closest(".form-group");o.classList.add("has-error");let r=o.querySelector(".error-message");r||(r=document.createElement("span"),r.className="form-hint error-message",o.appendChild(r)),r.textContent=e,t.focus()}clearErrors(){document.querySelectorAll(".has-error").forEach(t=>{t.classList.remove("has-error")}),document.querySelectorAll(".error-message").forEach(t=>{t.remove()})}addProduct(t){if(!this.validateForm())return;t.preventDefault();const e=t.target,o=new FormData(e),r=Object.fromEntries(o);s.post(d.createProduct(),r,n=>console.log(n))}addListenerToSrcInput(){const t=document.getElementById("product-src"),e=document.querySelector(".image-preview"),o=document.querySelector(".preview-placeholder");t.addEventListener("input",function(){const r=this.value.trim();if(r){const n=e.querySelector(".preview-image");n&&n.remove();const i=document.createElement("img");i.className="preview-image",i.alt="Предпросмотр товара",i.onload=function(){o.style.display="none",e.appendChild(i)},i.onerror=function(){o.textContent="Ошибка загрузки изображения. Проверьте URL.",o.style.display="block"},i.src=r}else{o.textContent="Здесь будет отображаться предпросмотр изображения",o.style.display="block";const n=e.querySelector(".preview-image");n&&n.remove()}})}goToPage(t){t.render()}addListenerToCancel(){document.getElementById("exit").addEventListener("click",()=>this.goToPage(new l(document.getElementById("root"),document)))}render(){this.parent.innerHTML="";const t=this.getHtml();this.parent.insertAdjacentHTML("beforeend",t),document.getElementById("add-product-form").addEventListener("submit",this.addProduct.bind(this)),this.addListenerToSrcInput(),this.addListenerToCancel()}}class F{constructor(t,e){this.parent=t,this.data=e}getHtml(){return`
            <style>
        /* Основные стили */
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

        /* Шапка */
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

        /* Заголовок страницы */
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

        /* Форма добавления товара */
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

        /* Предпросмотр изображения */
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

        /* Кнопки */
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

        /* Инфо-блок */
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

        /* Адаптивность */
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

    <!-- Шапка -->
    <header class="header">
        <div class="container">
            <div class="logo-container">
                <a href="#" class="logo">
                    <span class="logo-icon">Я</span>
                    Маркет
                </a>
            </div>
        </div>
    </header>

    <!-- Основное содержимое -->
    <main class="container">
        <h1 class="page-title">Редактирование товара</h1>
        <p class="page-description">Добавьте новый товар в каталог</p>

        <!-- Информационный блок -->
        <div class="info-block">
            <div class="info-icon">ℹ️</div>
            <div class="info-text">
                Заполните все обязательные поля. Товар будет опубликован после проверки модератором.
            </div>
        </div>

        <!-- Форма добавления товара -->
        <div class="add-product-card">
            <div class="form-header">
                <h2 class="form-title">Информация о товаре</h2>
                <p class="form-description">Заполните основную информацию о товаре</p>
            </div>

            <form id="add-product-form">
                <!-- Изображение товара -->
                <div class="form-group">
                    <label for="product-src" class="form-label">URL изображения товара *</label>
                    <input 
                        type="url" 
                        class="form-control" 
                        id="product-src" 
                        name="src" 
                        placeholder=${this.data.src}
                        value=${this.data.src}
                    >
                    <span class="form-hint">Укажите прямую ссылку на изображение товара</span>
                    
                    <!-- Предпросмотр изображения -->
                    <div class="image-preview">
                        <div class="preview-placeholder">Здесь будет отображаться предпросмотр изображения</div>
                        <!-- <img src="" alt="Предпросмотр товара" class="preview-image" style="display: none;"> -->
                    </div>
                </div>

                <!-- Название товара -->
                <div class="form-group">
                    <label for="product-title" class="form-label">Название товара *</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="product-title" 
                        name="title" 
                        placeholder=${this.data.title}
                        value=${this.data.title}
                        maxlength="100"
                    >
                    <span class="form-hint">До 100 символов</span>
                </div>

                <!-- Описание товара -->
                <div class="form-group">
                    <label for="product-text" class="form-label">Описание товара *</label>
                    <textarea 
                        class="form-control" 
                        id="product-text" 
                        name="text" 
                        placeholder=${this.data.text} 
                        value=${this.data.text}
                        maxlength="1000"
                    >${this.data.text}</textarea>
                    <span class="form-hint">Опишите товар подробно, указав его характеристики и особенности</span>
                </div>

                <!-- Кнопки действий -->
                <div class="form-actions">
                    <button id="exit" type="button" class="btn btn-secondary">Отмена</button>
                    <button id="submit" type="submit" class="btn btn-primary">Отредактировать товар</button>
                </div>
            </form>
        </div>
    </main>
        `}validateForm(){const t=document.getElementById("product-src"),e=t.value.trim();if(!e)return this.showError(t,"Укажите URL изображения"),!1;try{new URL(e)}catch{return this.showError(t,"Укажите корректный URL"),!1}const o=document.getElementById("product-title"),r=o.value.trim();if(!r)return this.showError(o,"Укажите название товара"),!1;if(r.length<3)return this.showError(o,"Название товара должно содержать не менее 3 символов"),!1;const n=document.getElementById("product-text"),i=n.value.trim();return i?i.length<10?(this.showError(n,"Описание товара должно содержать не менее 10 символов"),!1):(this.clearErrors(),!0):(this.showError(n,"Добавьте описание товара"),!1)}showError(t,e){const o=t.closest(".form-group");o.classList.add("has-error");let r=o.querySelector(".error-message");r||(r=document.createElement("span"),r.className="form-hint error-message",o.appendChild(r)),r.textContent=e,t.focus()}clearErrors(){document.querySelectorAll(".has-error").forEach(t=>{t.classList.remove("has-error")}),document.querySelectorAll(".error-message").forEach(t=>{t.remove()})}addProduct(t){if(!this.validateForm())return;t.preventDefault();const e=t.target,o=new FormData(e),r=Object.fromEntries(o);s.patch(d.updateProductById(),r,n=>console.log(n))}addListenerToSrcInput(){const t=document.getElementById("product-src"),e=document.querySelector(".image-preview"),o=document.querySelector(".preview-placeholder");t.addEventListener("input",function(){const r=this.value.trim();if(r){const n=e.querySelector(".preview-image");n&&n.remove();const i=document.createElement("img");i.className="preview-image",i.alt="Предпросмотр товара",i.onload=function(){o.style.display="none",e.appendChild(i)},i.onerror=function(){o.textContent="Ошибка загрузки изображения. Проверьте URL.",o.style.display="block"},i.src=r}else{o.textContent="Здесь будет отображаться предпросмотр изображения",o.style.display="block";const n=e.querySelector(".preview-image");n&&n.remove()}})}goToPage(t){t.render()}addListenerToCancel(){document.getElementById("exit").addEventListener("click",()=>this.goToPage(new l(document.getElementById("root"),document)))}render(){this.parent.innerHTML="";const t=this.getHtml();this.parent.insertAdjacentHTML("beforeend",t),document.getElementById("add-product-form").addEventListener("submit",this.addProduct.bind(this)),this.addListenerToSrcInput(),this.addListenerToCancel()}}let L=class{constructor(t){this.parent=t}getHTML(t){return`
            <div id="product-card-${t.id}" class="product-card">
                <button id="remove-btn-${t.id}" class="card-delete">✏️</button>
                <div class="card-image-container">
                    <img src=${t.src} alt="Товар" class="card-image">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${t.title}</h3>
                </div>
            </div>
        `}editCard(t){new F(document.getElementById("root"),t).render()}addListeners(t){document.getElementById(`remove-btn-${t.id}`).addEventListener("click",()=>{this.editCard(t)})}render(t){const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e),this.addListeners(t)}};class z{constructor(t,e){this.parent=t,this.data=e}get cardsContainer(){return document.getElementById("cards-container")}getHtml(){return`
            <style>
            /* Основные стили */
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
    
            /* Шапка */
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
    
            /* Заголовок страницы */
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
    
            /* Инфо-блок */
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
    
            /* Список карточек */
            .cards-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 16px;
                margin-bottom: 32px;
            }
    
            /* Карточка товара */
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
    
            /* Нижняя панель действий */
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
    
            /* Checkbox для выбора карточек */
            .card-checkbox {
                position: absolute;
                left: 8px;
                top: 8px;
                width: 20px;
                height: 20px;
                z-index: 2;
                accent-color: #fc0;
            }
    
            /* Пустое состояние */
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
    
            /* Адаптивность */
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
        <!-- Шапка -->
        <header class="header">
            <div class="container">
                <div class="logo-container">
                <button id="home-button" class="home-button">
                            <span class="home-icon">🏠</span> Домой
                        </button>
                    <a href="#" class="logo">
                        <span class="logo-icon">Я</span>
                        Маркет
                    </a>
                </div>
            </div>
        </header>
                <div id="remove-page" class="container"> 
                <h1 class="page-title">Редактирование товаров</h1>
            <p class="page-description">Выберите товары, которые хотите отредактировать</p>
    
            <!-- Информационный блок -->
            <div class="info-block">
                <div class="info-icon">ℹ️</div>
                <div class="info-text">
                    для редактирования пнажмите на кнопку справва вверху на карточке нужного товара.
                </div>
            </div>
                    <div id="cards-container" class="cards-grid"></div>
                </div>
            `}goToPage(t){t.render()}render(){this.parent.innerHTML="";const t=this.getHtml();this.parent.insertAdjacentHTML("beforeend",t),this.data.forEach(e=>{new L(this.cardsContainer).render(e)}),document.getElementById("home-button").addEventListener("click",()=>this.goToPage(new g(this.parent,this.data)))}}class T{constructor(t){this.parent=t}getHTML(t){return`
            <div id="product-card-${t.id}" class="product-card">
                <button id="remove-btn-${t.id}" class="card-delete">✕</button>
                <div class="card-image-container">
                    <img src=${t.src} alt="Товар" class="card-image">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${t.title}</h3>
                </div>
            </div>
        `}deleteCard(t){document.getElementById(`product-card-${t.id}`).remove(),s.delete(d.removeProductById(t.id),o=>{console.log("nice delete")})}addListeners(t){document.getElementById(`remove-btn-${t.id}`).addEventListener("click",()=>{this.deleteCard(t)})}render(t){const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e),this.addListeners(t)}}class B{constructor(t,e){this.parent=t,this.data=e}get cardsContainer(){return document.getElementById("cards-container")}getHtml(){return`
        <style>
        /* Основные стили */
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

        /* Шапка */
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

        /* Заголовок страницы */
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

        /* Инфо-блок */
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

        /* Список карточек */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 16px;
            margin-bottom: 32px;
        }

        /* Карточка товара */
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

        /* Нижняя панель действий */
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

        /* Checkbox для выбора карточек */
        .card-checkbox {
            position: absolute;
            left: 8px;
            top: 8px;
            width: 20px;
            height: 20px;
            z-index: 2;
            accent-color: #fc0;
        }

        /* Пустое состояние */
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

        /* Адаптивность */
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
    <!-- Шапка -->
    <header class="header">
        <div class="container">
            <div class="logo-container">
            <button id="home-button" class="home-button">
                        <span class="home-icon">🏠</span> Домой
                    </button>
                <a href="#" class="logo">
                    <span class="logo-icon">Я</span>
                    Маркет
                </a>
            </div>
        </div>
    </header>
            <div id="remove-page" class="container"> 
            <h1 class="page-title">Удаление товаров</h1>
        <p class="page-description">Выберите товары, которые хотите удалить из каталога</p>

        <!-- Информационный блок -->
        <div class="info-block">
            <div class="info-icon">ℹ️</div>
            <div class="info-text">
                Для удаления товара нажмите на кнопку с корзиной на карточке или выберите несколько товаров с помощью чекбоксов и удалите их одновременно.
            </div>
        </div>
                <div id="cards-container" class="cards-grid"></div>
            </div>
        `}goToPage(t){t.render()}render(){this.parent.innerHTML="";const t=this.getHtml();this.parent.insertAdjacentHTML("beforeend",t),this.data.forEach(e=>{new T(this.cardsContainer).render(e)}),document.getElementById("home-button").addEventListener("click",()=>this.goToPage(new g(this.parent,this.data)))}}class g{constructor(t,e){this.parent=t,this.data=e}getHTML(){return`
            <style>
    /* Основные стили */
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
    
    /* Шапка */
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
    
    /* Заголовок страницы */
    .page-title {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 24px;
    }
    
    /* Карточка с операциями */
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
    
    /* Кнопки операций */
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

            <!-- Шапка -->
  <header class="header">
    <div class="container">
      <div class="logo-container">
      <button id="home-button" class="home-button">
                        <span class="home-icon">🏠</span> Домой
                    </button>
        <a href="#" class="logo">
          <span class="logo-icon">Я</span>
          Маркет 
        </a>
      </div>
    </div>
  </header>

            <!-- Основное содержимое -->
  <main class="container">
    <h1 class="page-title">Управление товарами</h1>
    
    <div class="operations-card">
      <h2 class="operations-title">Выберите операцию</h2>
      <p class="operations-description">
        Выберите необходимое действие для работы с товарами в каталоге
      </p>
      
      <div class="operations-menu">
        <!-- Карточка добавления -->
        <div class="operation-item add">
          <div class="operation-icon">+</div>
          <h3 class="operation-title">Добавить товар</h3>
          <p class="operation-desc">
            Создание нового товара в каталоге с указанием всей необходимой информации.
          </p>
          <button class="operation-button" id="add">Добавить</button>
        </div>
        
        <!-- Карточка редактирования -->
        <div class="operation-item edit">
          <div class="operation-icon">✏️</div>
          <h3 class="operation-title">Редактировать товар</h3>
          <p class="operation-desc">
            Изменение информации о существующем товаре в каталоге.
          </p>
          <button class="operation-button"  id="edit">Редактировать</button>
        </div>
        
        <!-- Карточка удаления -->
        <div class="operation-item delete">
          <div class="operation-icon">🗑️</div>
          <h3 class="operation-title">Удалить товар</h3>
          <p class="operation-desc">
            Удаление одного или нескольких товаров из каталога.
          </p>
          <button class="operation-button"  id="remove">Удалить</button>
        </div>
      </div>
    </div>
  </main>
            `}goToPage(t){t.render()}getListeners(){document.getElementById("add").addEventListener("click",()=>this.goToPage(new E(this.parent))),document.getElementById("edit").addEventListener("click",()=>this.goToPage(new z(this.parent,this.data))),document.getElementById("remove").addEventListener("click",()=>this.goToPage(new B(this.parent,this.data))),document.getElementById("home-button").addEventListener("click",()=>this.goToPage(new l(this.parent,document)))}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.getListeners()}}class C{constructor(t,e){this.parent=t,this.data=e}getHtml(){return`
            <div class="search-container">
                <div class="search-row">
                    <input type="text" id="search-input" class="search-input" placeholder="Поиск по названию товара...">
                </div>
                
                <div class="header-buttons">
                    <div class="search-buttons">
                        <button id="search-button" class="yandex-button">
                            Найти
                        </button>
                        <button id="clear-search" class="yandex-button">
                            Очистить
                        </button>
                        <button id="operations" class="yandex-button">
                            Операции
                        </button>
                    </div>
                    <div>
                        <button id="plus" class="yandex-button">
                            <span style="margin-right: 5px;">+</span> Добавить карточку
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
            `}render(){const t=this.getHtml();this.parent.insertAdjacentHTML("beforeend",t),document.getElementById("search-button").addEventListener("click",()=>{const e=document.getElementById("search-input").value.toLowerCase().trim();if(!e){this.showAllCards();return}const o=document.querySelectorAll('[id^="card-trio-"]');s.get(d.getProducts(),r=>console.log()),o.forEach(r=>{const n=r.children;let i=!1;Array.from(n).forEach(c=>{const m=c.querySelector("h5");m&&(m.textContent.toLowerCase().includes(e)?(c.style.display="",i=!0):c.style.display="none")}),r.style.display=i?"":"none"})}),document.getElementById("clear-search").addEventListener("click",()=>{document.getElementById("search-input").value="",this.showAllCards()}),document.getElementById("search-input").addEventListener("keypress",e=>{e.key==="Enter"&&document.getElementById("search-button").click()}),document.getElementById("operations").addEventListener("click",()=>{new g(document.getElementById("root"),this.data).render()})}showAllCards(){document.querySelectorAll('[id^="card-trio-"]').forEach(e=>{e.style.display="";const o=e.children;Array.from(o).forEach(r=>{r.style.display=""})})}}class l{constructor(t,e){this.parent=t,this.document=e,this.i=1,this.data=null}get pageRoot(){return this.document.getElementById("main-page")}getHTML(){return`
            <div id="main-page">
                <!-- SearchComponent будет добавлен здесь -->
            </div>
            <div id="cards-container"></div>
            `}getData(){s.get(d.getProducts(),t=>this.renderData(t))}renderData(t){this.data=t,new C(this.pageRoot,this.data).render(),document.getElementById("plus").addEventListener("click",()=>this.addCard());const o=this.document.getElementById("cards-container");o.insertAdjacentHTML("beforeend",'<div id="card-trio-0" class="card-row"></div>'),t.forEach(r=>{new u(this.document.getElementById(`card-trio-${Math.floor((this.i-1)/3)}`)).render(r,this.clickCard.bind(this)),this.i%3==0&&o.insertAdjacentHTML("beforeend",`<div id="card-trio-${Math.floor(this.i/3)}" class="card-row"></div>`),this.i++})}addCard(){const t=this.data[0];this.document.getElementById(`card-trio-${Math.floor((this.i-1)/3)}`)||this.document.getElementById("cards-container").insertAdjacentHTML("beforeend",`<div id="card-trio-${Math.floor((this.i-1)/3)}" class="card-row"></div>`),new u(this.document.getElementById(`card-trio-${Math.floor((this.i-1)/3)}`)).render(t,this.clickCard.bind(this)),this.i%3==0&&this.document.getElementById("cards-container").insertAdjacentHTML("beforeend",`<div id="card-trio-${Math.floor(this.i/3)}" class="card-row"></div>`),this.i++}clickCard(t){const e=t.target.dataset.id;new k(this.parent,e,this.data,this.document).render()}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t);const e=document.createElement("style");e.textContent=`
            .card-row {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                margin-bottom: 20px;
            }
        `,document.head.appendChild(e),this.getData()}}const x=document,I=x.getElementById("root"),$=new l(I,x);$.render();
