<script setup>
const testimonials = [
  {
    id: 1,
    name: 'Kenny Johnson',
    city: 'Sundbyberg',
    image: new URL('@/assets/img/customers/kenny.jpg', import.meta.url).href,
    quote:
      'Underbart att få så proffsig hjälp när jag behövde tömma ett helt hus.',
  },
  {
    id: 2,
    name: 'Alina Smith',
    city: 'Huddinge',
    image: new URL('@/assets/img/customers/alina.jpg', import.meta.url).href,
    quote:
      'Jag skulle anlita Bohagsbolaget igen vilken dag i veckan som helst.',
  },
  {
    id: 3,
    name: 'Alex Thompson',
    city: 'Stockholm',
    image: new URL('@/assets/img/customers/alex.jpg', import.meta.url).href,
    quote:
      'När morsan gick bort orkade jag inte ta itu med allt det praktiska och var glad att jag hittade Bohagsbolaget!',
  },
];
</script>

<template>
  <div id="testimonials-section">
    <div class="component-container">
      <div class="header">
        <h2>Kundomdömen</h2>
        <p>Vad några av våra kunder säger</p>
      </div>
      <div class="testimonials-grid">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="testimonial-card"
        >
          <div class="testimonial-header">
            <img :src="testimonial.image" alt="" class="testimonial-image" />
            <div class="testimonial-info">
              <p class="testimonial-name">{{ testimonial.name }}</p>
              <p class="testimonial-city">{{ testimonial.city }}</p>
            </div>
          </div>
          <p class="testimonial-quote">{{ testimonial.quote }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#testimonials-section {
  background-color: var(--pink);
  padding: 1rem 0;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3vw;
}

.testimonial-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-image {
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: 1/1;
}

.testimonial-info {
  margin-left: 1rem;
}

.testimonial-name {
  font-size: 1.125rem;
  font-weight: 500;
  color: #2d3748;
  margin-bottom: 0;
}

.testimonial-city {
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 0;
}

.testimonial-quote {
  margin-top: 1rem;
  font-size: 1rem;
  color: #4a5568;
}
</style>
