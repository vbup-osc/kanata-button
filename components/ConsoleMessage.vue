<template>
  <div style="display: none;" />
</template>
<script>
export default {
  mounted() {
    const dayjs = require('dayjs');
    let started = dayjs('20200107', 'YYYYMMDD');
    const heart = 'color: #FF5A79; font-size: 105px;';
    console.log('%c❤%c天音かなた%c❤', heart, 'color: #0EBCF8; font-size: 105px; font-weight: bold;', heart);
    console.log('%c' + this.$t('site.title'), 'color: #6CB9F6', 'https://github.com/oruyanke/kanata-button');
    console.log('The project has lived for ' + dayjs().diff(started, 'day') + ' days.');
  }
};
</script>
