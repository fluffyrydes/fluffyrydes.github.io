

<template>
  <div class="home">

      <menus class="site-header" showTitle="true" />

  <section class="home-about">
    <div class="row column large-9 xlarge-6 xxlarge-4">
      <h2 class="section-title">Departures near you</h2>
      <itinerary></itinerary>
    </div>

    <div class="row column large-9 xlarge-6 xxlarge-4">
      <h2 class="section-title">How Does This Work?</h2>
      <p class="content">
        In today’s fast paced world, you’ve got places you need to be but not enough time in your jam packed schedule.
        Wouldn’t it be nice if there were a transportation service that changed the way you get around daily?
        Introducing Fluffy Rydes, an innovative transportation service that helps people get to their destination faster and hassle-free.
        <span style="color: deepskyblue; font-weight: bold">
          Getting started is as easy as entering a meeting ID into one of the departure inputs above.
          If your ID is correct a link to unlock your unicorn will magically appear.
        </span>
      </p>
    </div>

    <div class="row medium-up-3 large-up-3">
      <div class="column">
        <div class="home-about-block">
          <h3 class="title icon-unicorn">Request A Unicorn</h3>
          <p class="content">We can get you there. Simply request a ryde on the app and we'll connect you with a unicorn immediately.</p>
        </div>
      </div>

      <div class="column">
        <div class="home-about-block">
          <h3 class="title icon-price">Pick A Price</h3>
          <p class="content">Pick the valuation you're willing to pay and your ryde is set up. The only surge is the acceleration you get when taking off.</p>
        </div>
      </div>

      <div class="column">
        <div class="home-about-block">
          <h3 class="title icon-success">Ride Off To Success!</h3>
          <p class="content">After matching with your unicorn and agreeing to its terms, you’ll be all set. Your unicorn will arrive shortly to pick you up.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="home-story">
    <div class="row column large-9 xlarge-6 xxlarge-4">
      <h2 class="section-title">Our Story</h2>
      <p class="content">
        Fluffy Rydes was started by a former hedge fund analyst and a software developer. The two long-time friends happened upon the Fluffy Rydes idea after attending a silent yoga retreat in Nevada. After gazing upon the majestic herds of unicorns prancing across a surreal Nevada sunset, they witnessed firsthand the poverty and unemployment endemic to that once proud race. Whether it was modern society’s reliance on science over magic or not, we’ll never know the cause of their Ozymandian downfall and fade to obscurity. Moved by empathy, romance, and free enterprise, they saw an opportunity to marry society’s demand for faster, more flexible transportation to underutilized beasts of labor through an on-demand market making transportation app. Using the founders’ respective expertise in animal husbandry and software engineering, Fluffy Rydes was formed and has since raised untold amounts of venture capital. Today, Fluffy Rydes has thousands of unicorns in its network fulfilling hundreds of rydes each day.
      </p>
    </div>
  </section>

  <section class="home-sign-up">
    <div class="row column">
      <img class="icon-w" src="images/wr-home-f.png">

      <form onsubmit="void(0);">
        <input type="email" placeholder="Enter your email address">
        <button type="button">Submit</button>
      </form>

      <h2 class="section-title">Sign Up</h2>

      <p class="content">Fluffy news are coming soon! Enter your email to be the first to know about new features</p>

      <div class="social">
        <a class="icon-fb" href="">Facebook</a>
        <a class="icon-tw" href="">Twitter</a>
        <a class="icon-ig" href="">Instagram</a>
        <a class="icon-wc" href="">Wechat</a>
        <a class="icon-wb" href="">Weibo</a>
      </div>
    </div>
  </section>

  <section class="home-quote">
    <div class="row column medium-8 xxlarge-6">
      <div class="quote-wrap">
        <div class="quote">
          “I was almost late to my ultimate frisbee tournament in DOLORES park. But Fluffy Rydes Got me there from the marina in under five minutes.”
        </div>
        <div class="quoter">- Satisfied Fluffy Rydes User</div>
      </div>
    </div>
  </section>

  <section class="kraken-callout">
    <div class="row">
      <div class="columns medium-6 xxlarge-4 xxlarge-offset-2">
        <img src="images/wr-home-kraken.png">
      </div>

      <div class="columns medium-6 xlarge-5 xxlarge-4">
        <h4 class="title">Coming Soon</h4>
        <p class="content">
          Kraken 3xplorer and Dragon Flyght. We’re looking to provide you a full service package from air, land, and to sea.
        </p>
      </div>
    </div>
  </section>


    <footers />
  </div>
</template>

<script>
// @ is an alias to /src
import footers from '@/components/footer.vue'
import menu from '@/components/menu.vue'
import itinerary from "@/components/itinerary";

export default {
  name: 'home',
  components: {
    footers: footers,
    menus: menu,
    itinerary
  },
}

</script>
