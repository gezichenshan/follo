<script setup lang="ts">

</script>

<template>
  <header class="header">
    <div class="header-menu">
      <div class="section-user">
        <div class="item-userprofile">
          <a-button class="btn-userprofile">
            <span class="txt-username">J</span>
            <span class="">
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12.3535 8.06058L8.7071 11.707C8.31658 12.0976 7.68341 12.0976 7.29289 11.707L3.64644 8.06058C3.33146 7.7456 3.55454 7.20703 4 7.20703H12C12.4454 7.20703 12.6685 7.7456 12.3535 8.06058Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a-button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
}
.header-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  box-sizing: inherit;
  background: linear-gradient(
    0deg,
    rgb(250 250 250 / 0%) 0%,
    rgb(250 250 250 / 100%) 16%
  );

  .section-user {
    display: flex;
    flex-grow: 1;
    justify-content: end;
    min-width: 0;
    max-width: 1264px;
    padding: 0 32px;
  }
}

.item-userprofile {
  display: flex;
  justify-content: end;

  .btn-userprofile {
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 2px 0;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    color: inherit;
    font: inherit;
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer;
    box-shadow: none;

    .txt-username {
      width: 32px;
      min-width: 32px;
      height: 32px;
      min-height: 32px;
      font-size: 14px;
      border: 2px solid transparent;
      border-radius: 50%;
      display: inline-flex;
      vertical-align: middle;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 50%;
      background: var(--color-grey-3, #cccccc);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }
  }
}
</style>
