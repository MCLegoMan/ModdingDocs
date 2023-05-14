import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},o=e(`<h1 id="intro-to-blocks" tabindex="-1"><a class="header-anchor" href="#intro-to-blocks" aria-hidden="true">#</a> Intro to Blocks</h1><p>Minecraft Legends allows us to add custom blocks into the game. This tutorial will cover how to create some simple blocks.</p><h2 id="block-behavior-file" tabindex="-1"><a class="header-anchor" href="#block-behavior-file" aria-hidden="true">#</a> Block Behavior File</h2><p>Block behaviors are structured to contain a description and a list of components that defines the block&#39;s behavior.</p><p><code>BP/blocks/custom_block.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:custom_block&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger_stone&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;minecraft:block_shape&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;shape&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cube&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:destroy_time&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;badger:terrain_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;terrain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stone&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can learn more about block components <a href="../blocks/block-components">here</a>.</p><p>In this tutorial, we will create four blocks:</p><ul><li>Filename: custom_block.json; Identifier: wiki:custom_block</li><li>Filename: custom_log.json; Identifier: wiki:custom_log</li><li>Filename: custom_side.json; Identifier: wiki:custom_side</li><li>Filename: custom_shape.json; Identifier: wiki:custom_shape</li></ul><p>You can play around with changing the component values for each of these. Let&#39;s now define the blocks&#39;s visuals.</p><h2 id="block-visuals" tabindex="-1"><a class="header-anchor" href="#block-visuals" aria-hidden="true">#</a> Block Visuals</h2><p>Blocks use a separate file to define its texture in the &#39;RP/blocks&#39; folder.</p><p><code>RP/blocks/custom_log.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.15.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;badger:client_block&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;wiki:custom_log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;up&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/your_custom_texture&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;down&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/your_custom_texture&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;side&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/blocks/your_custom_texture&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>badger:client_block</code> is the component that tells the game this is a client file for the block.</li><li><code>textures</code> can be a string or an object with the <code>up</code>, <code>down</code>, and <code>side</code> children.</li></ul><p>With the knowledge, create the same files for the other 3 files.</p><h3 id="block-shape" tabindex="-1"><a class="header-anchor" href="#block-shape" aria-hidden="true">#</a> Block Shape</h3><p>Block shapes are defined in the <code>BP</code> file instead of the <code>RP</code> file instead. In the <code>custom_shape.json</code> file, change the <code>shape</code> key from <code>cube</code> to <code>sheet</code>.</p><h2 id="validating-your-blocks" tabindex="-1"><a class="header-anchor" href="#validating-your-blocks" aria-hidden="true">#</a> Validating Your Blocks</h2><p>Now that we have our block files created, we need to check if we did it right. Unlike Minecraft, we can&#39;t simply place the block in the world.</p><p>To test our blocks, we will replace the grass with our custom blocks. Create a <code>grasslands.biome.json</code> file in the <code>BP/biomes</code> folder.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.13.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minecraft:biome&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;badger:overworld_height&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;height_params&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;average_height&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;texture_heights&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;noise_params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.05</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;grasslands&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;minecraft:surface_parameters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;default_surface&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;mid_material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:block_dirt&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;top_material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:custom_block&quot;</span> <span class="token comment">// Replace this with the custom block</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;foundation_material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:block_sand&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;sea_floor_depth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
                <span class="token property">&quot;sea_floor_material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:block_sand&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;sea_material&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:block_water&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;overworld&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grasslands&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),p=[o];function c(i,l){return n(),a("div",null,p)}const u=s(t,[["render",c],["__file","block-intro.html.vue"]]);export{u as default};
