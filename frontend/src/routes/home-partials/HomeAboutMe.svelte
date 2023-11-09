<script>
    import {Avatar} from '@skeletonlabs/skeleton'
</script>

<div class="grid space-y-4 grid-cols-1 place-items-center">
    <h2 class="h2">About me</h2>
    <hr class="w-1/5 h-1 bg-primary-100 rounded">
    <div class="flex space-x-10">
        <Avatar src="/avatar.jpg" initials="SC" class="w-96 h-96"/>
        <div class="max-w-prose mx-6">
            <h3 class="h3 font-semibold">Hi, I'm Sal!</h3>
            <p>I'm a deeply curious person that likes to keep things simple. I enjoy building stuff, and keeping up with the latest technology and methodologies. Which explains why I'm building this site with SvelteKit & Rust. I'm always looking for a challenge and to improve my abilities or learn new ones. I believe the most important aspect of being a Software Engineer is knowing how to ask the right questions to find the right answers. If you can do that, you can build anything.</p>
            <p class="py-4">Check out my <a href="#projects"><strong>current projects</strong></a> down below!</p>
        </div>
        <div class="max-w-prose mx-6">
            <h3 class="h4 font-semibold">Personal Interests</h3>
            <p>Of course, outside of tech I also enjoy spending time on my other hobbies:</p>
            <ul class="list-disc list-inside pl-4 py-2">
                <li>Staying active with rock climbing, hot yoga, and jiu jitsu</li>
                <li>Collecting & reading too many books</li>
                <li>Improving my Spanish</li>
                <li>Designing & building new planters for my garden</li>
            </ul>
        </div>
    </div>
</div>