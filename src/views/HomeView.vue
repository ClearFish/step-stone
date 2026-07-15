<script setup>
/*
 * 首页：复刻 StepStone Group 首页
 * 由五个子区块组合而成，按顺序：Hero / Stats / Pillars / ClearView / Insights
 */
import HeroSection from '@/components/home/HeroSection.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import PillarsSection from '@/components/home/PillarsSection.vue'
import ClearViewSection from '@/components/home/ClearViewSection.vue'
import InsightsSection from '@/components/home/InsightsSection.vue'

</script>

<template>
  <div class="home">
    <HeroSection />
    <StatsSection />
    <PillarsSection />
    <ClearViewSection />
    <InsightsSection />
    
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}
</style>
