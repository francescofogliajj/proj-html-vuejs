var app = new Vue({

  el: "#app",

  data: {

    headerLinksLeft: [

      { class: "fas fa-clock", name: "Open Hours: Mon - Sat - 9:00 - 18:00", url: "#" }

    ],

    headerLinksRight: [

      { class: "fas fa-phone-alt", name: "+1 (305) 1234-5678", url: "#" },
      { class: "fas fa-envelope", name: "hello@example.com", url: "#" },
      { class: "fab fa-facebook-f", name: "", url: "#" },
      { class: "fab fa-twitter", name: "", url: "#" },
      { class: "fab fa-linkedin-in", name: "", url: "#" }

    ],

    navLinks: [

      { class: "", name: "Home", url: "#" },
      { class: "", name: "About", url: "#" },
      { class: "", name: "Services", url: "#" },
      { class: "", name: "Process", url: "#" },
      { class: "", name: "Testimonials", url: "#" },
      { class: "far fa-user", name: "", url: "#" },
      { class: "", name: "Get in Touch", url: "#" }

    ],

    footerLinksCol: [

      { class: "fas fa-phone-alt", name: "+1 (305) 1234-5678", url: "#" },
      { class: "fas fa-envelope", name: "hello@example.com", url: "#" },
      { class: "fas fa-map-marker-alt", name: "Main Avenue, 987", url: "#" },
      { class: "", name: "Get in Touch", url: "#" }

    ],

    footerLinksCards: [

      {
        title: "About",
        links: [
          { name: "The Company", url: "#" },
          { name: "Institutional", url: "#" },
          { name: "Social & Events", url: "#" },
          { name: "Innovation", url: "#" },
          { name: "Environment", url: "#" },
          { name: "Technology", url: "#" }
        ]
      },

      {
        title: "Transport",
        links: [
          { name: "Industrialized", url: "#" },
          { name: "Chemicals", url: "#" },
          { name: "Packaged Liquids", url: "#" },
          { name: "Construction", url: "#" },
          { name: "Laminated Wood", url: "#" },
          { name: "And others", url: "#" }
        ]
      },

      {
        title: "Support",
        links: [
          { name: "Responsibility", url: "#" },
          { name: "Terms of Use", url: "#" },
          { name: "About Cookies", url: "#" },
          { name: "Privacy Policy", url: "#" },
          { name: "Accessibility", url: "#" },
          { name: "Information", url: "#" }
        ]
      }

    ]

  },

});
