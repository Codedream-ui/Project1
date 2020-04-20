<template>
  <div>
    <banner label="Conference Agenda" on="Conference Agenda"></banner>
    <section class="container guidelines-text">
          <div class="mb20 fs26 color-014c85">Brief Program</div>
            <div class="mb10">2021 International Symposium on Biomedical Engineering and Computational Biology (BECB 2021) will be held in Beijing, China from August 11th to 13th, 2021. </div>
            
            <table border="1" class="agenda-table">
              <tr>
                <td colspan="3">Schedule</td>
              </tr>
              <tr>
                <td>August 11th, 2021 (Wednesday)</td>
                <td>09:00-17:00</td>
                <td>Registration</td>
              </tr>
              <tr>
                <td rowspan="3">August 12th, 2021 (Thusday)</td>
                <td>09:00-12:00</td>
                <td>Keynote Speeches & Poster Session </td>
              </tr>
              <tr>
                <!-- <td rowspan="3">December 7th, 2020 (Monday)</td> -->
                <td>12:00-14:00</td>
                <td>Lunch </td>
              </tr>
              <tr>
                <!-- <td rowspan="3">December 7th, 2020 (Monday)</td> -->
                <td>14:00-18:00</td>
                <td>Oral Presentations</td>
              </tr>
              <tr>
                <td>August 13th, 2021 (Friday)</td>
                <td>09:00-18:00</td>
                <td>Technical Investigation</td>
              </tr>
            </table>

            <div class="mb10">* The detailed program will be updated online one month before the conference starts.  </div>

            <p class="b mb5">Oral Presentation Instructions</p>
            <p class="mb10">1.	Timing: Duration of each oral presentation is 15 min, including speaking time and discussion. Please make sure your presentation is well timed.</p>
            <p class="mb10">2.	Please have your slide file (PPT or PDF) ready in a USB memory stick and copy the file to the computer in the corresponding session room 15 min before the session starts.</p>
            <p class="mb10">3.	Each session room will be equipped with a LCD projector, screen, laser pointer, microphone, and a laptop with general presentation software such as Microsoft PowerPoint and Adobe Reader. If you plan to use your own computer, please try the connection and make sure it works before your presentation. </p>
            
            <p class="b mb5">Poster Presentation Instructions</p>
            <p class="mb10">1.	Posters should be in A1 size (59.4 cm width * 84.1 cm length)</p>
            <p class="mb10">2.	Please make sure the poster is clear and easy to be understood, explanation with figures would be better. The characters should be large enough so that they are visible from 1 meter apart. </p>
            <p class="mb10">3.	During the presentation, the author should stand by your poster to explain and discuss your paper with visiting delegates.</p>

        </section>
  </div>
</template>

<script>
export default {
  name: 'Agenda',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.agenda-table {
  text-align: center;
}
.agenda-table td {
  padding: 5px 0;
}
</style>
