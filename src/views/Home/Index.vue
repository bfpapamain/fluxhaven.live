<script setup>
import { onMounted, ref, reactive } from 'vue'
import { featureList, howItWorkList, whyChooseList, faqList } from '@/models'

let hoverdLine = ref(0)
onMounted(() => {

})

const changeHoveredLine = (index) => {
  hoverdLine.value = index;
}
</script>

<template>
  <section class="main-hero hero section bg-transparent first-section d-block">
    <div class="col-12 col-lg-8 m-auto">
      <div class="container position-relative text-center mb-5" data-aos="fade-up" data-aos-delay="100">
        <div class="hero-text mb-5">
          <h2 class="ls-sm fw-bold text-white fs-40px mb-0">Unleash the Future of DeFi with</h2>
          <h2 class="ls-sm fw-bold text-white fs-40px">AI-Powered Automation</h2>
          <p class="w-100 text-white fw-normal fs-15px hero-desc ls-xs">Unleash the Power of Automated DeFi Protocols
            with AI Synergy Implement autonomous, self-executing smart contract strategies and amplify portfolio
            efficiency through cutting-edge, AI-enhanced automation solutions.</p>
        </div>
      </div>
      <div class="container bg-transparent pt-3">
        <div class="preview-img p-2">
          <img src="/assets/img/preview.png" />
        </div>
      </div>
    </div>
  </section>
  <section id="section-feature" class="section bg-transparent">
    <div class="col-12 col-lg-8 m-auto">
      <div class="container section-title pb-4">
        <h6 class="text-app text-capitalize ls-xs">KEY FEATURES</h6>
        <p class="text-light fw-normal fs-16px ls-xs">Unlock the Power of Innovation:</p>
        <p class="text-light fw-normal fs-16px ls-xs">Transformative Features for
          Smarter DeFi</p>
      </div>
      <div class="container">
        <div class="row gy-4 justify-content-center">
          <div v-for="(feature, idf) in featureList" :key="idf" class="col-lg-4" data-aos="fade-up"
            data-aos-delay="100">
            <div class="feature-item card rounded-sm feature-card h-100">
              <div class="card-body text-center">
                <div v-if="feature.icon" class="feature-icon mb-4">
                  <img :src="`/assets/img/${feature.icon}.png`" />
                </div>
                <div class="text-white fs-13px ls-xs fw-bold mb-2">{{ feature.title }}</div>
                <p class="text-light fw-300 fs-12px ls-xs m-0">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="section-has-bg">
    <div class="section-bg">
      <img src="/assets/img/bg-section.png" />
    </div>
    <section id="section-work" class="section bg-transparent">
      <div class="col-12 col-lg-10 m-auto">
        <div class="container section-title pb-4">
          <h6 class="text-app text-capitalize ls-xs">HOW IT WORKS?</h6>
          <p class="text-light fw-normal fs-16px ls-xs">Effortless Automation in Four Simple Steps:</p>
          <p class="text-light fw-normal fs-16px ls-xs">From Wallet Connection to Optimized Yield</p>
        </div>
        <div class="container">
          <div class="work-row row gy-4 justify-content-center">
            <div v-for="(work, idw) in howItWorkList" :key="idw" class="col-lg-3 p-0" data-aos="fade-right"
              data-aos-delay="100">
              <div class="work-item card rounded-sm h-100 bg-transparent">
                <div @mouseover="changeHoveredLine(idw)" @mouseout="changeHoveredLine(0)" class="card-body text-center px-0">
                  <div v-if="work.icon" class="feature-icon">
                    <img :src="`/assets/img/${work.icon}.png`" />
                  </div>
                  <div class="work-line py-3">
                    <div :class="{ 'has-line': work.line }" class="icon">
                      <span class="is-icon">
                        <i :class="[idw == hoverdLine ? 'bi-record-circle' : 'bi-circle']" class="bi"></i>
                      </span>
                    </div>
                  </div>
                  <div class="text-white fs-13px ls-xs fw-bold mb-2">{{ work.title }}</div>
                  <p class="text-light fw-300 fs-12px ls-xs m-0">{{ work.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-choose" class="section bg-transparent">
      <div class="col-12 col-lg-10 m-auto">
        <div class="container section-title pb-4">
          <div class="row align-items-baseline justify-content-between">
            <div class="col-12 col-lg-4 text-start">
              <h6 class="text-app text-capitalize ls-xs">WHY CHOOSE US?</h6>
              <p class="text-light fw-normal fs-16px ls-xs">Discover Unmatched Reliability: Innovation, Security,
                and
                Simplicity for Every DeFi User</p>
            </div>
            <div class="col-12 col-lg-6">
              <div class="row gy-4 justify-content-center">
                <div v-for="(choose, idc) in whyChooseList" :key="idc" class="col-lg-12" data-aos="fade-right"
                  data-aos-delay="100">
                  <div class="why-choose-item card rounded-sm feature-card">
                    <div class="card-body text-start">
                      <div v-if="choose.icon" class="feature-icon mb-4">
                        <img :src="`/assets/img/${choose.icon}.png`" />
                      </div>
                      <div class="text-white fs-13px ls-xs fw-bold mb-2">{{ choose.title }}</div>
                      <p class="text-light fw-300 fs-12px ls-xs m-0">{{ choose.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-faq" class="section bg-transparent">
      <div class="col-12 col-lg-8 m-auto">
        <div class="container section-title pb-4">
          <h6 class="text-app text-capitalize ls-xs">FAQ</h6>
          <p class="text-light fw-normal text-uppercase fs-16px ls-xs">FREQUENTLY ASKED QUESTIONS</p>
        </div>
        <div class="container">
          <div class="accordion" id="accordionFaq">
            <div v-for="(faq, idfq) in faqList" :key="idfq" class="accordion-item mb-2 rounded-sm">
              <h2 class="accordion-header rounded-sm border-0" :id="`headingFaq${idfq}`">
                <button class="collapsed accordion-button rounded-sm border-0 text-white fs-14px ls-xs pb-2"
                  type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseFaq${idfq}`" aria-expanded="false"
                  :aria-controls="`collapseFaq${idfq}`">{{ faq.title }}</button>
              </h2>
              <div :id="`collapseFaq${idfq}`" class="accordion-collapse collapse" :aria-labelledby="`headingFaq${idfq}`"
                data-bs-parent="#accordionFaq">
                <div class="accordion-body text-white fs-13px ls-xs fw-300 pt-0" v-html="faq.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
