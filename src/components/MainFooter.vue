<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const currentYear = new Date().getFullYear();

const { t } = useI18n();
const companyName = ref(t('facts.companyName'));
</script>

<template>
  <footer id="main-footer">
    <div class="footer-content">
      <div class="footer-section contact">
        <h2>{{ t('footer.contact.header') }}</h2>

        <p>
          <span class="phone"> {{ t('footer.contact.text2') }} &nbsp;</span>
          <a :href="`tel:${t('facts.phone')}`" class="number">
            {{ t('facts.phone') }}</a
          >
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>{{ t('footer.bottom', { currentYear, companyName }) }}</p>
    </div>
  </footer>
</template>

<style scoped>
#main-footer {
  background-color: var(--color-1);
  color: #fff;
  width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.footer-content {
  width: clamp(300px, 80vw, 1200px);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 1rem;
}

.footer-section {
  flex: 1;
  margin-bottom: 2rem;
}

.footer-section h2 {
  color: #fff;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li,
.footer-section p,
.footer-bottom p {
  margin-bottom: 0.5rem;
}

.links,
.contact {
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.phone {
  font-weight: bold;
}

.number {
  color: #fff;
}

.footer-bottom {
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid #000;
  width: 100%;
}

@media only screen and (max-width: 900px) {
  #main-footer .footer-content {
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
