<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div id="contact-us">
    <div class="contact-content component-container">
      <div class="text-div">
        <h1 class="header">{{ t('contact.header') }}</h1>
        <p class="text">{{ t('contact.text') }}</p>
        <p class="phone">{{ t('contact.tel') }}: {{ t('facts.phone') }}</p>
      </div>
      <div class="image-div">
        <img src="../assets/img/retrophone.jpg" alt="contact" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#contact-us {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5vw;
  margin: 4vw 0;
}

.text-div {
  flex: 2;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.header,
.text,
.phone {
  text-align: center;
  padding: 0;
  margin: 0;
}

.image-div {
  flex: 1;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: auto;
}

.image-div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

@media only screen and (max-width: 740px) {
  .image-div {
    width: 50%;
    height: 50%;
    margin-bottom: 4vw;
  }
  .contact-content {
    flex-direction: column;
  }
  .text-div {
    gap: 2rem;
  }
}
</style>
