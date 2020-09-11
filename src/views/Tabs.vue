<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="list" href="/tabs/one">
            <ion-label>ONE</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="upload" href="/tabs/two">
            <ion-label>TWO</ion-label>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonLabel,
  IonPage,
} from "@ionic/vue";

export default {
  name: "Tabs",
  components: {
    IonContent,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonPage,
  },
  setup() {
    return { };
  },
};
</script>