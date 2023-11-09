<script>
    import {Accordion, AccordionItem, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

    let selectedItem = 'website';
</script>

<div class="grid space-y-4 grid-cols-1 place-items-center">
    <h2 id="projects" class="h2">Current Projects</h2>
    <hr class="w-2/6 h-1 bg-primary-100 rounded">
    <p class="text-center">When I'm not working or spending time on other hobbies, I love to throw myself into one of my many project ideas. Here are some that I'm currently working on or plan on starting soon.</p>
    <div class="grid grid-cols-2 place-items-stretch space-x-4">
        <div>

            <ListBox active="variant-glass-primary" hover="hover:variant-soft" rounded="rounded-container-token">
                <ListBoxItem bind:group={selectedItem} name="My Website" value="website">
                    <div>
                        <h3 class="h3">My Website</h3>
                        <p>The website you're looking at right now! I consider this an active project, and I intend to continue developing it.</p>
                    </div>
                </ListBoxItem>
                <ListBoxItem bind:group={selectedItem} name="FAF" value="faf">
                    <div>
                        <h3 class="h3">FAF Multiplayer Client</h3>
                        <p><a href="https://www.faforever.com/" target="_blank"><strong>FAForever</strong></a> is an open-source community maintained version of the game Supreme Commander: Forged Alliance. I intend on building a new, modern client for it using AvaloniaUI.</p>
                    </div>
                </ListBoxItem>
                <ListBoxItem bind:group={selectedItem} name="Microbit" value="microbit">
                    <div>
                        <h3 class="h3">Embedded Rust with Microbit</h3>
                        <p>I'm learning some embedded programming with Rust and Microbit's V2 controller using <a href="https://docs.rust-embedded.org/discovery/microbit/" target="_blank"><strong>this book</strong></a>!</p>
                    </div>
                </ListBoxItem>
                <ListBoxItem bind:group={selectedItem} name="Data Analysis" value="data">
                    <div>
                        <h3 class="h3">Google's Data Analysis Certificate</h3>
                        <p>I'm currently enrolled in <a href="https://www.coursera.org/professional-certificates/google-data-analytics#about" target="_blank"><strong>Google's Data Analytics Certificate</strong></a> program on Coursera.</p>
                    </div>
                </ListBoxItem>
            </ListBox>
        </div>
        
        
        <div>
            {#if selectedItem === 'website'}
                <Accordion autocollapse class="card p-4 text-token col-span-1 w-full h-full">
                    <AccordionItem open>
                        <svelte:fragment slot="summary"><h3 class="h3">Styling</h3></svelte:fragment>
                        <svelte:fragment slot="content">
                            <p>The site still needs to be optimized for smaller screens. There's also some minor styling issues I'd like to solve, such as the horizontal lines under section headers just being arbritary lengths and background gradients in darkmode being way too jarring.</p>
                        </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="summary"><h3 class="h3">A blog</h3></svelte:fragment>
                        <svelte:fragment slot="content">
                            <p>I'll be adding a blog to the site that I will occasionally write on. I'm aiming allow blog posts to be written & edited on-site with Markdown via <a href="https://mdsvex.com/" target="_blank"><strong>mdsvex</strong></a>.</p>
                        </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="summary"><h3 class="h3">The backend</h3></svelte:fragment>
                        <svelte:fragment slot="content">
                            <p>To support the blog and other features I'll eventually add or other projects I'll host on here in the future, I'll be writing the backend in Rust using <a href="https://tokio.rs/" target="_blank"><strong>Tokio</strong></a>.</p>
                        </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="summary"><h3 class="h3">Themes</h3></svelte:fragment>
                        <svelte:fragment slot="content">
                            <p>No matter what the software is, I'm always a huge fan of themes. As such, I want to support more themes both dark & light on here.</p>
                        </svelte:fragment>
                    </AccordionItem>
                </Accordion>
            {:else if selectedItem === 'faf'}
                <Accordion autocollapse class="card p-4 text-token col-span-1 w-full h-full">
                    <AccordionItem open>
                        <svelte:fragment slot="summary"><h3 class="h3">Current Client</h3></svelte:fragment>
                        <svelte:fragment slot="content">
                            <p>The current <a href="https://github.com/FAForever/downlords-faf-client" target="_blank"><strong>FAF Client</strong></a> is written in Java. It's still maintained and updated by some of the community members. That said, it's not without it's problems. It can be slow, cumbersome, unresponsive, and just unpleasant to use at times. I've wanted to build a application with AvaloniaUI, and so I decided on attempting to make a new client for the FAF community.</p>
                        </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="summary"><h3 class="h3">Challenges</h3></svelte:fragment>
                        <svelte:fragment slot="content">
                            <p>Rebuilding a decades old client in another framework and language is certainly challenging, especially when you're not familiar with the original codebase. On top of that, FAF's <a href="https://github.com/FAForever/downlords-faf-client/wiki/Application-Design" target="_blank"><strong>infrastructure</strong></a> isn't very straightforward. I have a lot to learn in order to accomplish what I want to.</p>
                        </svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="summary"><h3 class="h3">Why AvaloniaUI?</h3></svelte:fragment>
                        <svelte:fragment slot="content">
                            <p>Most of my experience with desktop application development is in WPF. While I could create the client in WPF, I stumbled upon <a href="https://avaloniaui.net/" target="_blank"><strong>AvaloniaUI</strong></a> some time ago and have been wanting to use it. It's essentially a more modern, performant, and open-source WPF. WPF apps can even be ported to it.</p>
                        </svelte:fragment>
                    </AccordionItem>
                </Accordion>
            {:else if selectedItem === 'microbit'}
            {:else if selectedItem === 'data'}
            {/if}
        </div>
    </div>
    
    
</div>