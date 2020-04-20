<template>
  <div>
    <banner label="Registration" on="Registration"></banner>
    <section class="container guidelines-text">
          <div class="mb20 fs26 color-014c85">Registration Fees</div>
            <table border="1" class="registrantion-table mb25">
              <tr>
                <td>Items</td>
                <td>Registration fee</td>
              </tr>
              <tr>
                <td>Regular Registration (7 pages)</td>
                <td>500 USD per paper</td>
              </tr>
              <tr>
                <td>Extra Pages (Begin at Page 8)</td>
                <td>50 USD per page</td>
              </tr>
              <tr>
                <td>Attendees without Full Papers</td>
                <td>300 USD per person</td>
              </tr>
            </table>

            <p class="b mb5">Details of the Registration Fees</p>
            <p class="mb10">1.	Standard registration fee with a full paper is USD 500. If the length of the paper exceeds 7 pages, the cost of each extra page (begin at Page 8) is 50 USD.</p>
            <p class="mb10">2.	Registration fee includes conference proceedings publication, lunches, dinners, gifts and attending all technical sessions.</p>
            <p class="mb10">3.	The registration fee does not include:</p>

            <ul class="registration-list">
                <li>Accommodation fee</li>
                <li>Visa application fee</li>
                <li>Transportation fee</li>
            </ul>
            
            
            <p class="mb10">4.	Once the payment is made, please send the payment proof to the Organizing Committee at becbinfo@163.com for confirmation and further arrangements. </p>
            <p class="mb10">5.	If you cannot attend the conference due to some reasons, please let us know in advance and the full paper can also be published and indexed as normal. </p>
            
            <br>
            <p class="b mb5">Payment Methods</p>
            <p class="mb10">Please contact the Organizing Committee at <a href="becbinfo@163.com" target="_blank">becbinfo@163.com</a> for details. </p>
        </section>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.registrantion-table {
  text-align: center;
}
.registrantion-table td {
  padding: 5px 0;
}
.registration-list {
    margin-left: 50px;
    margin-bottom: 20px;
}
.registration-list li {
    list-style: square;
    line-height: 30px;
}
</style>
