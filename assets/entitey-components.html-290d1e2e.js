import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},o=e(`<h1 id="entity-components" tabindex="-1"><a class="header-anchor" href="#entity-components" aria-hidden="true">#</a> Entity components</h1><p>Entities are split into components and components are split into variables.</p><h3 id="v-example-v" tabindex="-1"><a class="header-anchor" href="#v-example-v" aria-hidden="true">#</a> v example v</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token property">&quot;component_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;valuable_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
            And
    <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;component_name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;valuable_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="here-s-a-list-of-all-biome-components" tabindex="-1"><a class="header-anchor" href="#here-s-a-list-of-all-biome-components" aria-hidden="true">#</a> Here&#39;s a list of all biome components.</h1><h2 id="desciption" tabindex="-1"><a class="header-anchor" href="#desciption" aria-hidden="true">#</a> <strong>Desciption</strong></h2><ul><li><code>identifer</code> Is used to identifie the entity in other files and is normally the entity&#39;s name or id and should be unique, if you use identifier of another entite it will overwrite it. <strong>[required]</strong></li><li><code>runtime_identfier</code> Is normally set to <code>Badger:badger_mob</code>. <strong>[required]</strong></li><li><code>is_summonable</code> It determines if the entite is summonable. <strong>[required]</strong></li></ul><h4 id="v-example-v-1" tabindex="-1"><a class="header-anchor" href="#v-example-v-1" aria-hidden="true">#</a> v example v</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:mob_name&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtime_identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:badger_mob&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//bolen</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mushroom-data" tabindex="-1"><a class="header-anchor" href="#mushroom-data" aria-hidden="true">#</a> <strong>Mushroom data</strong></h2><ul><li><code>role</code> Determines the role of the entity. (Can be Animal, Melee, Special, Ranged, other)</li><li><code>function</code> Determines the function of the entity. (Can Be PvP, other)</li></ul><h4 id="v-example-v-2" tabindex="-1"><a class="header-anchor" href="#v-example-v-2" aria-hidden="true">#</a> v example v</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;mushroom_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ranged&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;function&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PvP&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="template" tabindex="-1"><a class="header-anchor" href="#template" aria-hidden="true">#</a> <strong>Template</strong></h2><ul><li>The <code>badger:template</code> component is used to make an entity have all the same components of another entity without the need to rewrite them, It is also a array so you can add multiple templates at the same time but they might conflict with etch other, Any of the components that are add by the template will be overridden by ones in the file.</li></ul><h4 id="v-example-v-3" tabindex="-1"><a class="header-anchor" href="#v-example-v-3" aria-hidden="true">#</a> v example v</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;badger:template&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;badger:mob_skeleton&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="loot" tabindex="-1"><a class="header-anchor" href="#loot" aria-hidden="true">#</a> <strong>Loot</strong></h2><ul><li><code>table</code> Determines which loot talbe is droped when the entity is destroyed/killed.</li></ul><h4 id="v-example-v-4" tabindex="-1"><a class="header-anchor" href="#v-example-v-4" aria-hidden="true">#</a> v example v</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;badger:loot&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uncommon_mob&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spawn-cost" tabindex="-1"><a class="header-anchor" href="#spawn-cost" aria-hidden="true">#</a> <strong>Spawn cost</strong></h2><ul><li><code>costs</code> Is the cost of spawning the entity although it is largy irrelevant due to that normally being decided by the spawer it self.</li><li><code>tickets</code> Is the number of soul flames cupped/taken by the entity if any.</li></ul><h4 id="v-example-v-5" tabindex="-1"><a class="header-anchor" href="#v-example-v-5" aria-hidden="true">#</a> v example v</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;badger:spawn_costs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;costs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;diamond&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;emerald&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tickets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;ticket&quot;</span><span class="token operator">:</span> <span class="token string">&quot;spawn&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="movement" tabindex="-1"><a class="header-anchor" href="#movement" aria-hidden="true">#</a> Movement</h2><ul><li><code>move_speed</code> It is the speed at which the entity can move.</li><li><code>air_control_factor</code> it is how easy it is for the entity to turn around in the air.</li></ul><h4 id="v-example-v-6" tabindex="-1"><a class="header-anchor" href="#v-example-v-6" aria-hidden="true">#</a> v example v</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;badger:movement&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;move_speed&quot;</span><span class="token operator">:</span> <span class="token number">4.5</span><span class="token punctuation">,</span>
        <span class="token property">&quot;air_control_factor&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="physics" tabindex="-1"><a class="header-anchor" href="#physics" aria-hidden="true">#</a> Physics</h2><ul><li><code>gravity</code> It is how strong is how much the force of gravity affects the entity - is more + is less.</li><li><code>friction</code> It is how much the entity is slowed down by touching the ground.</li></ul><h4 id="v-example-v-7" tabindex="-1"><a class="header-anchor" href="#v-example-v-7" aria-hidden="true">#</a> v example v</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;badger:physics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;gravity&quot;</span><span class="token operator">:</span> <span class="token number">-30</span><span class="token punctuation">,</span>
        <span class="token property">&quot;friction&quot;</span><span class="token operator">:</span> <span class="token number">0.04</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),i=[o];function p(l,r){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","entitey-components.html.vue"]]);export{d as default};
