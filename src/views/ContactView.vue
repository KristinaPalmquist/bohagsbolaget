<script setup>

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// const name = ref('');
// const email = ref('');
// const subject = ref('');
// const message = ref('');
// const formContent = ref({
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
// });

// const showSentMessage = ref(false);

// const handleSubmit = () => {
//   formContent.value = {
//     [t('contact.name')]: name.value,
//     [t('contact.email')]: email.value,
//     [t('contact.subject')]: subject.value,
//     [t('contact.message')]: message.value,
//   };
//   console.log(formContent.value);
//   showSentMessage.value = true;
//   clearForm();
// };

// const clearForm = () => {
//   name.value = '';
//   email.value = '';
//   subject.value = '';
//   message.value = '';
// };
</script>

<template>
  <div id="contact-us">
    <div class="component-container">
      <h1 class="header">{{ t('contact.header') }}</h1>
      <p class="text">{{ t('contact.text') }}</p>
      <p class="phone">{{ t('contact.tel') }}: {{ t('facts.phone') }}</p>
    </div>
  </div>

</template>

<style scoped>


#contact-us {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header,
.phone {
  text-align: center;
}

.text {
  margin-top: 1rem;
}




/* @media only screen and (max-width: 740px) {
  #contact-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;
  }

  /* .contact-messages > div {
    gap: 5rem;
  } */
  .btn-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: max-content;
  }
  .message-item {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
    gap: 0.3rem;
  }
} */
</style>
