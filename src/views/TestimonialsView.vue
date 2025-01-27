<script setup>
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO, Company',
    image:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
    quote: 'This is an amazing product! It has changed my life for the better.',
  },
  {
    id: 2,
    name: 'Jane Smithsonian',
    position: 'CTO, Another Company',
    image:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
    quote: 'I love using this product. It has made my work so much easier.',
  },
  {
    id: 3,
    name: 'Sammy Wilson',
    position: 'Developer, Tech Company',
    image:
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
    quote: 'A must-have tool for any professional. Highly recommended!',
  },
];
</script>

<template>
  <div id="testimonials-section">
    <div class="component-container">
      <div class="header">
        <h2>Customer Reviews</h2>
        <p>What our customers are saying</p>
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
              <p class="testimonial-position">{{ testimonial.position }}</p>
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
  background-color: #f7fafc;
  /* padding: 3rem 0; */
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

/* .header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
} */

/* .header p {
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: 800;
  color: #2d3748;
} */

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.testimonial-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.testimonial-header {
  display: flex;
  align-items: center;
}

.testimonial-image {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-info {
  margin-left: 1rem;
}

.testimonial-name {
  font-size: 1.125rem;
  font-weight: 500;
  color: #2d3748;
}

.testimonial-position {
  font-size: 0.875rem;
  color: #718096;
}

.testimonial-quote {
  margin-top: 1rem;
  font-size: 1rem;
  color: #4a5568;
}
</style>
