<template>
  <v-app-bar app dark color="primary">
    <v-row no-gutters class="align-center">
      <v-col class="shrink">
        <v-img
          alt="Witcher logo"
          src="../assets/logo.png"
          contain
          width="120"
        />
      </v-col>
      <h2 class="pl-5 hidden-sm-and-down">Witcher character sheet</h2>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>
