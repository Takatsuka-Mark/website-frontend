<template>
  <li v-if="isHeader" :class="{headerLink: true, className}">
    <router-link :to="link" class="sidebar-link">
      <span class="icon">
        <i :class="fullIconName"></i>
      </span>
      {{header}}
    </router-link>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NavLink',
  props: {
    header: { type: String, default: '' },
    link: { type: String, default: '' },
    iconName: { type: String, default: '' },
    index: { type: String, default: '' },
    className: { type: String, default: '' },
    activeItem: { type: String, default: '' },
    isHeader: { type: Boolean, default: false },
  },
  data() {
    return {
      headerLinkWasClicked: true,
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive']),
    togglePanelCollapse(link) {
      this.changeSidebarActive(link);
      this.headerLinkWasClicked = !this.headerLinkWasClicked
        || !this.activeItem.includes(this.index);
    },
  },
  computed: {
    fullIconName() {
      return `fi ${this.iconName}`;
    },
    isActive() {
      return (this.activeItem
        && this.activeItem.includes(this.index)
        && this.headerLinkWasClicked);
    },
  },
};
</script>

<style src="./NavLink.scss" lang="scss" scoped/>
