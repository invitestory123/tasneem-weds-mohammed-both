# Customer Editing Guide — Tasneem & Mohammed Darees & Reception Invitation

Gilded palace hall wedding celebration invitation featuring an animated tap-to-open cover, rain-of-light particle animations, multi-event itinerary (Darees Mubarak & Wedding Reception), multi-venue interactive Google Maps embeds, synchronized calendar export (.ics for both events), and background music ("Mast Magan" Instrumental).

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### 1. Couple Names & Header
Edit in `editable/wedding-data.js`:
- `bride`: Bride's first name (`"Tasneem"`)
- `groom`: Groom's first name (`"Mohammed"`)
- `kicker`: Event banner kicker (`"Darees & Reception"`)
- `invitationLine`: Formal invitation line above names
- `closing`: Signoff message at the bottom

### 2. Dates & Countdown
Edit in `editable/wedding-data.js`:
- `dateLabel`: Formatted dates string (`"September 25 & 26, 2027"`)
- `shortDate`: Compact date display (`"25 & 26 . 09 . 2027"`)
- `countdownTarget`: ISO date-time string (`"2027-09-25T19:00:00-04:00"`), drives live countdown timer & `.ics` calendar generation
- `countdownLabel`: Label for the countdown (`"Until the Celebrations"`)

### 3. Blessings & Story
Edit `story` array in `editable/wedding-data.js`:
- Array of narrative paragraphs detailing prayers, gratitude, and welcome words.

### 4. Itinerary & Events
Edit `events` array in `editable/wedding-data.js`:
- **Event 1 (Darees)**:
  - `name`: Event name (`"Darees"`)
  - `date`: Event date (`"Saturday, 25 September 2027"`)
  - `time`: Event time (`"7:00 PM"`)
  - `venue`: `"Dawoodi Bohra Al Masjid Al Saifee Anjuman-e-Burhani (Toronto)\n8929 Bayview Ave, Richmond Hill, ON L4B 4W4"`
  - `note`: `"Darees Mubarak followed by Khushi nu Jaman & blessings."`
- **Event 2 (Reception)**:
  - `name`: Event name (`"Reception"`)
  - `date`: Event date (`"Sunday, 26 September 2027"`)
  - `time`: Event time (`"7:00 PM – 1:00 AM"`)
  - `venue`: `"Terrace Event Venue\n1680 Creditstone Rd, Concord, ON L4K 5T4"`
  - `note`: `"Cocktails, dinner & celebrations to honor the newlyweds."`

### 5. Venues & Maps
Edit `venues` array in `editable/wedding-data.js`:
- **Darees Venue**:
  - `name`: `"Dawoodi Bohra Al Masjid Al Saifee Anjuman-e-Burhani (Toronto)"`
  - `address`: `"8929 Bayview Ave, Richmond Hill, ON L4B 4W4, Canada"`
  - `hint`: `"Richmond Hill, Ontario (Greater Toronto Area)"`
  - `mapsUrl`: Google Maps link
  - `mapEmbed`: Google Maps iframe embed URL
- **Reception Venue**:
  - `name`: `"Terrace Event Venue"`
  - `address`: `"1680 Creditstone Rd, Concord, ON L4K 5T4, Canada"`
  - `hint`: `"Concord, Vaughan (Greater Toronto Area)"`
  - `mapsUrl`: `https://maps.google.com/maps/place//data=!4m2!3m1!1s0x882b2f25e738e6e5:0xe217a27ca70e02c2?entry=s&sa=X&ved=2ahUKEwjVkvWJhqaXAxX_HYYAHTmkMXgQ4kB6BAgZEAA&hl=en`
  - `mapEmbed`: `https://www.google.com/maps?q=1680+Creditstone+Rd,+Concord,+ON+L4K+5T4&output=embed`

### 6. RSVP & Guest Responses
Configured in `editable/wedding-data.js`:
- `rsvp.email`: Target email for RSVP notifications (`"Modada1523@gmail.com"`)
- `rsvp.whatsapp`: Target WhatsApp number to receive direct messages (`"+16478247786"`)
- `rsvp.heading`: Section title (`"RSVP"`)
- `rsvp.subheading`: Welcoming guidance for guests
- `rsvp.deadline`: Date by which to reply (`"Saturday, September 11, 2027"`)

#### For Guests:
Guests submit their RSVP via **WhatsApp** (sent directly to `+16478247786`) or **Email** (sent to `Modada1523@gmail.com`), entering their Full Name, Email Address, Attendance, and Guest Count. Messages automatically include full itinerary and venue details for both **Darees Mubarak** (Sept 25, Richmond Hill) and **Wedding Reception** (Sept 26, Terrace Event Venue, Concord).

#### For the Client (Private Host Portal):
The client/host can access the private Host Portal by opening the link with `?admin=true` (e.g. `https://.../?admin=true#rsvp`) or clicking the discreet "Host Portal" link in the footer:
- **Download Master Excel Sheet (.csv / .xlsx)**: Exports all recorded guest submissions into an Excel-formatted spreadsheet.
- **Copy All Guest Emails**: Copies all submitted guest emails into clipboard so the client can paste into Gmail's BCC field.
- **Compose Reminder Email Blast**: 1-click button that opens the client's email app with all guest emails in BCC and a pre-composed celebrations reminder message ready to send!
- In addition, all email RSVPs are delivered directly to **`Modada1523@gmail.com`** in real time as guests submit.

### 7. Media & Music
Replace files in `editable/assets/` or update paths in `wedding-data.js`:
- `audio`: Background music (`mast-magan-instrumental.mp3`)
- `songTitle`: Song title (`"Mast Magan (Instrumental)"`)
- `playAfterWords`: Set to `true` to play background music right after the first verse of the words appears on screen
- `cover`: Envelope cover illustration (`cover.png`)
- `introVideo`: Entrance opening animation (`intro.mp4`)
- `coupleVideo`: Couple loop video (`couple.mp4`)
- `hall`: Hall background architecture (`hall.png`)
- `petals`, `divider`, `floral`: Decorative ornaments

---

## Verification
Verify syntax with `node --check editable/wedding-data.js`.
