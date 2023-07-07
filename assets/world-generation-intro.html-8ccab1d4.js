import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},o=e(`<h1 id="intro-to-world-generation" tabindex="-1"><a class="header-anchor" href="#intro-to-world-generation" aria-hidden="true">#</a> Intro to World Generation</h1><p>You can change the world&#39;s generation in Minecraft Legends. Setting it up however is a bit tricky at first. This guide will go over generating biomes and features.</p><h2 id="concepts" tabindex="-1"><a class="header-anchor" href="#concepts" aria-hidden="true">#</a> Concepts</h2><p>In Minecraft Legends, world generation is configured via &quot;deck building&quot; where each biome is a &quot;card.&quot; A deck is essentially an array of objects that contain information on how to place a biome. The bsharp scripting API is then responsible for handling the deck. Before we get started, one key has to be deleted in your <code>RP\\game_rules\\game_rule.json</code>, which is <code>&quot;generator_type&quot;</code>. This key tells the game to generate a flatland, we don&#39;t want that.</p><h2 id="biomes" tabindex="-1"><a class="header-anchor" href="#biomes" aria-hidden="true">#</a> Biomes</h2><p>In this section, we will attempt to generate the grasslands biome. First we need to build our deck. in your <code>BP</code> folder, create a <code>gamelayer/world_placements</code> folder. Inside this folder, create a file called <code>placements_world.json</code>. Inside this file, copy the code below. Replace <code>wiki_mod</code> with your mod identifier.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;factions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;biome&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;biome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grasslands&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spread_priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;starting_pixels&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token property">&quot;total_pixels&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;initial_villages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;small&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;placement_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;placement_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;game_start&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;placement_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;special&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;spawn_entity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:world_center_locator&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;wiki_mod&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;unique_card_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger_center_wiki_mod_center&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;village_data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:xp_well_of_fate&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>biome</code> - Defines the biome for this card</li><li><code>initial_villages</code> - How many villages are in this card</li><li><code>placement_name</code> - The name for this card</li><li><code>placement_rules</code> - Defines how this card will be generated or slotted</li><li><code>placement_type</code> - The placement type: special, biome, slot</li><li><code>spawn_entity</code> - Needed for world generation, defines the center of the map</li><li><code>tags</code> - The tag for the cards</li><li><code>unique_card_id</code> - This needs to be a unique name, similar to identifiers</li><li><code>village_data</code> - What type of village will be placed</li></ul><p>Now that the deck has been built, we need to tell the game how to handle the deck. This is where the scripting API comes in. In your <code>BP</code> folder, create a <code>scripts_bsharp20/world</code> folder. In it, create a <code>world_definition.js</code> file.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> wikiModWorldGenDefinition <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token function-variable function">modify</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">filterManager</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        filterManager<span class="token punctuation">.</span><span class="token function">AppendFilter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;wiki_mod&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">SNIPPET_InheritsFromGameMode</span><span class="token punctuation">(</span><span class="token string">&#39;wiki_mod&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">SetWorldGenDefinition</span><span class="token punctuation">(</span>wikiModWorldGenDefinition<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is our deck manager. <code>wikiModWorldGenDefinition</code> can be named anything, but this contains the object that filters and manages the deck. <code>filterManager.AppendFilter</code> takes in two arguments, an array of tags and an integer. <code>SNIPPET_InheritsFromGameMode</code> tells the game that for this type of game mode, it should create this type of world generation. Make sure the tags matches the ones in your deck and the string in <code>SNIPPET_InheritsFromGameMode</code> matches your mod identifier.</p><p>If everything is done correctly, you should spawn in a meadows biome. Pressing the map key should show you&#39;re in a meadows biome and not a flatland.</p><h3 id="adding-more-biomes" tabindex="-1"><a class="header-anchor" href="#adding-more-biomes" aria-hidden="true">#</a> Adding more biomes</h3><p>Now that we have gone over the basics, we&#39;ll add more biomes to our world generation. We&#39;ll add the jungle in our example. Recall that each biome is a card, which is an object in a deck which is an array.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;factions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;biome&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;biome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jungle&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;spread_priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;starting_pixels&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
                <span class="token property">&quot;total_pixels&quot;</span><span class="token operator">:</span> <span class="token number">16</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;initial_villages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;small&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;placement_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jungle_set1&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;placement_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;chunk_distance_from_parent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token number">64</span><span class="token punctuation">,</span>
                            <span class="token number">96</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;distance_to_zero_score&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;tag_parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;placement_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;biome&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;wiki_mod&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;set1&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, the placement rule is different. The placement rule tells the game to place this biome 64-96 chunks away from the tag, &quot;center&quot;. There isn&#39;t much documentation for placement rules so it is recommended to check out the vanilla examples. Now we need to tell our deck manager to generate this card.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>filterManager<span class="token punctuation">.</span><span class="token function">AppendFilter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;wiki_mod&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
filterManager<span class="token punctuation">.</span><span class="token function">AppendFilter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;wiki_mod&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;set1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),p=[o];function i(c,l){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","world-generation-intro.html.vue"]]);export{u as default};