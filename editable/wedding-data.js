/**
 * wedding-data.js — Customer-facing editable data layer for Darees & Reception Invitation
 * Couple: Tasneem & Mohammed
 * Events: Darees Mubarak (Sept 25, 2027) & Wedding Reception (Sept 26, 2027)
 * Music: Mast Magan (Instrumental)
 */

window.WEDDING_DATA = {
  bride: "Tasneem",
  groom: "Mohammed",
  kicker: "Darees & Reception",
  invitationLine: "Together with their families, cordially invite you to celebrate the Darees Mubarak & Wedding Reception of",
  dateLabel: "September 25 & 26, 2027",
  shortDate: "25 & 26 . 09 . 2027",
  countdownTarget: "2027-09-25T19:00:00-04:00",
  countdownLabel: "Until the Celebrations",

  storyKicker: "Bismillah hir-Rahman nir-Rahim",
  storyTitle: "A Sacred Journey & Joyous Celebrations",
  story: [
    "With the benevolence of the Almighty Allah Subhanahu wa Ta'ala and the blessings of our loving families, we cordially invite you to celebrate the auspicious Darees Mubarak and joyous Wedding Reception of Tasneem & Mohammed.",
    "Your esteemed presence, warmth, and heartfelt prayers will grace our celebrations with barakah and joy as we cherish these unforgettable milestones together.",
  ],

  eventsKicker: "Auspicious Gathering",
  eventsTitle: "Darees & Reception",
  eventsSubtitle: "A weekend of sacred prayers, Khushi nu Jaman, and celebratory reception.",

  events: [
    {
      name: "Darees",
      date: "Saturday, 25 September 2027",
      time: "7:00 PM",
      venue: "Dawoodi Bohra Al Masjid Al Saifee Anjuman-e-Burhani (Toronto)\n8929 Bayview Ave, Richmond Hill, ON L4B 4W4",
      note: "Darees Mubarak followed by Khushi nu Jaman & blessings.",
    },
    {
      name: "Reception",
      date: "Sunday, 26 September 2027",
      time: "7:00 PM – 1:00 AM",
      venue: "Terrace Event Venue\n1680 Creditstone Rd, Concord, ON L4K 5T4",
      note: "Cocktails, dinner & celebrations to honor the newlyweds.",
    },
  ],

  venues: [
    {
      event: "Darees",
      name: "Dawoodi Bohra Al Masjid Al Saifee Anjuman-e-Burhani (Toronto)",
      address: "8929 Bayview Ave, Richmond Hill, ON L4B 4W4, Canada",
      hint: "Richmond Hill, Ontario (Greater Toronto Area)",
      mapsUrl: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x882b2b134584162d:0x626df4acd8863f41?entry=s&sa=X&ved=2ahUKEwjX0_KwwaCXAxVgw_ACHbqlEvYQ4kB6BAgDEAA&hl=en",
      mapEmbed: "https://www.google.com/maps?q=8929+Bayview+Ave,+Richmond+Hill,+ON+L4B+4W4&output=embed",
    },
    {
      event: "Reception",
      name: "Terrace Event Venue",
      address: "1680 Creditstone Rd, Concord, ON L4K 5T4, Canada",
      hint: "Concord, Vaughan (Greater Toronto Area)",
      mapsUrl: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x882b2f25e738e6e5:0xe217a27ca70e02c2?entry=s&sa=X&ved=2ahUKEwjVkvWJhqaXAxX_HYYAHTmkMXgQ4kB6BAgZEAA&hl=en",
      mapEmbed: "https://www.google.com/maps?q=1680+Creditstone+Rd,+Concord,+ON+L4K+5T4&output=embed",
    },
  ],

  venue: {
    name: "Dawoodi Bohra Al Masjid Al Saifee Anjuman-e-Burhani (Toronto)",
    address: "8929 Bayview Ave, Richmond Hill, ON L4B 4W4, Canada",
    hint: "Richmond Hill, Ontario (Greater Toronto Area)",
    mapsUrl: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x882b2b134584162d:0x626df4acd8863f41?entry=s&sa=X&ved=2ahUKEwjX0_KwwaCXAxVgw_ACHbqlEvYQ4kB6BAgDEAA&hl=en",
    mapEmbed: "https://www.google.com/maps?q=8929+Bayview+Ave,+Richmond+Hill,+ON+L4B+4W4&output=embed",
  },

  rsvp: {
    email: "Modada1523@gmail.com",
    whatsapp: "+16478247786",
    heading: "RSVP",
    subheading: "Kindly respond to honour us with your presence at the Darees Mubarak & Wedding Reception",
    deadline: "Saturday, September 11, 2027",
  },

  closing: "With prayers, love, and gratitude, we eagerly await your presence.",

  media: {
    petals: "./editable/assets/petals.png",
    hall: "./editable/assets/hall.png",
    cover: "./editable/assets/cover.png",
    introVideo: "./editable/assets/intro.mp4",
    coupleVideo: "./editable/assets/couple.mp4",
    divider: "./editable/assets/divider.png",
    floral: "./editable/assets/floral.png",
    audio: "./editable/assets/mast-magan-instrumental.mp3",
    songTitle: "Mast Magan (Instrumental)",
    playAfterWords: true,
  },
};
