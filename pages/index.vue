<template>
  <v-layout fill-height>
    <v-container style="margin-top: -80px">
      <home-message id="home" />
      <about-me id="about" />
      <my-skills id="skills" />
      <my-experience id="experience" />
      <my-projects id="projects" />
      <my-contact id="contact" />
    </v-container>
  </v-layout>
</template>

<script>
import HomeMessage from '~/components/HomeMessage.vue'
import AboutMe from '~/components/AboutMe.vue'
import MySkills from '~/components/MySkills.vue'
import MyExperience from '~/components/MyExperience.vue'
import MyProjects from '~/components/MyProjects.vue'
import MyContact from '~/components/MyContact.vue'

export default {
  name: 'HomePage',
  components: { HomeMessage, AboutMe, MySkills, MyExperience, MyProjects, MyContact }
}
</script>
