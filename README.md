# UrlSortenerAPI

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<html>
  <head>
    <title>URL Shortener API</title>
    <style type="text/css">
      body {
      	font-family: Trebuchet MS, sans-serif;
      	font-size: 15px;
      	color: #444;
      	margin-right: 24px;
      }
      
      h1	{
      	font-size: 25px;
      }
      h2	{
      	font-size: 20px;
      }
      h3	{
      	font-size: 16px;
      	font-weight: bold;
      }
      hr	{
      	height: 1px;
      	border: 0;
      	color: #ddd;
      	background-color: #ddd;
      }
      
      .app-desc {
        clear: both;
        margin-left: 20px;
      }
      .param-name {
        width: 100%;
      }
      .license-info {
        margin-left: 20px;
      }
      
      .license-url {
        margin-left: 20px;
      }
      
      .model {
        margin: 0 0 0px 20px;
      }
      
      .method {
        margin-left: 20px;
      }
      
      .method-notes	{
      	margin: 10px 0 20px 0;
      	font-size: 90%;
      	color: #555;
      }
      
      pre {
        padding: 10px;
        margin-bottom: 2px;
      }
      
      .http-method {
       text-transform: uppercase;
      }
      
      pre.get {
        background-color: #0f6ab4;
      }
      
      pre.post {
        background-color: #10a54a;
      }
      
      pre.put {
        background-color: #c5862b;
      }
      
      pre.delete {
        background-color: #a41e22;
      }
      
      .huge	{
      	color: #fff;
      }
      
      pre.example {
        background-color: #f3f3f3;
        padding: 10px;
        border: 1px solid #ddd;
      }
      
      code {
        white-space: pre;
      }
      
      .nickname {
        font-weight: bold;
      }
      
      .method-path {
        font-size: 1.5em;
        background-color: #0f6ab4;
      }
      
      .up {
        float:right;
      }
      
      .parameter {
        width: 500px;
      }
      
      .param {
        width: 500px;
        padding: 10px 0 0 20px;
        font-weight: bold;
      }
      
      .param-desc {
        width: 700px;
        padding: 0 0 0 20px;
        color: #777;
      }
      
      .param-type {
        font-style: italic;
      }
      
      .param-enum-header {
      width: 700px;
      padding: 0 0 0 60px;
      color: #777;
      font-weight: bold;
      }
      
      .param-enum {
      width: 700px;
      padding: 0 0 0 80px;
      color: #777;
      font-style: italic;
      }
      
      .field-label {
        padding: 0;
        margin: 0;
        clear: both;
      }
      
      .field-items	{
      	padding: 0 0 15px 0;
      	margin-bottom: 15px;
      }
      
      .return-type {
        clear: both;
        padding-bottom: 10px;
      }
      
      .param-header {
        font-weight: bold;
      }
      
      .method-tags {
        text-align: right;
      }
      
      .method-tag {
        background: none repeat scroll 0% 0% #24A600;
        border-radius: 3px;
        padding: 2px 10px;
        margin: 2px;
        color: #FFF;
        display: inline-block;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
  <h1>URL Shortener API</h1>
    <div class="app-desc">API для сокращения URL-адресов, построенный на NestJS и MongoDB</div>
    <div class="app-desc">More information: <a href="https://helloreverb.com">https://helloreverb.com</a></div>
    <div class="app-desc">Contact Info: <a href="hello@helloreverb.com">hello@helloreverb.com</a></div>
    <div class="app-desc">Version: 1.0.0</div>
    <div class="app-desc">BasePath:/api/v1</div>
    <div class="license-info">All rights reserved</div>
    <div class="license-url">http://apache.org/licenses/LICENSE-2.0.html</div>
  <h2>Access</h2>

  <h2><a name="__Methods">Methods</a></h2>
  [ Jump to <a href="#__Models">Models</a> ]

  <h3>Table of Contents </h3>
  <div class="method-summary"></div>
  <h4><a href="#Default">Default</a></h4>
  <ul>
  <li><a href="#shortenerTokenGet"><code><span class="http-method">get</span> /shortener/{token}</code></a></li>
  <li><a href="#shortenerToshortPost"><code><span class="http-method">post</span> /shortener/toshort</code></a></li>
  </ul>

  <h1><a name="Default">Default</a></h1>
  <div class="method"><a name="shortenerTokenGet"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="get"><code class="huge"><span class="http-method">get</span> /shortener/{token}</code></pre></div>
    <div class="method-summary">Перенаправление на оригинальный URL (<span class="nickname">shortenerTokenGet</span>)</div>
    <div class="method-notes">Перенаправляет на оригинальный URL по токену.</div>

    <h3 class="field-label">Path parameters</h3>
    <div class="field-items">
      <div class="param">token (required)</div>
      
            <div class="param-desc"><span class="param-type">Path Parameter</span> &mdash;  </div>    </div>  <!-- field-items -->







    <!--Todo: process Response Object and its headers, schema, examples -->


    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">302</h4>
    Перенаправление на оригинальный URL
        <a href="#"></a>
    <h4 class="field-label">404</h4>
    Токен не найден
        <a href="#inline_response_404">inline_response_404</a>
  </div> <!-- method -->
  <hr/>
  <div class="method"><a name="shortenerToshortPost"></a>
    <div class="method-path">
    <a class="up" href="#__Methods">Up</a>
    <pre class="post"><code class="huge"><span class="http-method">post</span> /shortener/toshort</code></pre></div>
    <div class="method-summary">Создать сокращенный URL (<span class="nickname">shortenerToshortPost</span>)</div>
    <div class="method-notes">Принимает оригинальный URL и возвращает сокращенный.</div>


    <h3 class="field-label">Consumes</h3>
    This API call consumes the following media types via the <span class="header">Content-Type</span> request header:
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Request body</h3>
    <div class="field-items">
      <div class="param">body <a href="#ShortenerDto">ShortenerDto</a> (required)</div>
      
            <div class="param-desc"><span class="param-type">Body Parameter</span> &mdash;  </div>
                </div>  <!-- field-items -->




    <h3 class="field-label">Return type</h3>
    <div class="return-type">
      <a href="#inline_response_200">inline_response_200</a>
      
    </div>

    <!--Todo: process Response Object and its headers, schema, examples -->

    <h3 class="field-label">Example data</h3>
    <div class="example-data-content-type">Content-Type: application/json</div>
    <pre class="example"><code>{
  "shortUrl" : "http://localhost:8080/api/v1/shortener/abc123"
}</code></pre>

    <h3 class="field-label">Produces</h3>
    This API call produces the following media types according to the <span class="header">Accept</span> request header;
    the media type will be conveyed by the <span class="header">Content-Type</span> response header.
    <ul>
      <li><code>application/json</code></li>
    </ul>

    <h3 class="field-label">Responses</h3>
    <h4 class="field-label">200</h4>
    Успешное создание сокращенного URL
        <a href="#inline_response_200">inline_response_200</a>
  </div> <!-- method -->
  <hr/>

  <h2><a name="__Models">Models</a></h2>
  [ Jump to <a href="#__Methods">Methods</a> ]

  <h3>Table of Contents</h3>
  <ol>
    <li><a href="#ShortenerDto"><code>ShortenerDto</code></a></li>
    <li><a href="#inline_response_200"><code>inline_response_200</code></a></li>
    <li><a href="#inline_response_404"><code>inline_response_404</code></a></li>
  </ol>

  <div class="model">
    <h3><a name="ShortenerDto"><code>ShortenerDto</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">url </div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  format: uri</div>
          <div class="param-desc"><span class="param-type">example: https://www.example.com</span></div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="inline_response_200"><code>inline_response_200</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">shortUrl (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: http://localhost:8080/api/v1/shortener/abc123</span></div>
    </div>  <!-- field-items -->
  </div>
  <div class="model">
    <h3><a name="inline_response_404"><code>inline_response_404</code></a> <a class="up" href="#__Models">Up</a></h3>
    
    <div class="field-items">
      <div class="param">message (optional)</div><div class="param-desc"><span class="param-type"><a href="#string">String</a></span>  </div>
          <div class="param-desc"><span class="param-type">example: URL не найден</span></div>
    </div>  <!-- field-items -->
  </div>
  </body>
</html>
