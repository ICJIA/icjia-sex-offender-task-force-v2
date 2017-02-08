<template>
  <div id="myFoot">
    <!-- TEMPLATE START -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="footer-text">© {{getFullYear()}} <a href="">Illinois Criminal Justice Information Authority</a> | <a href="">Join the Task Force Mailing List</a> | <a href="https://github.com/cschweda/icjia-sex-offender-task-force">View on GitHub</a></div>
        </div>
      </div>

    </footer>
  </div>
</template>

<script>

export default {

  components: {

  },
  name: 'Footer',
  methods: {

      getFullYear: function () {
        var today = new Date();
        return today.getFullYear();
      }

  },
  data () {
    return {

    }
  }
}
</script>


<style scoped>
a {color: #ccc}
footer {padding-top: 30px; padding-bottom: 30px; background-color: #333; color: #aaa;}
.footer-text {text-align:center; width:100%; font-size:12px;}


</style>
