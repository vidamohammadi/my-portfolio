<script setup>
  import {useVuelidate} from '@vuelidate/core';
  import {required, minLength, email} from '@vuelidate/validators';
  import emailjs from 'emailjs-com';

  const name = ref('');
  const emailValue = ref('');
  const message = ref('');
  const rules = computed(() => ({
    name: {required, minLength: minLength(3)},
    emailValue: {required, email},
    message: {required}
  }));

  const v$ = useVuelidate(rules, {name, emailValue, message});
  const submit = async () => {
    const isValid = await v$.value.$validate();
    if (!isValid) return;
    try {
      await emailjs.send(
        'service_6mlcesv',
        'template_pg5kq2l',
        {
          from_name: name.value,
          from_email: emailValue.value,
          message: message.value
        },
        'GqLnt1Q_xkSuBVyau'
      );
      name.value = '';
      emailValue.value = '';
      message.value = '';
      v$.value.$reset();
    } catch (error) {
      console.error(error);
    }
  };
</script>
<template>
  <v-container>
    <section id="contact-section">
      <v-card elevation="2" class="pa-6">
        <v-card-title class="text-h5">Get in Touch</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <v-text-field
              label="Name"
              v-model="name"
              :error-messages="v$.name.$errors.map(e => e.$message)"
              :error="v$.name.$error"></v-text-field>
            <v-text-field
              label="Email"
              v-model="emailValue"
              :error-messages="v$.emailValue.$errors.map(e => e.$message)"
              :error="v$.emailValue.$error"></v-text-field>
            <v-text-field
              label="message"
              v-model="message"
              :error-messages="v$.message.$errors.map(e => e.$message)"
              :error="v$.message.$error"></v-text-field>
            <v-btn type="submit" color="primary" class="mt-3">send</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </section>
  </v-container>
</template>
<style scoped>
  #contact-section {
    scroll-margin-top: 100px;
  }
</style>
