<template>
  <div class="row" v-if="othersImages">
      <div id="others-images" class="card-columns">
          <div class="card other" v-for="image in othersImages" v-bind:key="image.id">
              <picture v-bind:id="'image' + image.id">
                  <img v-bind:src="image.Image"  v-bind:alt="image.description"/>
              </picture>
              <h5>{{ image.name }}</h5>
              <p>{{ image.description }}</p>
          </div>
          <div class="clearfix"></div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      othersImages: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created () {
    axios.get('http://localhost:8080/octobercms/api/v1/getimages')
      .then(response => {
      // JSON responses are automatically parsed.
        this.othersImages = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}

</script>
