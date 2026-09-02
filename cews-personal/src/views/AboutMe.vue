<template>
  <div class="about">
    <h1 class="about__heading">About</h1>

    <div class="about__body">
        <p class="lede">
          I'm a software engineer. I'm most useful early, when a problem is still
          vague and someone has to decide what is actually worth building.
        </p>

        <p>
          From 2019 to 2024 I was at JumpCloud on the Growth team, where I built
          the monetization surface of the platform — the paths people take from
          trying the product to paying for it. Before that, 2017 to 2019 at
          Crownpeak, building features for an enterprise CMS. I've since been making my
          own things: a podcast discussion platform, a Chrome extension, a couple
          of games in Godot, and most recently an SMS tool for organizing messages.
        </p>

        <p>
          If you're building something, I'd like to hear about it.
          <router-link to="/contact">Get in touch</router-link>.
        </p>
    </div>
  </div>
</template>

<style scoped>
.about__heading {
  font-size: var(--step-3);
  margin-bottom: var(--gap-l);
}

/* No photo: hold the prose to a readable measure so it does not
   run the full width of the shell. */
.about__body { max-width: var(--measure); }
</style>
