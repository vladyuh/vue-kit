<template>
  <div class="home">
    <div class="container home-container">
      <breadcrumbs
          :items="breadcrumbs"
      />
      <h2>Кнопки</h2>
      <div class="buttons" style="display: flex; flex-direction: column; gap: 12px">
        <btn>
          <span>Normal</span>
        </btn>
        <btn gradient>
          <span>Gradient</span>
        </btn>
        <btn spinner>
          <span>Spinner</span>
        </btn>
        <btn dashed>
          <span>Dashed</span>
        </btn>
      </div>
      <h2>Чекбоксы</h2>
      <checkbox
        label="Unchecked"
      />
      <checkbox
          label="Checked"
          :value="true"
      />
      <h2>Радиокнопки</h2>
      <radio
          name="radio-1"
          label="Unchecked"
      />
      <radio
          name="radio-1"
          label="Checked"
          :value="true"
      />
      <h2>Выпадающий список</h2>
      <div class="selects" style="display: flex; flex-direction: column; gap: 12px">
        <custom-select
            placeholder="Select option"
            :options="options"
        />
        <custom-select
            placeholder="Select option"
            icon-name="ic_apps"
            :options="options"
        />
      </div>
      <h2>Текстовые поля</h2>
      <div class="inputs" style="display: flex; flex-direction: column; gap: 12px">
        <input-field
            type="text"
            name="user"
            placeholder="Your name"
        />
        <input-field
            icon-name="ic_apps"
            type="tel"
            name="phone"
            placeholder="Your phone"
        />
        <input-field
            :is-input="false"
            name="message"
            placeholder="Your message"
        />
        <input-field
            :is-input="false"
            icon-name="ic_apps"
            name="message"
            placeholder="Additional info"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/common-components/breadcrumbs";
import Btn from "@/common-components/btn";
import Checkbox from "@/common-components/checkbox";
import CustomSelect from "@/common-components/custom-select";
import InputField from "@/common-components/input-field";
import radio from "@/common-components/radio";
export default {
  name: 'HomeView',
  components: {
    CustomSelect,
    Checkbox,
    Breadcrumbs,
    Btn,
    InputField,
    radio
  },
  data () {
    return {
      breadcrumbs: [
        { href: '/', text: 'Главная' },
        { href: '/components', text: 'Компоненты' }
      ],
      options: [
        { name: "Option 1", value: "Option 1", label: "Option 1" },
        { name: "Option 2", value: "Option 2", label: "Option 2"}
      ]
    }
  }
}
</script>

<style lang="scss">
  .home {
    padding-top: 71px;
  }
</style>
