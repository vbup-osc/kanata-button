<template>
  <v-layout>
    <v-flex>
      <v-card :loading="loading">
        <v-card-title>{{ $t('site.links') }}</v-card-title>
        <v-card-text>
          <a v-for="item in links" :key="item.name" :href="item.href" target="_blank">
            <voice-btn :large="true" class="link-button white--text" :class="item.color">
              <!-- <voice-btn :large="true" class="link-button white--text" :class="item.color" :emoji="item.emoji"> -->
              {{ item.name }}
              <!-- {{ item.tr[current_locale] }} -->
            </voice-btn>
          </a>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import VoiceBtn from '../components/VoiceBtn';
export default {
  components: {
    VoiceBtn
  },
  data() {
    return {
      links: [
        {
          name: 'VTuber按钮合集',
          href: 'https://vtbbtn.org/',
          color: 'primary'
        },
        {
          name: '樱按钮/みこボタン',
          href: 'https://sakuramiko.org/',
          color: 'pink'
        },
        {
          name: '夸按钮/あくあボタン',
          href: 'https://aquaminato.moe/',
          color: 'purple'
        },
        {
          name: '祭按钮/まつりボタン',
          href: 'https://natsuiromatsuri.moe/',
          color: 'secondary'
        },
        {
          name: '狼按钮/ミオボタン',
          href: 'https://ookamimio.org/',
          color: 'black'
        },
        {
          name: '余按钮/なきりあやめボタン',
          href: 'https://nakiriayame.moe/',
          color: 'red'
        },
        {
          name: '狗按钮/ころねボタン',
          href: 'https://korone.icu/',
          color: 'brown'
        }
      ],
      loading: true
    };
  },
  computed: {
    current_locale() {
      return this.$i18n.locale;
    }
  },
  mounted() {
    // const api = 'https://fubuki.moe/links.json';
    // this.$axios
    //   .get(api)
    //   .then(res => {
    //     this.links = this.shuffle(
    //       res.data.filter(function (el) {
    //         return el.title !== 'kanata';
    //       })
    //     );
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     this.loading = false;
    //   });
  },
  methods: {
    shuffle(array) {
      //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
  }
};
</script>
